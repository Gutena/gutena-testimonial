import { __ } from '@wordpress/i18n'
import { Slide } from 'pure-react-carousel';
import { useSelect } from '@wordpress/data';
import { 
    useBlockProps, 
    useInnerBlocksProps,
    store as blockEditorStore
} from '@wordpress/block-editor';

import placeholderImage from './image.png';

const ALLOWED_BLOCKS = [ 
    'gutena/testimonial-text', 
    'gutena/testimonial-icon', 
    'gutena/testimonial-rating', 
    'gutena/testimonial-details'
]

const BLOCK_TEMPLATE = [
    [ 'gutena/testimonial-icon' ],
    [ 'gutena/testimonial-rating' ],
    [ 'gutena/testimonial-text', { textContent: "Far far away, behind the word mountains far from the countries vokalia and consonantia there live the blind texts." } ],
    [ 'gutena/testimonial-details', { name: "John Smith", position: "Business Man", imageData: { url: placeholderImage, id: 0, alt: "Placeholder Image" } } ]
];

export default function edit( { clientId, context } ) {
    const sliderCount = context?.gutenaTestimonialCount;

    const { blockIndex } = useSelect(
		( select ) => {
			return {
                blockIndex: select( blockEditorStore ).getBlockIndex( clientId )
			};
		},
		[ clientId ]
	);

	const blockProps = useBlockProps( {
        className: 'gutena-testimonial-item-block editor',
    } );

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        template: BLOCK_TEMPLATE,
        allowedBlocks: ALLOWED_BLOCKS,
        //templateLock: "all",
	} );

    return (
        <>
        { sliderCount > 1 ?
            <Slide index={ blockIndex } className="gutena-testimonial-slide">
                <div { ...innerBlocksProps } />
            </Slide> : 
            <div className="gutena-testimonial-slide">
                <div { ...innerBlocksProps } />
            </div>
        }
        </>
    );
}
