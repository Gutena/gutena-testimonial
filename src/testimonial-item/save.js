import { __ } from '@wordpress/i18n'
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

export default function save() {
	const blockProps = useBlockProps.save( {
        className: 'gutena-testimonial-item-block',
    } )
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
        <div className="gutena-testimonial-slide">
            <div { ...innerBlocksProps } />
        </div>
    );
}
