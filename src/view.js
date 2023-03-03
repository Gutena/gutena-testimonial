import { merge } from 'lodash';
import { applyFilters } from '@wordpress/hooks';
import { tns } from "tiny-slider/src/tiny-slider"

// expose slider object to window.
var gutenaTestimonialSliders = [];

document.addEventListener( 'DOMContentLoaded', () => {
    const accordionNodeList = document.querySelectorAll( '.gutena-testimonial-block.can-slide > .gutena-testimonial-slider' );
    accordionNodeList?.forEach( ( el, index ) => {
        let settingsData = el?.getAttribute( 'data-slider-settings' );
        el?.removeAttribute( 'data-slider-settings' );
        el?.setAttribute( 'data-slider-index', index );

        let sliderData = {
            container: el,
            items: 1,
            gutter: 10,
            autoplay: true,
            navAsThumbnails: true,
            mouseDrag: true,
            navPosition: "bottom",
            autoplayButtonOutput: false,
        }; 

        if ( settingsData ) {
            settingsData = JSON.parse( settingsData )
            sliderData = merge( sliderData, settingsData )
        }

        const slider = tns( applyFilters( 'gutenaTetimonials.settingsData', sliderData, index ) );
        gutenaTestimonialSliders.push( slider )
    } );
} );