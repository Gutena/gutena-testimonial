import { __ } from '@wordpress/i18n'
import { useEffect } from '@wordpress/element'
import { PanelColorSettings, InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor'
import { PanelBody } from '@wordpress/components'

import ImageControl from '../components/ImageControl';

export default function edit( { context, attributes, setAttributes } ) {
    const { imageData, name, position, imagePosition, nameColor, positionColor } = attributes
    const imagePositionGlobal = context?.gutenaTestimonialImagePosition

    useEffect( () => {
        if ( imagePosition != imagePositionGlobal ) {
            setAttributes( { imagePosition: imagePositionGlobal } )
        }
    }, [ imagePositionGlobal ] )

	const blockProps = useBlockProps( {
        className: `gutena-testimonial-details-block image-${ imagePosition }`,
    } );

	return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Image', 'gutena-testimonial' ) }>
                    <ImageControl
                        i18n={ {
                            imageSize: __( 'Image Size', 'gutena-testimonial' ),
                            uploadImage: __( 'Choose or Upload an image', 'gutena-testimonial' ),
                        } }
                        value={ imageData }
                        onChange={ ( imageData ) => setAttributes( { imageData } ) }
                        //enableImageSizes
                    />
                </PanelBody>
                <PanelColorSettings
                    __experimentalHasMultipleOrigins
                    __experimentalIsRenderedInSidebar
                    title={ __( 'Colors', 'gutena-testimonial' ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: nameColor,
                            onChange: ( value ) => setAttributes( { nameColor: value } ),
                            label: __( 'Author Name', 'gutena-testimonial' ),
                        },
                        {
                            value: positionColor,
                            onChange: ( value ) => setAttributes( { positionColor: value } ),
                            label: __( 'Designation', 'gutena-testimonial' ),
                        }
                    ] }
                />
            </InspectorControls>

            <div { ...blockProps }>
                { imageData && imageData.url && (
                    <div className="gutena-testimonial-details-image">
                        <img src={ imageData.url } alt={ imageData.alt } className="gutena-testimonial-image" />
                    </div>
                ) }
                <div className="gutena-testimonial-details-content">
                    <div className="gutena-testimonial-name">
                        <RichText
                            tagName="span"
                            value={ name }
                            allowedFormats={ [ 'core/bold', 'core/italic' ] }
                            onChange={ ( content ) => setAttributes( { name: content } ) }
                            placeholder={ __( 'Name' ) }
                            style={ { color: nameColor } }
                        />
                    </div>
                    <div className="gutena-testimonial-title">
                        <RichText
                            tagName="span" 
                            value={ position } 
                            allowedFormats={ [ 'core/bold', 'core/italic' ] } 
                            onChange={ ( content ) => setAttributes( { position: content } ) } 
                            placeholder={ __( 'Position' ) } 
                            style={ { color: positionColor } }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
