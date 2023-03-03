/**
 * Register sub blocks.
 */
import './testimonial-details/index.js'
import './testimonial-item/index.js'
import './testimonial-icon/index.js'
import './testimonial-rating/index.js'
import './testimonial-text/index.js'

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from "./edit";
import save from './save';

import './style.scss'

const gutenaBlockIcon = () => (
	<Icon
		icon={ () => (
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.7002" cy="21.5" r="1.5" fill="#0DA88C"/>
                <circle opacity="0.3" cx="11.7002" cy="21.5" r="1.5" fill="#0DA88C"/>
                <circle opacity="0.3" cx="17.7002" cy="21.5" r="1.5" fill="#0DA88C"/>
                <path d="M1.33333 0H22.6667C23.0203 0 23.3594 0.105357 23.6095 0.292893C23.8595 0.48043 24 0.734784 24 1V17C24 17.2652 23.8595 17.5196 23.6095 17.7071C23.3594 17.8946 23.0203 18 22.6667 18H1.33333C0.979711 18 0.640573 17.8946 0.390524 17.7071C0.140476 17.5196 0 17.2652 0 17V1C0 0.734784 0.140476 0.48043 0.390524 0.292893C0.640573 0.105357 0.979711 0 1.33333 0ZM2 2V16H22V2H2Z" fill="#0EA489"/>
                <path d="M7.87002 11.3966C7.30393 10.8367 7 10.2087 7 9.19069C7 7.39936 8.35038 5.79381 10.3141 5L10.8049 5.70527C8.97198 6.62857 8.61364 7.82672 8.47074 8.58214C8.76588 8.43986 9.15225 8.39022 9.53093 8.42297C10.5224 8.50844 11.304 9.26643 11.304 10.2087C11.304 10.6838 11.1013 11.1394 10.7405 11.4753C10.3798 11.8113 9.89051 12 9.38034 12C8.79061 12 8.22672 11.7492 7.87002 11.3966ZM13.3661 11.3966C12.8 10.8367 12.496 10.2087 12.496 9.19069C12.496 7.39936 13.8464 5.79381 15.8102 5L16.301 5.70527C14.468 6.62857 14.1097 7.82672 13.9668 8.58214C14.2619 8.43986 14.6483 8.39022 15.027 8.42297C16.0185 8.50844 16.8 9.26643 16.8 10.2087C16.8 10.6838 16.5973 11.1394 16.2366 11.4753C15.8758 11.8113 15.3866 12 14.8764 12C14.2867 12 13.7228 11.7492 13.3661 11.3966Z" fill="#0EA489"/>
            </svg>
		) }
	/>
);

/**
 * Register Block
 */
registerBlockType( metadata, {
	edit,
    save,
    icon: gutenaBlockIcon
} )