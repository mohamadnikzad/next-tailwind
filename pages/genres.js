import Head from "next/head"
import Header from "../components/layout/Header"
import PageContent from "../components/PageContent"
import { url } from "../util/url"

const genres = ({ data }) => {
    const gamesList = data.results
    const nextPage = data.next
    // const genresList = genres.results
    return (
        <div>
            <Head>
                <title>haha</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <PageContent gamesList={gamesList} nextPage={nextPage} />
        </div>
    )
}

export default genres

export async function getServerSideProps(context) {
    const genre = context.query.genre
    const res = await fetch(`https://api.rawg.io/api/games?genres=${genre}&key=${process.env.API_KEY}`)
    const data = await res.json()
    // let genresRes, genres
    // try {
    //     genresRes = await fetch(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
    //     genres = await genresRes.json()
    // } catch (error) {
    //     console.log(error)
    // }
    // if (!data) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

