import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Import custom
 */
import parseIcon from '../utils/parse-icon';
import { flattenIconsArray } from '../utils/icon-functions';
import getIcons from '../icons';

export default function save( { attributes } ) {
    const { sliderIconShow, sliderIcon, sliderIconColor } = attributes

    const iconsAll = flattenIconsArray( getIcons() );
    const iconsObj = iconsAll.reduce( ( acc, value ) => {
        acc[ value?.name ] = value?.icon
        return acc
    }, {} )

    const renderSVG = ( svg, size ) => {
        let renderedIcon = iconsObj?.[ svg ];
        // Icons provided by third-parties are generally strings.
        if ( typeof renderedIcon === 'string' ) {
            renderedIcon = parseIcon( renderedIcon );
        }

        return <Icon icon={ renderedIcon } size={ size } style={ { fill: sliderIconColor } } />;
    }

	const blockProps = useBlockProps.save( {
        className: 'gutena-testimonial-icon-block',
    } )

    if ( ! sliderIconShow ) {
        return null;
    }

	return (
        <div { ...blockProps }>
            { renderSVG( sliderIcon ) }
        </div>
    )
}
