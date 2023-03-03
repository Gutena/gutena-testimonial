/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { 
	__experimentalFontFamilyControl as FontFamilyControl,
	__experimentalFontAppearanceControl as FontAppearanceControl,
	store as blockEditorStore,
    InspectorControls,
    PanelColorSettings,
    useInnerBlocksProps,
    ButtonBlockAppender,
    useBlockProps,
    useSetting,
    BlockControls,
} from '@wordpress/block-editor'
import { 
    __experimentalBoxControl as BoxControl,
    __experimentalSpacer as Spacer,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    PanelBody,
    ColorPalette,
    TabPanel,
    BaseControl,
    RangeControl,
    SelectControl,
    ToggleControl,
    FontSizePicker,
    ToolbarGroup, 
} from '@wordpress/components'

/**
 * Slider dependencies
 */
import { CarouselProvider, Slider, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

/**
 * External dependencies
 */
import classNames from 'classnames';
import { isEqual } from 'lodash';

/**
 * Internal dependencies
 */
import BoxShadowControl from './components/BoxShadowControl'
import SelectDeviceDropdown from './components/SelectDeviceDropdown';

/**
 * Style helpers dependencies
 */
import DynamicStyles from './styles'
import './editor.scss'

/**
 * This allows for checking to see if the block needs to generate a new ID.
 */
const gutenaTestiUniqueIds = [];

const BLOCK_TEMPLATE = [
    [ 'gutena/testimonial-item' ],
    [ 'gutena/testimonial-item' ],
    [ 'gutena/testimonial-item' ],
];

export default function edit( props ) {
    const { clientId, attributes, setAttributes, isSelected, onFocus } = props
    const { 
        uniqueId,
        contentAlign,
        sliderPadding,
        sliderContainerPadding,
        sliderBoxShadow,
        sliderMinHeight,
        sliderCount, 
        sliderToShow, 
        sliderGutterWidth,
        sliderAutoPlay,
        sliderPlayDirection,
        sliderAutoPlayInterval,
        sliderQuoteIconShow, 
        sliderQuoteIconSize, 
        sliderQuoteIconColor,
        sliderQuoteSpaceAfterIcon,
        sliderRatingShow,
        sliderRatingIconSize,
        sliderRatingColor,
        sliderSpaceAfterRating,
        sliderImagePosition,
        sliderImageSize,
        sliderSpaceBeforeDetails,
        sliderNavDot,
        sliderNavDotSize,
        sliderNavDotGap,
        sliderNavDotSpace,
        sliderNavDotColors,
        sliderNavArrow,
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
        blockStyles,
        sliderSettings 
    } = attributes

    const deviceType = useSelect( select => {
        return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
    }, [] );

    const { innerBlocksCount } = useSelect(
		( select ) => {
			return {
				innerBlocksCount: select( blockEditorStore ).getBlockCount( clientId ),
			};
		},
		[ clientId ]
	);

    useEffect( () => {
        setAttributes( { sliderCount: innerBlocksCount  } )
    }, [ innerBlocksCount ] )

    const blockProps = useBlockProps( {
        className: classNames( 'gutena-testimonial-block', `gutena-testimonial-block-${ uniqueId } align-${ contentAlign }`, {
            'has-box-shadow': sliderBoxShadow?.onBoxShadow,
            'can-slide': sliderCount > 1,
            'has-nav-dot': sliderNavDot,
            'has-nav-arrow': sliderNavArrow
        } ),
    } );

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        template: BLOCK_TEMPLATE,
        allowedBlocks: [ 'gutena/testimonial-item' ],
		renderAppender: false,
        orientation: "horizontal"
	} );

    useEffect( () => {
        if ( ! uniqueId || gutenaTestiUniqueIds.includes( uniqueId ) ) {
			setAttributes( {
				uniqueId: clientId.substr( 2, 9 ),
			} );
			gutenaTestiUniqueIds.push( clientId.substr( 2, 9 ) );
		} else {
			gutenaTestiUniqueIds.push( uniqueId );
		}
    }, [] )

    const sliderTextTypography = (
        <div className="gutena-advanced-accordion-title-typography">
            <FontFamilyControl
                label={ __( 'Font family', 'gutena-testimonial' ) }
                fontFamilies={ useSetting( 'typography.fontFamilies' ) }
                value={ sliderTextFontFamily }
                onChange={ ( value ) => setAttributes( { sliderTextFontFamily: value } ) }
            />
            <FontSizePicker
                label={ __( 'Font size', 'gutena-testimonial' ) }
                value={ sliderTextFontSize }
                onChange={ ( value ) => setAttributes( { sliderTextFontSize: value } ) }
                fallBackFontSize={ 14 }
                fontSizes={ useSetting( 'typography.fontSizes' ) }
            />
            <FontAppearanceControl
                hasFontStyles={ !! useSetting( 'typography.fontStyle' ) }
                hasFontWeights={ !! useSetting( 'typography.fontWeight' ) }
                value={ {
                    fontStyle: sliderTextFontStyle,
                    fontWeight: sliderTextFontWeight,
                } }
                onChange={ ( styles ) => {
                    setAttributes( {
                        sliderTextFontStyle: styles?.fontStyle,
                        sliderTextFontWeight: styles?.fontWeight
                    } )
                } }
            />
            <Spacer marginTop={ 6 } marginBottom={ 6 }>
                <RangeControl
                    label={ __( 'Line height', 'gutena-testimonial' ) }
                    value={ sliderTextLineHeight }
                    onChange={ ( value ) => setAttributes( { sliderTextLineHeight: value } ) }
                    min={ 0 }
                    max={ 10 }
                    step={ 0.1 }
                    allowReset={ true }
                />
            </Spacer>
            <SelectControl
                label={ __( 'Text transform', 'gutena-testimonial' ) } 
                value={ sliderTextTextTransform }
                options={ [
                    { label: __( 'None', 'gutena-testimonial' ), value: '' },
                    { label: __( 'Lower case', 'gutena-testimonial' ), value: 'lowercase' },
                    { label: __( 'Upper case', 'gutena-testimonial' ), value: 'uppercase' },
                    { label: __( 'Capitalized case', 'gutena-testimonial' ), value: 'capitalize' },
                ] }
                onChange={ ( value ) => setAttributes( { sliderTextTextTransform: value } ) }
            />
        </div>
    )

    const sliderNameTypography = (
        <div className="gutena-advanced-accordion-title-typography">
            <FontFamilyControl
                label={ __( 'Font family', 'gutena-testimonial' ) }
                fontFamilies={ useSetting( 'typography.fontFamilies' ) }
                value={ sliderNameFontFamily }
                onChange={ ( value ) => setAttributes( { sliderNameFontFamily: value } ) }
            />
            <FontSizePicker
                label={ __( 'Font size', 'gutena-testimonial' ) }
                value={ sliderNameFontSize }
                onChange={ ( value ) => setAttributes( { sliderNameFontSize: value } ) }
                fallBackFontSize={ 14 }
                fontSizes={ useSetting( 'typography.fontSizes' ) }
            />
            <FontAppearanceControl
                hasFontStyles={ !! useSetting( 'typography.fontStyle' ) }
                hasFontWeights={ !! useSetting( 'typography.fontWeight' ) }
                value={ {
                    fontStyle: sliderNameFontStyle,
                    fontWeight: sliderNameFontWeight,
                } }
                onChange={ ( styles ) => {
                    setAttributes( {
                        sliderNameFontStyle: styles?.fontStyle,
                        sliderNameFontWeight: styles?.fontWeight
                    } )
                } }
            />
            <Spacer marginTop={ 6 } marginBottom={ 6 }>
                <RangeControl
                    label={ __( 'Line height', 'gutena-testimonial' ) }
                    value={ sliderNameLineHeight }
                    onChange={ ( value ) => setAttributes( { sliderNameLineHeight: value } ) }
                    min={ 0 }
                    max={ 10 }
                    step={ 0.1 }
                    allowReset={ true }
                />
            </Spacer>
            <SelectControl
                label={ __( 'Text transform', 'gutena-testimonial' ) } 
                value={ sliderNameTextTransform }
                options={ [
                    { label: __( 'None', 'gutena-testimonial' ), value: '' },
                    { label: __( 'Lower case', 'gutena-testimonial' ), value: 'lowercase' },
                    { label: __( 'Upper case', 'gutena-testimonial' ), value: 'uppercase' },
                    { label: __( 'Capitalized case', 'gutena-testimonial' ), value: 'capitalize' },
                ] }
                onChange={ ( value ) => setAttributes( { sliderNameTextTransform: value } ) }
            />
        </div>
    )

    const sliderPositionTypography = (
        <div className="gutena-advanced-accordion-title-typography">
            <FontFamilyControl
                label={ __( 'Font family', 'gutena-testimonial' ) }
                fontFamilies={ useSetting( 'typography.fontFamilies' ) }
                value={ sliderPositionFontFamily }
                onChange={ ( value ) => setAttributes( { sliderPositionFontFamily: value } ) }
            />
            <FontSizePicker
                label={ __( 'Font size', 'gutena-testimonial' ) }
                value={ sliderPositionFontSize }
                onChange={ ( value ) => setAttributes( { sliderPositionFontSize: value } ) }
                fallBackFontSize={ 14 }
                fontSizes={ useSetting( 'typography.fontSizes' ) }
            />
            <FontAppearanceControl
                hasFontStyles={ !! useSetting( 'typography.fontStyle' ) }
                hasFontWeights={ !! useSetting( 'typography.fontWeight' ) }
                value={ {
                    fontStyle: sliderPositionFontStyle,
                    fontWeight: sliderPositionFontWeight,
                } }
                onChange={ ( styles ) => {
                    setAttributes( {
                        sliderPositionFontStyle: styles?.fontStyle,
                        sliderPositionFontWeight: styles?.fontWeight
                    } )
                } }
            />
            <Spacer marginTop={ 6 } marginBottom={ 6 }>
                <RangeControl
                    label={ __( 'Line height', 'gutena-testimonial' ) }
                    value={ sliderPositionLineHeight }
                    onChange={ ( value ) => setAttributes( { sliderPositionLineHeight: value } ) }
                    min={ 0 }
                    max={ 10 }
                    step={ 0.1 }
                    allowReset={ true }
                />
            </Spacer>
            <SelectControl
                label={ __( 'Text transform', 'gutena-testimonial' ) } 
                value={ sliderPositionTextTransform }
                options={ [
                    { label: __( 'None', 'gutena-testimonial' ), value: '' },
                    { label: __( 'Lower case', 'gutena-testimonial' ), value: 'lowercase' },
                    { label: __( 'Upper case', 'gutena-testimonial' ), value: 'uppercase' },
                    { label: __( 'Capitalized case', 'gutena-testimonial' ), value: 'capitalize' },
                ] }
                onChange={ ( value ) => setAttributes( { sliderPositionTextTransform: value } ) }
            />
        </div>
    )

    const dynamicStyles = DynamicStyles( attributes )
    const renderCSS = (
		<style>
			{`
				.gutena-testimonial-block-${ uniqueId } {
					${ Object.entries( dynamicStyles ).map( ( [ k, v ] ) => `${ k }:${ v }` ).join( ';' ) }
				}
			`}
		</style>
	);

    useEffect( () => {
        if ( ! isEqual( blockStyles, dynamicStyles ) ) {
			setAttributes( {
				blockStyles: dynamicStyles,
			} );
        }
    }, [ dynamicStyles ] )

    // slider settings
    const settings = {
        nav: sliderNavDot,
        controls: sliderNavArrow,
        autoplay: sliderAutoPlay,
        autoplayTimeout: sliderAutoPlayInterval,
        autoplayDirection: sliderPlayDirection,
        responsive: {
            640: {
                items: sliderToShow?.mobile,
                gutter: sliderGutterWidth?.mobile ?? 5
            },
            700: {
                items: sliderToShow?.tablet,
                gutter: sliderGutterWidth?.tablet ?? 15
            },
            900: {
                items: sliderToShow?.desktop,
                gutter: sliderGutterWidth?.desktop ?? 20
            }
        }
    }

    useEffect( () => {
        if ( ! isEqual( sliderSettings, settings ) ) {
			setAttributes( {
				sliderSettings: settings,
			} );
        }
    }, [ settings ] )

    const renderDots = ( props ) => {
        const {
            currentSlide,
            totalSlides,
            visibleSlides,
            disableActiveDots,
            showAsSelectedForCurrentSlideOnly,
        } = props;
    
        const uids = [];
        const dots = [];
        for ( let i = 0; i < totalSlides; i += 1 ) {
            const multipleSelected = i >= currentSlide && i < ( currentSlide + visibleSlides );
            const singleSelected = i === currentSlide;
            const selected = showAsSelectedForCurrentSlideOnly ? singleSelected : multipleSelected;
            const slide = i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i;
            if ( ! uids.includes( slide ) ) {
                dots.push(
                    <Dot
                        key={ i }
                        slide={ slide }
                        selected={ selected }
                        disabled={ disableActiveDots ? selected : false }
                    />
                );
                uids.push( slide );
            }
        }
        return dots;
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ButtonBlockAppender
                        rootClientId={ clientId }
                        className="gutena-testimonial-add-slider"
                    />
                </ToolbarGroup>
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'Styles', 'gutena-testimonial' ) } initialOpen={ false }>
                    <ToggleGroupControl label={ __( 'Content Align', 'gutena-testimonial' ) } value={ contentAlign } onChange={ ( value ) => setAttributes( { contentAlign: value } ) } isBlock>
                        <ToggleGroupControlOption value="left" label={ __( 'Left', 'gutena-testimonial' ) } />
                        <ToggleGroupControlOption value="center" label={ __( 'Center', 'gutena-testimonial' ) } />
                        <ToggleGroupControlOption value="right" label={ __( 'Right', 'gutena-testimonial' ) } />
                    </ToggleGroupControl>
                    <BoxControl
						label={ <SelectDeviceDropdown sideLabel={ __( 'Box Padding', 'gutena-testimonial' ) } labelAtLeft={ true } /> }
						values={ sliderPadding?.[ deviceType.toLowerCase() ] }
						onChange={ ( value ) => {
							setAttributes( { 
								sliderPadding: {
									...sliderPadding,
									[ deviceType.toLowerCase() ]: value
								}
							} )
						} }
					/>
                    <Spacer marginTop={ 3 } marginBottom={ 0 }>
                        <BoxControl
                            label={ __( 'Container Padding', 'gutena-testimonial' ) }
                            values={ sliderContainerPadding }
                            onChange={ ( value ) => setAttributes( { sliderContainerPadding: value } ) }
                        />
                    </Spacer>
                    <Spacer marginTop={ 3 } marginBottom={ 6 }>
                        <BoxShadowControl
                            label={ __( 'Box Shadow', 'gutena-tabs' ) }
                            toggleLabel={ __( 'Enable Box Shadow', 'gutena-tabs' ) }
                            attrValue={ sliderBoxShadow }
                            onChangeFunc={ ( value ) => setAttributes( { sliderBoxShadow: value } ) }
                            withPanel={ false }
                        />
                    </Spacer>
                    <RangeControl
                        label={ <SelectDeviceDropdown sideLabel={ __( 'Min Height (px)', 'gutena-testimonial' ) } labelAtLeft={ true } /> }
                        value={ sliderMinHeight?.[ deviceType.toLowerCase() ] }
                        onChange={ ( value ) => {
                            setAttributes( { 
                                sliderMinHeight: {
                                    ...sliderMinHeight,
                                    [ deviceType.toLowerCase() ]: value
                                }
                            } );
                        } }
                        allowReset={ true }
                        min={ 0 }
                        max={ 600 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Slider', 'gutena-testimonial' ) } initialOpen={ false }>
                    { sliderCount > 1 &&
                        <RangeControl
                            label={ <SelectDeviceDropdown sideLabel={ __( 'Slider to Show', 'gutena-testimonial' ) } labelAtLeft={ true } /> }
                            value={ sliderToShow?.[ deviceType.toLowerCase() ] }
                            onChange={ ( value ) => {
                                setAttributes( { 
                                    sliderToShow: {
                                        ...sliderToShow,
                                        [ deviceType.toLowerCase() ]: value
                                    }
                                } );
                            } }
                            marks={ true }
                            step={ 1 }
                            min={ 1 }
                            max={ innerBlocksCount > 6 ? 6 : innerBlocksCount }
                        />
                    }
                    { sliderToShow?.[ deviceType.toLowerCase() ] > 1 && 
                        <RangeControl
                            label={ <SelectDeviceDropdown sideLabel={ __( 'Gutter Width (px)', 'gutena-testimonial' ) } labelAtLeft={ true } /> }
                            value={ sliderGutterWidth?.[ deviceType.toLowerCase() ] }
                            onChange={ ( value ) => {
                                setAttributes( { 
                                    sliderGutterWidth: {
                                        ...sliderGutterWidth,
                                        [ deviceType.toLowerCase() ]: value
                                    }
                                } );
                            } }
                            min={ 0 }
                            max={ 100 }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Autoplay Slider', 'gutena-testimonial' ) }
                        checked={ sliderAutoPlay }
                        onChange={ () => setAttributes( { sliderAutoPlay: ! sliderAutoPlay } ) }
                    />
                    { sliderAutoPlay &&
                        <>
                            <ToggleGroupControl label={ __( 'Autoplay Direction', 'gutena-testimonial' ) } value={ sliderPlayDirection } onChange={ ( value ) => setAttributes( { sliderPlayDirection: value } ) } isBlock>
                                <ToggleGroupControlOption value="backward" label={ __( 'Left to Right', 'gutena-testimonial' ) } />
                                <ToggleGroupControlOption value="forward" label={ __( 'Right to Left', 'gutena-testimonial' ) } />
                            </ToggleGroupControl>
                            <RangeControl
                                label={__( 'Autoplay Interval', 'gutena-testimonial' ) }
                                value={ sliderAutoPlayInterval }
                                onChange={ ( value ) => setAttributes( { sliderAutoPlayInterval: value } ) }
                                step={ 50 }
                                min={ 50 }
                                max={ 20000 }
                            />
                        </>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Pagination Dots', 'gutena-testimonial' ) } initialOpen={ false }>
                    <ToggleControl
                        label={ __( 'Show Pagination Dots', 'gutena-testimonial' ) }
                        checked={ sliderNavDot }
                        onChange={ () => setAttributes( { sliderNavDot: ! sliderNavDot } ) }
                    />
                    { sliderNavDot &&
                        <>
                            <RangeControl
                                label={ __( 'Dot Size (px)', 'gutena-testimonial' ) }
                                value={ sliderNavDotSize }
                                onChange={ ( value ) => setAttributes( { sliderNavDotSize: value } ) }
                                min={ 5 }
                                max={ 50 }
                            />
                            <RangeControl
                                label={ __( 'Gap Between Dots (px)', 'gutena-testimonial' ) }
                                value={ sliderNavDotGap }
                                onChange={ ( value ) => setAttributes( { sliderNavDotGap: value } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                            <RangeControl
                                label={ __( 'Space Before Dots (px)', 'gutena-testimonial' ) }
                                value={ sliderNavDotSpace }
                                onChange={ ( value ) => setAttributes( { sliderNavDotSpace: value } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                            <BaseControl label={ __( 'Dot Color', 'gutena-testimonial' ) } __nextHasNoMarginBottom={ false }>
                                <PanelColorSettings
                                    __experimentalHasMultipleOrigins
                                    __experimentalIsRenderedInSidebar
                                    className="gutena-testimonials-inline-color-control"
                                    colorSettings={ [
                                        {
                                            value: sliderNavDotColors?.normal,
                                            onChange: ( value ) => setAttributes( { sliderNavDotColors: {
                                                    ...sliderNavDotColors,
                                                    normal: value
                                                } }
                                            ),
                                            label: __( 'Normal Color', 'gutena-testimonial' ),
                                        },
                                        {
                                            value: sliderNavDotColors?.active,
                                            onChange: ( value ) => setAttributes( { sliderNavDotColors: {
                                                    ...sliderNavDotColors,
                                                    active: value
                                                } }
                                            ),
                                            label: __( 'Active Color', 'gutena-testimonial' ),
                                        }
                                    ] }
                                />
                            </BaseControl>
                        </>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Navigation Arrows', 'gutena-testimonial' ) } initialOpen={ false }>
                    <ToggleControl
                        label={ __( 'Show Navigation Arrows', 'gutena-testimonial' ) }
                        checked={ sliderNavArrow }
                        onChange={ () => setAttributes( { sliderNavArrow: ! sliderNavArrow } ) }
                    />
                    { sliderNavArrow &&
                        <>
                            <RangeControl
                                label={ __( 'Arrow Size (px)', 'gutena-testimonial' ) }
                                value={ sliderNavArrowSize }
                                onChange={ ( value ) => setAttributes( { sliderNavArrowSize: value } ) }
                                min={ 5 }
                                max={ 30 }
                            />
                            <RangeControl
                                label={ __( 'Space Before (px)', 'gutena-testimonial' ) }
                                value={ sliderNavArrowSpace }
                                onChange={ ( value ) => setAttributes( { sliderNavArrowSpace: value } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                            { sliderNavDot &&
                                <RangeControl
                                    label={ __( 'Arrow Position', 'gutena-testimonial' ) }
                                    value={ sliderNavArrowPosition }
                                    onChange={ ( value ) => setAttributes( { sliderNavArrowPosition: value } ) }
                                    min={ 0 }
                                    max={ 50 }
                                />
                            }
                            <BaseControl label={ __( 'Arrow Color', 'gutena-testimonial' ) } __nextHasNoMarginBottom={ false }>
                                <PanelColorSettings
                                    __experimentalHasMultipleOrigins
                                    __experimentalIsRenderedInSidebar
                                    className="gutena-testimonials-inline-color-control"
                                    colorSettings={ [
                                        {
                                            value: sliderNavArrowColors?.normal,
                                            onChange: ( value ) => setAttributes( { sliderNavArrowColors: {
                                                    ...sliderNavArrowColors,
                                                    normal: value
                                                } }
                                            ),
                                            label: __( 'Normal Color', 'gutena-testimonial' ),
                                        },
                                        {
                                            value: sliderNavArrowColors?.hover,
                                            onChange: ( value ) => setAttributes( { sliderNavArrowColors: {
                                                    ...sliderNavArrowColors,
                                                    hover: value
                                                } }
                                            ),
                                            label: __( 'Hover Color', 'gutena-testimonial' ),
                                        }
                                    ] }
                                />
                            </BaseControl>
                        </>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Icon', 'gutena-testimonial' ) } initialOpen={ false }>
                    <ToggleControl
                        label={ __( 'Show Icon', 'gutena-testimonial' ) }
                        checked={ sliderQuoteIconShow }
                        onChange={ () => setAttributes( { sliderQuoteIconShow: ! sliderQuoteIconShow } ) }
                    />
                    { sliderQuoteIconShow && 
                        <>
                            <RangeControl
                                label={ __( 'Icon Size (px)', 'gutena-testimonial' ) }
                                value={ sliderQuoteIconSize }
                                onChange={ ( value ) => setAttributes( { sliderQuoteIconSize: value } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                            <BaseControl label={ __( 'Icon Color', 'gutena-testimonial' ) } __nextHasNoMarginBottom={ false }>
                                <ColorPalette
                                    value={ sliderQuoteIconColor }
                                    colors={ [
                                        { name: 'red', color: '#f00' },
                                        { name: 'white', color: '#fff' },
                                        { name: 'blue', color: '#00f' },
                                    ] }
                                    onChange={ ( value ) => setAttributes( { sliderQuoteIconColor: value } ) }
                                />
                            </BaseControl>
                            <RangeControl
                                label={ __( 'Space after Icon (px)', 'gutena-testimonial' ) }
                                value={ sliderQuoteSpaceAfterIcon }
                                onChange={ ( value ) => setAttributes( { sliderQuoteSpaceAfterIcon: value } ) }
                                min={ 0 }
                                max={ 100 }
                                allowReset={ true }
                            />
                        </>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Star Rating', 'gutena-testimonial' ) } initialOpen={ false }>
                    <ToggleControl
                        label={ __( 'Show Rating', 'gutena-testimonial' ) }
                        checked={ sliderRatingShow }
                        onChange={ () => setAttributes( { sliderRatingShow: ! sliderRatingShow } ) }
                    />
                    { sliderRatingShow && 
                        <>
                            <RangeControl
                                label={ __( 'Icon Size (px)', 'gutena-testimonial' ) }
                                value={ sliderRatingIconSize }
                                onChange={ ( value ) => setAttributes( { sliderRatingIconSize: value } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                            <BaseControl label={ __( 'Icon Color', 'gutena-testimonial' ) } __nextHasNoMarginBottom={ false }>
                                <ColorPalette
                                    value={ sliderRatingColor }
                                    colors={ [
                                        { name: 'red', color: '#f00' },
                                        { name: 'white', color: '#fff' },
                                        { name: 'blue', color: '#00f' },
                                    ] }
                                    onChange={ ( value ) => setAttributes( { sliderRatingColor: value } ) }
                                />
                            </BaseControl>
                            <RangeControl
                                label={ __( 'Space after Rating (px)', 'gutena-testimonial' ) }
                                value={ sliderSpaceAfterRating }
                                onChange={ ( value ) => setAttributes( { sliderSpaceAfterRating: value } ) }
                                min={ 0 }
                                max={ 100 }
                            />
                        </>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Author Details', 'gutena-testimonial' ) } initialOpen={ false }>
                    <ToggleGroupControl label={ __( 'Image Position', 'gutena-testimonial' ) } value={ sliderImagePosition } onChange={ ( value ) => setAttributes( { sliderImagePosition: value } ) } isBlock>
                        <ToggleGroupControlOption value="top" label={ __( 'Top', 'gutena-testimonial' ) } />
                        <ToggleGroupControlOption value="side" label={ __( 'Side', 'gutena-testimonial' ) } />
                    </ToggleGroupControl>
                    <RangeControl
                        label={ __( 'Image Size (px)', 'gutena-testimonial' ) }
                        value={ sliderImageSize }
                        onChange={ ( value ) => setAttributes( { sliderImageSize: value } ) }
                        min={ 0 }
                        max={ 400 }
                    />
                    <RangeControl
                        label={ __( 'Space Above (px)', 'gutena-testimonial' ) }
                        value={ sliderSpaceBeforeDetails }
                        onChange={ ( value ) => setAttributes( { sliderSpaceBeforeDetails: value } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Typography', 'gutena-testimonial' ) } initialOpen={ false }>
                    <TabPanel 
                        className="gutena-tab-panel"
                        activeClass="active-tab"
                        tabs={ [
                            {
                                name     : 'text',
                                title    : __( 'Text', 'gutena-testimonial' ),
                                className: 'gutena-title-tab',
                            },
                            {
                                name     : 'name',
                                title    : __( 'Name', 'gutena-testimonial' ),
                                className: 'gutena-name-tab',
                            },
                            {
                                name     : 'designation',
                                title    : __( 'Designation', 'gutena-testimonial' ),
                                className: 'gutena-designation-tab',
                            },
                        ] }>
                        { ( tab ) => {
                                let tabout = sliderTextTypography
                                if ( tab?.name == 'name' )  {
                                    tabout = sliderNameTypography
                                } else if ( tab?.name == 'designation' )  {
                                    tabout = sliderPositionTypography
                                }
                                return tabout
                            }
                        }
                    </TabPanel>
                </PanelBody>
                <PanelBody title={ __( 'Colors', 'gutena-tabs' ) } initialOpen={ false }>
                    <PanelColorSettings
                        __experimentalHasMultipleOrigins
                        __experimentalIsRenderedInSidebar
                        className="gutena-testimonials-inline-color-control"
                        colorSettings={ [
                            {
                                value: sliderTextColor,
                                onChange: ( value ) => setAttributes( { sliderTextColor: value } ),
                                label: __( 'Text', 'gutena-testimonial' ),
                            },
                            {
                                value: sliderNameColor,
                                onChange: ( value ) => setAttributes( { sliderNameColor: value } ),
                                label: __( 'Author Name', 'gutena-testimonial' ),
                            },
                            {
                                value: sliderPositionColor,
                                onChange: ( value ) => setAttributes( { sliderPositionColor: value } ),
                                label: __( 'Designation', 'gutena-testimonial' ),
                            }
                        ] }
                    />
                </PanelBody>
            </InspectorControls>

            { renderCSS }
            
            <div { ...innerBlocksProps }>
                { sliderCount > 1 
                ?   <CarouselProvider
                        totalSlides={ sliderCount }
                        visibleSlides={ sliderToShow?.[ deviceType.toLowerCase() ] }
                        isIntrinsicHeight={ true }
                        infinite={ true }
                        isPlaying={ sliderAutoPlay }
                        lockOnWindowScroll={ true }
                        dragEnabled={ false }
                        touchEnabled={ false }
                        interval={ sliderAutoPlayInterval }
                        playDirection={ sliderPlayDirection }
                    >
                        <Slider className="gutena-testimonial-slider" data-slider-settings={ JSON.stringify( sliderSettings ) }>
                            { innerBlocksProps.children }
                        </Slider>
                        { sliderNavArrow && 
                            <>
                                <ButtonBack className="carousel__button">{ __( 'Back', 'gutena-testimonial' ) }</ButtonBack>
                                <ButtonNext className="carousel__button">{ __( 'Next', 'gutena-testimonial' ) }</ButtonNext>
                            </>
                        }
                        { sliderNavDot && <DotGroup showAsSelectedForCurrentSlideOnly={ true } renderDots={ renderDots } /> }
                    </CarouselProvider>
                :   <div className="gutena-testimonial-slider" data-slider-settings={ JSON.stringify( sliderSettings ) }>
                        { innerBlocksProps.children }
                    </div>
                }
            </div>
        </>
    )
}
