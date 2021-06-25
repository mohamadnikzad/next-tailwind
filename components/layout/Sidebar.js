import Link from 'next/link'
import Image from 'next/image'
import { GiftIcon, CollectionIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/outline'
import NavListItem from '../NavListItem'
import { DownloadIcon, FastForwardIcon, FireIcon, HashtagIcon, StarIcon, TagIcon } from '@heroicons/react/solid'
import { Trophy } from '@styled-icons/fluentui-system-filled'
import { BarChartAlt2 } from '@styled-icons/boxicons-regular'
import { Crown } from '@styled-icons/fa-solid'
import { ControllerPlay } from '@styled-icons/entypo'
import { GameController } from '@styled-icons/ionicons-solid'
import { Ghost } from '@styled-icons/boxicons-solid'
import { genres } from '../../util/genresList'
import { Playstation } from 'styled-icons/fa-brands'
import { LogoXbox } from 'styled-icons/ionicons-solid'
import { Android, Windows } from 'styled-icons/boxicons-logos'
import { Ios } from 'styled-icons/simple-icons'
import { PhoneIphone } from 'styled-icons/material'
import { Skull } from 'styled-icons/boxicons-solid'
import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'styled-icons/boxicons-regular'
import { useSession } from 'next-auth/client'


const Sidebar = () => {
    const less = genres.filter((genre, i) => i < 3)
    const [genresState, setGenresState] = useState(less)
    const [isMore, setIsMore] = useState(false)
    const [session, loading] = useSession()
    console.log(session);
    // const genreList = genres?.map((genre, i) =>
    //     <NavListItem key={i} title={genre} Icon={Skull} href={`/genres?genre=${genre}`} />

    // )
    useEffect(() => {
        isMore && setGenresState(genres)
        !isMore && setGenresState(less)
    }, [isMore])
    const toggle = () => {
        setIsMore(!isMore)

    }

    return (
        <div className='hidden lg:flex'>
            <aside className='flex w-[12.5rem] mt-10 mr-5 '>
                <nav className='flex flex-col flex-grow'>
                    <div className='flex flex-col  space-y-6'>
                        <div className='nav-title'><Link className='' href='/'>Home</Link></div>
                        <div className='nav-title'><Link href='#'>Reviews</Link></div>
                    </div>
                    {session && <div className="nav-item ">
                        <Link className='mb-4' href='#' disable>
                            <div className='flex items-center'>
                                <div className='nav-title overflow-hidden 
                                overflow-ellipsis whitespace-nowrap max-w-[150px] cursor-pointer mr-2'>{session?.user?.name}</div>
                                <div
                                    className="flex justify-center items-center w-9 h-9  rounded-full bg-gradient-to-r from-[#b1305c] to-[#fd867d]">
                                    <span className='font-black text-sm md:text-base'>{session?.user?.name.substring(0, 1).toLocaleUpperCase()}</span>
                                </div>
                            </div>
                        </Link>
                        <ul className="flex flex-col flex-grow my-3 space-y-3">
                            <NavListItem title='Whishlist' Icon={GiftIcon} />
                            <NavListItem title='My library' Icon={CollectionIcon} />
                            <NavListItem title='Pepale you follow' Icon={UserGroupIcon} />
                        </ul>
                    </div>}
                    <div className="nav-item">
                        <div className='nav-title mb-2'>Platfroms</div>
                        <ul className="flex flex-col flex-grow my-3 space-y-3">
                            <NavListItem href='/platforms/2' title='PlayStation' Icon={Playstation} />
                            <NavListItem href='/platforms/3' title='Xbox' Icon={LogoXbox} />
                            <NavListItem href='/platforms/1' title='PC' Icon={Windows} />
                            <NavListItem href='/platforms/4' title='IOS' Icon={PhoneIphone} />
                            <NavListItem href='/platforms/8' title='Anroid' Icon={Android} />
                        </ul>
                    </div>

                    <div className="nav-item">
                        <div className='nav-title mb-2'><span >Top</span></div>
                        <ul className="flex flex-col flex-grow my-3 space-y-3">
                            <NavListItem title='Best of the year' href='/best-of-the-year' Icon={Trophy} />
                            <NavListItem title='Popular in 2020' Icon={BarChartAlt2} href='/popular-in-2020' />
                            <NavListItem title='All time top 250' Icon={Crown} href='/all-time-top' />
                        </ul>
                    </div>
                    <div className="nav-item">
                        <div className='nav-title mb-2'><Link className='' href='/home'>Genres</Link></div>
                        <ul className="flex flex-col flex-grow my-3 space-y-2">
                            {genresState?.map((genre, i) =>
                                <NavListItem key={i} title={genre} Icon={Skull} href={`/genres?genre=${genre}`} />

                            )}
                            <li className='cursor-pointer group' onClick={toggle}>
                                <div className='flex items-center'>
                                    <div className="flex justify-center items-center w-8 h-8 mr-3 bg-[rgba(244,244,244,.1)] rounded-md transition-colors duration-200 ease-in-out group-hover:bg-white group-hover:text-black">
                                        {!isMore ? <ChevronDown className="w-6" /> : <ChevronUp />}
                                    </div>
                                    <span >{!isMore ? 'Show More' : 'show less'}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-title mt-4'><Link href='/'>All Games</Link></div>
                    <div className="nav-item">
                        <div className='nav-title mb-2'><Link className='' href='/home'>New Releases</Link></div>
                        <ul className="flex flex-col flex-grow my-3 space-y-3">
                            <NavListItem title='Last 30 days' Icon={StarIcon} />
                            <NavListItem title='This week' Icon={FireIcon} />
                            <NavListItem title='Next week' Icon={FastForwardIcon} />
                            <NavListItem title='Release calender ' Icon={CalendarIcon} />
                        </ul>
                    </div>
                    <div className="nav-item">
                        <div className='nav-title mb-2'><Link className='' href='/home'>Browse</Link></div>
                        <ul className="flex flex-col flex-grow my-3 space-y-3">
                            <NavListItem title='Platforms' Icon={GameController} />
                            <NavListItem title='Stores' Icon={DownloadIcon} />
                            <NavListItem title='Collections' Icon={CollectionIcon} />
                            <NavListItem title='Tags' Icon={HashtagIcon} />
                            <NavListItem title='Genres' Icon={Ghost} />
                        </ul>
                    </div>

                </nav>
            </aside>
        </div>
    )
}

export default Sidebar
