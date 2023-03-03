/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks'
import { Icon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import metadata from './data.json'
import edit from './edit'
import save from './save'

const gutenaBlockIcon = () => (
	<Icon
		icon={ () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4119_210)">
                    <path d="M12.0002 14.656L14.8172 16.376L14.0512 13.166L16.5582 11.019L13.2682 10.755L12.0002 7.708V14.656ZM12.0002 17L6.12223 20.59L7.72023 13.89L2.49023 9.41L9.35523 8.86L12.0002 2.5L14.6452 8.86L21.5112 9.41L16.2802 13.89L17.8782 20.59L12.0002 17Z" fill="#0EA489"/>
                </g>
                <defs>
                    <clipPath id="clip0_4119_210">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
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