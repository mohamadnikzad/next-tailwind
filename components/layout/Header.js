import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, DotsHorizontalIcon, PlusIcon, XIcon, MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='flex w-full h-full relative '>
            <div className=
                {`fixed rounded-l-xl w-56 p-5 h-full z-20 top-0 right-0 bg-white transition-transform duration-300 
            transform ${open ? "translate-x-0" : "translate-x-56"} `}>
                <button onClick={() => setOpen(false)}><XIcon className='w-7 text-black' /></button>
            </div>
            <div className={`fixed bg-[rgba(0,0,0,.8)] top-0 right-0 left-0 bottom-0 z-10 transition-all ${open ? "block" : "hidden"}`} onClick={() => setOpen(false)} />
            <div className="flex px-4 py-3 md:px-9 md:py-5  flex-grow justify-between items-center">
                {/* nav left */}
                <div className="flex h-10 md:h-16 justify-center items-center mr-5">
                    <div className='flex tracking-[5px] font-black text-lg'>
                        <Link href='/'>RAWG</Link>
                    </div>
                </div>

                {/*nav center */}
                <div className='className="flex flex-grow-0 md:flex-grow h-10 md:h-16  mr-5'>
                    <form className="text-black w-full h-full justify-center items-center relative flex">
                        <input type="text" placeholder='Search'
                            className='rounded-3xl h-7 md:h-11 w-48 md:w-full group
                        bg-[rgba(244,244,244,.16)] transition-all ease-in-out duration-300 hover:bg-gray-200 focus:bg-gray-200 flex-grow-1 md:flex-grow-2 pl-9 pr-4  select-none focus:border-none focus:outline-none' />
                        <SearchIcon className='group-hover:text-black group-visited::text-black absolute w-5 left-2  text-gray-500' />
                    </form>
                </div>
                {/*nav right */}
                <div className='flex h-10 md:h-16 justify-center items-center mr-5'>
                    <div
                        className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-[#b1305c] to-[#fd867d]">
                        <span className='font-black text-sm md:text-base'>M</span>
                    </div>
                    <div className="hidden md:flex justify-between items-center space-x-2 ml-3 text-sm">
                        <div className="flex mr-1">
                            <Link href='/'>My library</Link>
                        </div>
                        <BellIcon className='w-6 text-white' />
                        <PlusIcon className='w-8 text-white' />
                        <div className="flex ml-1">
                            <Link href='/'>API</Link>
                        </div>
                        <DotsHorizontalIcon className='w-4 ml-1 text-white' />
                    </div>
                    <button className='flex md:hidden' onClick={() => setOpen(true)}>
                        <MenuIcon className=' w-7 ml-2 text-white' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
