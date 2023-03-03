import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { BlockControls, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { 
    Icon,
    PanelBody,
    BaseControl,
    ColorPalette,
    ToolbarGroup, 
	ToolbarButton
} from '@wordpress/components';

/**
 * External dependencies
 */
import IconControl from '../components/IconControl';

/**
 * Import custom
 */
import InserterModal from '../inserters/inserter'
import parseIcon from '../utils/parse-icon';
import { flattenIconsArray } from '../utils/icon-functions';
import getIcons from '../icons';

export default function edit( { attributes, context, setAttributes } ) {
    const { sliderIconShow, sliderIcon, sliderIconColor } = attributes
    const sliderIconShowGlobal = context?.gutenaTestimonialIconShow

    const [ isInserterOpen, setInserterOpen ] = useState( false );
    
    useEffect( () => {
        if ( sliderIconShow != sliderIconShowGlobal ) {
            setAttributes( { sliderIconShow: sliderIconShowGlobal } )
        }
    }, [ sliderIconShowGlobal ] )

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

	const blockProps = useBlockProps( {
        className: 'gutena-testimonial-icon-block',
    } );

    if ( ! sliderIconShow ) {
        return null;
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={ renderSVG( sliderIcon ) }
                        label={ __( 'Edit Icon', 'gutena-tabs' ) }
                        onClick={ () => setInserterOpen( true ) }
                    />
                </ToolbarGroup>
            </BlockControls>

            <InserterModal
                isInserterOpen={ isInserterOpen }
                setInserterOpen={ setInserterOpen }
                value={ sliderIcon }
                onChange={ ( value ) => setAttributes( { sliderIcon: value?.iconName } ) } 
            />

            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'gutena-testimonial' ) }>
                    <IconControl 
                        activeIcon={ sliderIcon } 
                        value={ sliderIcon } 
                        onChange={ ( value ) => setAttributes( { sliderIcon: value?.iconName } ) }
                        onClear={ () => setAttributes( { sliderIcon: '' } ) }
                        withPanel={ false }
                        initialOpen={ true }
                        panelTitle={ __( 'Icon Settings', 'gutena-tabs' ) }
                    />
                    <BaseControl label={ __( 'Icon Color', 'gutena-star-ratings' ) } __nextHasNoMarginBottom={ false }>
                        <ColorPalette
                            value={ sliderIconColor }
                            colors={ [
                                { name: 'red', color: '#f00' },
                                { name: 'white', color: '#fff' },
                                { name: 'blue', color: '#00f' },
                            ] }
                            onChange={ ( value ) => setAttributes( { sliderIconColor: value } ) }
                        />
                    </BaseControl>
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                { renderSVG( sliderIcon ) }
            </div>
        </>
    )
}
