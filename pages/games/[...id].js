import Head from "next/head"
import Header from "../../components/layout/Header"
import axios from 'axios';
import { SideBar } from "@styled-icons/remix-fill";
import Sidebar from "../../components/layout/Sidebar";
import Link from "next/link";





const GameDetail = ({ game }) => {
    console.log(game)
    return (
        <div>
            <Head>
                <title>NZ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="page-wrapper justify-center lg:max-w-full lg:justify-start lg:px-10">
                <Sidebar />
                <div className="flex flex-grow justify-content-center">
                    <div className="flex flex-col w-full mt-8 px-8 space-y-4">
                        <h1 className='text-7xl font-black'>{game.name}</h1>
                        <p className='leading-8 text-gray-300'>{game.description_raw}</p>
                        <div className="flex-flex-col">
                            <h2>Screen shots</h2>
                            <div className="flex flex-col md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-x-7">

                            </div>
                        </div>
                        {/* <div className="flex space-x-4">
                            {game.genres.map(genre => <div key={genre.id} className='p-4 bg-gray-700 text-white'>
                            <Link href={`/genres?genre=${genre.id}`}>{genre.name}</Link>
                        </div>)}
                        </div> */}
                    </div>
                </div>
            </main>
        </div>
    )
}
export const getServerSideProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.API_KEY}`)
    const game = await res.json()

    return {
        props: { game }
    }
}

export default GameDetail

