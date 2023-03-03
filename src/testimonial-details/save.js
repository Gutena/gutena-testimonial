import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save( { attributes } ) {
    const { imageData, name, position, imagePosition, nameColor, positionColor } = attributes

	const blockProps = useBlockProps.save( {
        className: `gutena-testimonial-details-block image-${ imagePosition }`,
    } )

	return (
        <div { ...blockProps }>
            { imageData && imageData.url && (
                <div className="gutena-testimonial-details-image">
                    <img src={ imageData.url } alt={ imageData.alt } className="gutena-testimonial-image" />
                </div>
			) }
            <div className="gutena-testimonial-details-content">
                { ! RichText.isEmpty( name ) && (
                    <div className="gutena-testimonial-name">
                        <RichText.Content tagName="span" value={ name } style={ { color: nameColor } } />
                    </div>
                ) }
                
                { ! RichText.isEmpty( position ) && (
                    <div className="gutena-testimonial-title">
                        <RichText.Content tagName="span" value={ position } style={ { color: positionColor } } />
                    </div>
                ) }
            </div>
        </div>
    )
}
