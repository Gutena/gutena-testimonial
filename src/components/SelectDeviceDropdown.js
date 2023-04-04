/**
 * Select Device Type
 */
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from "@wordpress/data";
import {
    DropdownMenu,
    __experimentalHStack as HStack,
    Icon,
} from "@wordpress/components";
import { gkIsEmpty } from '../utils/helpers';
import { desktopIcon, tabletIcon, mobileIcon  } from './gutenaIcons';

const SelectDeviceDropdown = ( { 
    sideLabel = "", 
    onChangefunc = undefined,
    deviceTypeLocal = undefined,
    labelAtLeft = false,
} ) => {

    //Get Device preview type
    const deviceType = useSelect( select => {
        const editor = select( 'core/edit-post' ) || select( 'core/edit-site' );
        return editor.__experimentalGetPreviewDeviceType();
    }, [] );
    
    //Local device type based on parent component
    const deviceTypeView = gkIsEmpty( deviceTypeLocal ) ? deviceType : deviceTypeLocal;

    //Set Preview
    const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } = useDispatch( 'core/edit-post' ) || useDispatch( 'core/edit-site' );
    
    const setDeviceType = gkIsEmpty( onChangefunc ) ? setPreviewDeviceType : onChangefunc;

    const selectedIcon = ( 'Desktop' === deviceTypeView ) ? desktopIcon : ( 'Tablet' === deviceTypeView ) ? tabletIcon : mobileIcon ;

    return (
        <HStack justify="flex-start">
            { labelAtLeft && 1 < sideLabel.length && <label> { sideLabel } </label> }
            <DropdownMenu
                label={ __('Select device','gutena-testimonial') }
                className="gutena-testimonial-select-device"
                popoverProps={ {
                    className:"gutena-testimonial-select-device-popover"
                } }
                icon={ selectedIcon }
                controls={ [
                    {
                        title: __( 'Desktop', 'gutena-testimonial' ),
                        icon: desktopIcon,
                        onClick: () => setDeviceType( 'Desktop' ),
                    },
                    {
                        title: __( 'Tablet', 'gutena-testimonial' ),
                        icon: tabletIcon,
                        onClick: () => setDeviceType( 'Tablet' ),
                    },
                    {
                        title: __( 'Mobile', 'gutena-testimonial' ),
                        icon: mobileIcon,
                        onClick: () => setDeviceType( 'Mobile' ),
                    }
                ] }
            />
            { ! labelAtLeft && 1 < sideLabel.length && <label> { sideLabel } </label> }
        </HStack>
    );
}

export default SelectDeviceDropdown;