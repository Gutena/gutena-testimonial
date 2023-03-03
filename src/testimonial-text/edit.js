import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function edit( { attributes, setAttributes } ) {
    const { textContent } = attributes

	const blockProps = useBlockProps( {
        className: 'gutena-testimonial-text-block',
    } );

	return (
        <div { ...blockProps }>
            <RichText
                tagName="div"
                value={ textContent }
                allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
                onChange={ ( content ) => setAttributes( { textContent: content } ) }
                placeholder={ __( 'Type your content here...' ) }
                className="gutena-testimonial-text-content"
            />
        </div>
    )
}
