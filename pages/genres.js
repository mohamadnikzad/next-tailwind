import Head from "next/head";
import Header from "../components/layout/Header";
import PageContent from "../components/PageContent";
import { url } from "../util/url";
import { useRouter } from "next/router";

const Genres = ({ data }) => {
  const router = useRouter();
  const { genre } = router.query;
  const gamesList = data.results;
  const nextPage = data.next;
  return (
    <>
      <Head>
        <title>With SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContent
        gamesList={gamesList}
        nextPage={nextPage}
        pageTitle={genre}
      />
    </>
  );
};

export default Genres;

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const res = await fetch(
    `https://api.rawg.io/api/games?genres=${genre}&key=${process.env.API_KEY}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}
