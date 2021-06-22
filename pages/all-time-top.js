import Header from "../components/layout/Header"
import PageContent from "../components/PageContent"
import Head from 'next/head'


const AllTimeTop = ({ data }) => {
    const gamesList = data.results
    const nextPage = data.next
    return (
        <>
            <Head>
                <title>Nikzad</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <PageContent gamesList={gamesList} nextPage={nextPage} pageTitle='All Time Top 250' />
        </>
    )
}
export const getStaticProps = async () => {
    const res = await fetch(`https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=${process.env.API_KEY}`)
    const data = await res.json()

    return {
        props: { data }
    }
}
export default AllTimeTop
