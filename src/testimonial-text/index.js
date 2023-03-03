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
                <g clip-path="url(#clip0_4119_216)">
                    <path d="M13 6V21H11V6H5V4H19V6H13Z" fill="#0EA489"/>
                </g>
                <defs>
                    <clipPath id="clip0_4119_216">
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