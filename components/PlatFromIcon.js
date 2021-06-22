import { PlusIcon } from "@heroicons/react/solid"
import { Windows } from "@styled-icons/boxicons-logos"
import { Linux } from "styled-icons/fa-brands"
import { DotsHorizontal } from "styled-icons/heroicons-outline"
import { Android } from "styled-icons/icomoon"
import { PhoneIphone } from "styled-icons/material-outlined"
import { Playstation } from "styled-icons/remix-line"
import { Apple, Xbox } from "styled-icons/simple-icons"

const PlatFromIcon = ({ platform }) => {
    let icon = ''
    switch (platform) {
        case 'pc':
            icon = <Windows className='w-4' />
            break;
        case 'xbox':
            icon = <Xbox className='w-4' />
            break;
        case 'playstation':
            icon = <Playstation className='w-4' />
            break;
        case 'linux':
            icon = <Linux className='w-4' />
            break;
        case 'mac':
            icon = <Apple className='w-4' />
            break;
        case 'android':
            icon = <Android className='w-4' />
            break;
        case 'ios':
            icon = <PhoneIphone className='w-4' />
            break; PhoneIphone

        default:
            icon = ''
            break;
    }
    return (
        <>
            {icon}
        </>
    )
}

export default PlatFromIcon
