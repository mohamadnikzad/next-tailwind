import Link from "next/link"


const NavListItem = ({ title, Icon }) => {
    return (
        <li className='cursor-pointer group'>
            <Link href='/sa'>
                <div className='flex items-center'>
                    <div className="flex justify-center items-center w-8 h-8 mr-3 bg-[rgba(244,244,244,.1)] rounded-md transition-colors duration-200 ease-in-out group-hover:bg-white group-hover:text-black">
                        <Icon className="w-6" />
                    </div>
                    <span >{title}</span>
                </div>
            </Link>
        </li>
    )
}

export default NavListItem
