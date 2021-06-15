import Header from "../../components/layout/Header"
import PageContent from "../../components/PageContent"


const Platform = ({ platform }) => {
    const gamesList = platform.results
    const nextPage = platform.next
    return (
        <>
            <Header />
            <PageContent gamesList={gamesList} nextPage={nextPage} />
        </>
    )
}

export default Platform

export function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '8' } },
        ],
        fallback: false //faslse  any other route will return 404
    };
}
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://api.rawg.io/api/games?parent_platforms=${params.id}&key=${process.env.API_KEY}`)
    const platform = await res.json()
    return { props: { platform } }
}


