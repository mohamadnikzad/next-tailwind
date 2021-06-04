import Head from "next/head"
import Header from "../../components/layout/Header"
import axios from 'axios';
import { SideBar } from "@styled-icons/remix-fill";




const GameDetail = ({ game, genres }) => {
    console.log(game)
    console.log(genres)
    return (
        <div>
            <Head>
                <title>haha</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="page-wrapper">

            </div>
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

