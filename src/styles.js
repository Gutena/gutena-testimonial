/**
 * External dependencies
 */
import { includes, merge, pickBy } from 'lodash';
import { boxShadowCss } from './utils/helpers';

export default function DynamicStyles( attributes ) {
	const {
        sliderPadding,
        sliderContainerPadding,
        sliderBoxShadow,
        sliderGutterWidth,
        sliderMinHeight,
        sliderQuoteIconSize, 
        sliderQuoteIconColor,
        sliderQuoteSpaceAfterIcon,
        sliderRatingIconSize,
        sliderRatingColor,
        sliderSpaceAfterRating,
        sliderImageSize,
        sliderSpaceBeforeDetails,
        sliderNavDotSize,
        sliderNavDotGap,
        sliderNavDotSpace,
        sliderNavDotColors,
        sliderNavArrowSize,
        sliderNavArrowSpace,
        sliderNavArrowPosition,
        sliderNavArrowColors,
        sliderTextFontFamily,
        sliderTextFontSize,
        sliderTextFontStyle,
        sliderTextFontWeight,
        sliderTextLineHeight,
        sliderTextTextTransform,
        sliderNameFontFamily,
        sliderNameFontSize,
        sliderNameFontStyle,
        sliderNameFontWeight,
        sliderNameLineHeight,
        sliderNameTextTransform,
        sliderPositionFontFamily,
        sliderPositionFontSize,
        sliderPositionFontStyle,
        sliderPositionFontWeight,
        sliderPositionLineHeight,
        sliderPositionTextTransform,
        sliderTextColor,
        sliderNameColor,
        sliderPositionColor,
    } = attributes

    const transformData = ( data, fallback = {} ) => {
        let output = {}
        merge( output, fallback, data )
        return `${output?.top} ${output?.right} ${output?.bottom} ${output?.left}`
    }
    
    const transformBorder = ( data, type, fallback = {} ) => {
        let output = {}
        merge( output, processBorder( fallback ), processBorder( data ) )

        let newvar = output[ type ]
        return `${newvar?.width} ${newvar?.style} ${newvar?.color}`
    }

    const processBorder = data => {
        if ( typeof data == 'object' && Object.keys( data ).length == 3 ) {
            return {
                top: data,
                right: data,
                bottom: data,
                left: data
            }
        }
        return data
    }

	const styleProps = pickBy( {
        // Container gutter width
        '--gutena--testimonial-slider-min-height': sliderMinHeight?.desktop,
        '--gutena--testimonial-slider-min-height-tablet': sliderMinHeight?.tablet,
        '--gutena--testimonial-slider-min-height-mobile': sliderMinHeight?.mobile,

        // Container gutter width
        '--gutena--testimonial-slider-gutter-width': sliderGutterWidth?.desktop,
        '--gutena--testimonial-slider-gutter-width-tablet': sliderGutterWidth?.tablet,
        '--gutena--testimonial-slider-gutter-width-mobile': sliderGutterWidth?.mobile,

        // Container padding
        '--gutena--testimonial-slider-padding': transformData( sliderPadding?.desktop ),
        '--gutena--testimonial-slider-padding-tablet': transformData( sliderPadding?.tablet ),
        '--gutena--testimonial-slider-padding-mobile': transformData( sliderPadding?.mobile ),

        // Container boxshadow
        '--gutena--testimonial-slider-box-shadow': boxShadowCss( sliderBoxShadow, false ),
        '--gutena--testimonial-slider-container-padding':  transformData( sliderContainerPadding ),

        // quote icon
        '--gutena--testimonial-quote-icon-size': sliderQuoteIconSize,
        '--gutena--testimonial-quote-icon-color': sliderQuoteIconColor,
        '--gutena--testimonial-quote-icon-spacing': sliderQuoteSpaceAfterIcon,

        // rating icon
        '--gutena--testimonial-rating-icon-size': sliderRatingIconSize,
        '--gutena--testimonial-rating-color': sliderRatingColor,
        '--gutena--testimonial-rating-spacing': sliderSpaceAfterRating,

        // image
        '--gutena--testimonial-image-size': sliderImageSize,
        '--gutena--testimonial-space-before-details': sliderSpaceBeforeDetails,

        // nav dot styles
        '--gutena--testimonial-nav-dot-size': sliderNavDotSize,
        '--gutena--testimonial-nav-dot-gap': sliderNavDotGap,
        '--gutena--testimonial-nav-dot-spacing': sliderNavDotSpace,
        '--gutena--testimonial-nav-dot-normal-color': sliderNavDotColors?.normal,
        '--gutena--testimonial-nav-dot-active-color': sliderNavDotColors?.active,

        // nav arrow styles
        '--gutena--testimonial-nav-arrow-size': sliderNavArrowSize,
        '--gutena--testimonial-nav-arrow-spacing': sliderNavArrowSpace,
        '--gutena--testimonial-nav-arrow-position': sliderNavArrowPosition,
        '--gutena--testimonial-nav-arrow-normal-color': sliderNavArrowColors?.normal,
        '--gutena--testimonial-nav-arrow-hover-color': sliderNavArrowColors?.hover,

        // general text styles
        '--gutena--testimonial-text-font-family': sliderTextFontFamily,
        '--gutena--testimonial-text-font-size': sliderTextFontSize,
        '--gutena--testimonial-text-font-style': sliderTextFontStyle,
        '--gutena--testimonial-text-font-weight': sliderTextFontWeight,
        '--gutena--testimonial-text-line-height': sliderTextLineHeight,
        '--gutena--testimonial-text-text-transform': sliderTextTextTransform,

        // testimonial name style
        '--gutena--testimonial-name-font-family': sliderNameFontFamily,
        '--gutena--testimonial-name-font-size': sliderNameFontSize,
        '--gutena--testimonial-name-font-style': sliderNameFontStyle,
        '--gutena--testimonial-name-font-weight': sliderNameFontWeight,
        '--gutena--testimonial-name-line-height': sliderNameLineHeight,
        '--gutena--testimonial-name-text-transform': sliderNameTextTransform,

        // testimonial postion text styles
        '--gutena--testimonial-position-font-family': sliderPositionFontFamily,
        '--gutena--testimonial-position-font-size': sliderPositionFontSize,
        '--gutena--testimonial-position-font-style': sliderPositionFontStyle,
        '--gutena--testimonial-position-font-weight': sliderPositionFontWeight,
        '--gutena--testimonial-position-line-height': sliderPositionLineHeight,
        '--gutena--testimonial-position-text-transform': sliderPositionTextTransform,

        // slider content colors
        '--gutena--testimonial-text-color': sliderTextColor,
        '--gutena--testimonial-name-color': sliderNameColor,
        '--gutena--testimonial-position-color': sliderPositionColor,
        }, value => typeof value !== 'undefined' && '' !== value && 'NaN' !== value && 'none' !== value && ! includes( value, 'undefined' )
    )

	return styleProps
}