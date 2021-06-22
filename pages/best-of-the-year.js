import Header from "../components/layout/Header"
import PageContent from "../components/PageContent"
import Head from 'next/head'


const BestOfTheYear = ({ data }) => {
    const gamesList = data.results
    const nextPage = data.next
    return (
        <>
            <Head>
                <title>Nikzad</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <PageContent gamesList={gamesList} nextPage={nextPage} pageTitle='Best Of the Year' />
        </>
    )
}
export const getStaticProps = async () => {
    const res = await fetch(`https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=20&page=1&key=${process.env.API_KEY}`)
    const data = await res.json()

    return {
        props: { data }
    }
}
export default BestOfTheYear
