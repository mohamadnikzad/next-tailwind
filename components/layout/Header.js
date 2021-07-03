import { SearchIcon } from '@heroicons/react/solid'
import SearchGameCard from '../SearchGameCard'
import { BellIcon, DotsHorizontalIcon, PlusIcon, XIcon, MenuIcon } from '@heroicons/react/solid'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
const Header = () => {
    const api_key = process.env.API_KEY
    const [open, setOpen] = useState(false)
    const [qry, setQry] = useState('')
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)
    const [session] = useSession()

    useEffect(() => {
        let cancel;
        if (qry !== '') {
            setLoading(true)
            axios({
                method: 'GET',
                url: `https://api.rawg.io/api/games?key=2b7489f5d63f41faaa47d771e897e3a3`,
                params: { search: qry, page: 1, page_size: 20 },
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(res => {
                // setGames(prevGames => {
                //     return [...prevGames, ...res.data.results]
                // })
                setGames([...res.data.results])
                setLoading(false)
            }).catch(err => {

                if (axios.isCancel(err)) return
            })
        }
        if (qry !== '') return () => cancel && cancel()
    }, [qry])


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
                        <Link href='/'>Nikzad</Link>
                    </div>
                </div>

                {/*nav center */}
                <div className='className="flex flex-grow h-10 md:h-16  mr-5 relative'>
                    <form className="text-black w-full h-full justify-center items-center relative flex">
                        <input type="search" placeholder='Search' onChange={e => setQry(e.target.value)}
                            className='rounded-3xl h-7 md:h-11 w-full group
                        bg-[rgba(244,244,244,.16)] transition-all ease-in-out duration-300 hover:bg-gray-200 focus:bg-gray-200 flex-grow-1 md:flex-grow-2 pl-9 pr-4  select-none focus:border-none focus:outline-none hover:text-black focus:text-black visited:text-black text-gray-500'  />
                        <SearchIcon className='group-hover:text-black group-visited:text-black absolute w-5 left-2  text-gray-500' />
                    </form>
                    {qry && <div className="flex flex-col space-y-5 p-5 absolute z-50 -bottom-24.5 w-full min-h-[100px] max-h-[27rem] bg-black rounded-2xl overflow-y-auto">
                        {loading ? 'Loading ...' : games.map(game => <SearchGameCard key={game.id} id={game.id} name={game.name} platforms={game.parent_platforms} img={game.background_image} />)}
                    </div>}
                </div>
                {/*nav right */}
                <div className='flex h-10 md:h-16 justify-center items-center mr-5'>
                    {session && <div
                        className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-[#b1305c] to-[#fd867d]">
                        <span className='font-black text-sm md:text-base'>{session?.user?.name.substring(0, 1).toLocaleUpperCase()}</span>
                    </div>}
                    <div className="hidden md:flex justify-between items-center space-x-2 ml-3 text-sm">
                        <div className="flex mr-1">
                            {/* <Link href='/'>My library</Link> */}
                            {session ? <button className='underline' onClick={() => signOut()}>Logout</button > : <button className='underline' onClick={() => signIn()}>Sign in</button>}
                        </div>
                        <BellIcon className='w-6 text-white' />
                        <PlusIcon className='w-8 text-white' />
                        <div className="flex ml-1">
                            <Link href='/'>Doc</Link>
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
