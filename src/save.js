import { __ } from '@wordpress/i18n'
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

import classNames from 'classnames';

export default function save( { attributes } ) {
    const { uniqueId, sliderCount, contentAlign, sliderBoxShadow, sliderNavDot, sliderNavArrow } = attributes;
    const blockProps = useBlockProps.save( {
        className: classNames( 'gutena-testimonial-block', `gutena-testimonial-block-${ uniqueId } align-${ contentAlign }`, {
            'has-box-shadow': sliderBoxShadow?.onBoxShadow,
            'can-slide': sliderCount > 1,
            'has-nav-dot': sliderNavDot,
            'has-nav-arrow': sliderNavArrow
        } ),
    } )
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
        <div { ...innerBlocksProps }>
            <div className="gutena-testimonial-slider">
                { innerBlocksProps.children }
            </div>
        </div>
    );
}
