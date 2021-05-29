import Link from 'next/link'
import { GiftIcon, CollectionIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/outline'
import NavListItem from '../NavListItem'
import { DownloadIcon, FastForwardIcon, FireIcon, HashtagIcon, StarIcon, TagIcon } from '@heroicons/react/solid'
import { Trophy } from '@styled-icons/fluentui-system-filled'
import { BarChartAlt2 } from '@styled-icons/boxicons-regular'
import { Crown } from '@styled-icons/fa-solid'
import { ControllerPlay } from '@styled-icons/entypo'
import { GameController } from '@styled-icons/ionicons-solid'
import { Ghost } from '@styled-icons/boxicons-solid'


const Sidebar = () => {
    return (
        <div className='hidden lg:flex'>
            <aside className='flex w-[12.5rem] mt-10 mr-5 '>
                <nav className='flex flex-col flex-grow'>
                    <div className='flex flex-col  space-y-6'>
                        <div className='nav-title'><Link className='' href='/home'>Home</Link></div>
                        <div className='nav-title'><Link href='#'>Reviews</Link></div>
                    </div>
                    <div className="nav-item ">
                        <Link className='mb-4' href='#'>
                            <div className='flex items-center'>
                                <div className='nav-title overflow-hidden 
                                overflow-ellipsis whitespace-nowrap max-w-[150px] cursor-pointer mr-2'>mohamadnikzad</div>
                                <div
                                    className="flex justify-center items-center w-9 h-9  rounded-full bg-gradient-to-r from-[#b1305c] to-[#fd867d]">
                                    <span className='font-black text-sm md:text-base'>M</span>
                                </div>
                            </div>
                        </Link>
                        <ul className="flex flex-col flex-grow my-3 space-y-3">
                            <NavListItem title='Whishlist' Icon={GiftIcon} />
                            <NavListItem title='My library' Icon={CollectionIcon} />
                            <NavListItem title='Pepale you follow' Icon={UserGroupIcon} />
                        </ul>
                    </div>
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
                        <div className='nav-title mb-2'><span >Top</span></div>
                        <ul className="flex flex-col flex-grow my-3 space-y-3">
                            <NavListItem title='Best of the year' Icon={Trophy} />
                            <NavListItem title='Popular in 2020' Icon={BarChartAlt2} />
                            <NavListItem title='All time top 250' Icon={Crown} />
                        </ul>
                    </div>
                    <div className='nav-title mt-4'><Link className='' href='/home'>All Games</Link></div>
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
