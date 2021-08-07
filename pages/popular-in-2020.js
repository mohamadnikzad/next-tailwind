import Header from "../components/layout/Header";
import PageContent from "../components/PageContent";
import Head from "next/head";

const PopularIn2020 = ({ data, url }) => {
  const gamesList = data.results;
  const nextPage = data.next;
  //   console.log(url);
  return (
    <>
      <Head>
        <title>Nikzad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContent
        gamesList={gamesList}
        nextPage={nextPage}
        pageTitle="Popular in 2020"
      />
    </>
  );
};
export const getStaticProps = async () => {
  const url = `https://rawg.io/api/games/lists/greatest?year=2020&discover=true&ordering=-added&page_size=20&page=1&key=${process.env.API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data, url },
  };
};
export default PopularIn2020;
