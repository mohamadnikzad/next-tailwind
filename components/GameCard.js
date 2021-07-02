import { PlusIcon } from "@heroicons/react/solid"
import { Windows } from "@styled-icons/boxicons-logos"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Playstation } from "styled-icons/remix-line"
import { Xbox } from "styled-icons/simple-icons"
import { resizeImage } from "../util/helperFunctions"
import PlatFromIcon from "./PlatFromIcon"


const GameCard = ({ name, bg, id, score, platforms }) => {
    const router = useRouter()
    const myLoader = () => {
        return resizeImage(bg, 420)
    }
    return (
        <div className='mt-6 cursor-pointer' onClick={() => router.push(`/games/${id}`)}>
            <div >
                <Image alt={name} className="rounded-t-xl bg-[#202020]" loader={myLoader} src='./images/dota.jpg' layout='responsive' height={1080} width={1920} />
            </div>
            <div className='p-4 flex flex-col flex-grow bg-[#202020] space-y-3 rounded-b-xl'>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                        {platforms.map(platform => <PlatFromIcon key={platform.platform.id} platform={platform.platform.slug} />)}
                    </div>
                    {score && <div className={`flex px-2 text-sm font-semibold ${score > 75 ? 'text-green-500 border border-green-500' : 'text-yellow-400 border border-yellow-400'} rounded-md`}>
                        {score}
                    </div>}
                </div>
                <div className='flex'>
                    <h2 className='font-bold text-2xl'>{name}</h2>
                </div>
                <div className="flex group">
                    <div className='flex pr-2 cursor-pointer bg-[rgba(244,244,244,.1)] rounded-md transition-colors duration-200 ease-in-out group-hover:bg-white group-hover:text-black'>
                        <PlusIcon className='w-6 mr-1 ' /> <span>244</span>
                    </div>
                </div>
                <div className='text-sm underline text-center text-gray-400'><Link href='#'>view more</Link></div>
            </div>
        </div>
    )
}

export default GameCard
