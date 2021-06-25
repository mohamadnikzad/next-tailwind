import Image from "next/image"
import { useRouter } from "next/router"
import PlatFromIcon from "./PlatFromIcon"

const SearchGameCard = ({ img, name, platforms, id }) => {
    const router = useRouter()
    return (
        <>
            <div className='flex items-center relative cursor-pointer transition-colors duration-200 ease-linear hover:bg-[#202020]  p-4 rounded-md' onClick={() => router.push(`/games/${id}`)}>
                <div className="flex mr-4 rounded-lg">
                    {img && <Image src={img} alt={name} width={100} height={50} objectFit='cover' loading='lazy' className='rounded-lg' />}
                </div>
                <div className="flex flex-col">
                    <h3 className='flex text-lg font-bold'>{name}</h3>
                    <div className="flex space-x-1 ">
                        {platforms.map(platform => <PlatFromIcon platform={platform.platform.slug} key={platform.platform.id} />)}
                    </div>
                </div>
            </div>
            <hr className='border-[#202020]' />
        </>
    )
}

export default SearchGameCard
