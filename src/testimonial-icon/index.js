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
                <g clipPath="url(#clip0_4119_213)">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011C3 9.511 5.457 6.374 9.03 4.823L9.923 6.201C6.588 8.005 5.936 10.346 5.676 11.822C6.213 11.544 6.916 11.447 7.605 11.511C9.409 11.678 10.831 13.159 10.831 15C10.831 15.9283 10.4623 16.8185 9.80587 17.4749C9.1495 18.1313 8.25926 18.5 7.331 18.5C6.258 18.5 5.232 18.01 4.583 17.321ZM14.583 17.321C13.553 16.227 13 15 13 13.011C13 9.511 15.457 6.374 19.03 4.823L19.923 6.201C16.588 8.005 15.936 10.346 15.676 11.822C16.213 11.544 16.916 11.447 17.605 11.511C19.409 11.678 20.831 13.159 20.831 15C20.831 15.9283 20.4623 16.8185 19.8059 17.4749C19.1495 18.1313 18.2593 18.5 17.331 18.5C16.258 18.5 15.232 18.01 14.583 17.321Z" fill="#0EA489"/>
                </g>
                <defs>
                    <clipPath id="clip0_4119_213">
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