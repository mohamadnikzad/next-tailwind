import Image from "next/image"
import PlatFromIcon from "./PlatFromIcon"

const SearchGameCard = ({ img, name, platforms, id }) => {
    return (
        <div className='flex items-center relative'>
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
    )
}

export default SearchGameCard
