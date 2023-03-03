import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( { attributes } ) {
    const { textContent } = attributes

	const blockProps = useBlockProps.save( {
        className: 'gutena-testimonial-text-block',
    } );

	return (
        <div { ...blockProps }>
            { ! RichText.isEmpty( textContent ) && (
                <RichText.Content tagName="div" value={ textContent } className="gutena-testimonial-text-content" />
            ) }
        </div>
    )
}
