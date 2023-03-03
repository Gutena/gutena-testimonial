/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { useEffect } from '@wordpress/element'
import { 
    InspectorControls,
    useBlockProps,
} from '@wordpress/block-editor'
import { 
    Icon,
    PanelBody,
    BaseControl,
    ColorPalette,
    RangeControl,
} from '@wordpress/components'

export default function edit( { attributes, context, setAttributes } ) {
    const { numRating, sliderRatingShow, iconColor } = attributes
    const sliderRatingShowGlobal = context?.gutenaTestimonialRatingShow

    useEffect( () => {
        if ( sliderRatingShow != sliderRatingShowGlobal ) {
            setAttributes( { sliderRatingShow: sliderRatingShowGlobal } )
        }
    }, [ sliderRatingShowGlobal ] )

    const blockProps = useBlockProps( {
        className: 'gutena-testimonial-rating-block',
    } );

    const fullStar = Math.floor( numRating );
	const halfStar = numRating % 1 === 0 ? 0 : 1;
	const emptyStar = 5 - ( fullStar + halfStar );

    if ( ! sliderRatingShow ) {
        return null;
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'gutena-testimonial' ) }>
                    <RangeControl
                        label={ __( 'Rating Scale', 'gutena-testimonial' ) }
                        value={ numRating }
                        onChange={ ( value ) => setAttributes( { numRating: value } ) }
                        min={ 0.5 }
                        max={ 5 }
                        step={ 0.5 }
                    />
                    <BaseControl label={ __( 'Icon Color', 'gutena-star-ratings' ) } __nextHasNoMarginBottom={ false }>
                        <ColorPalette
                            value={ iconColor }
                            colors={ [
                                { name: 'red', color: '#f00' },
                                { name: 'white', color: '#fff' },
                                { name: 'blue', color: '#00f' },
                            ] }
                            onChange={ ( value ) => setAttributes( { iconColor: value } ) }
                        />
                    </BaseControl>
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                { fullStar
                    ? [ ...Array( fullStar ).keys() ].map( ( item, index ) => (
                        <Icon key={ index } className="gutena-full-rating" style={ { fill: iconColor } } icon={ 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>
                        } />
                    ) )
                    : null 
                }
                { halfStar ? (
                        <Icon className="gutena-half-rating" style={ { fill: iconColor } } icon={ 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14.656l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"/></svg>
                        } />
                    ) : null 
                }
                { emptyStar && emptyStar >= 0
                    ? [ ...Array( emptyStar ).keys() ].map( ( item, index ) => (
                        <Icon key={ index } className="gutena-empty-rating" style={ { fill: iconColor } } icon={ 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"/></svg>
                        } />
                    ) )
                    : null 
                }
            </div>
        </>
    )
}
