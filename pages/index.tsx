import Head from "next/head";
import Header from "../components/layout/Header";
import PageContent from "../components/PageContent";
import axios from "axios";
import { url } from "../util/url";
import { GetStaticProps } from "next";

interface PProps {
  data: any;
}

export const Home: React.FC<PProps> = ({ data }) => {
  const gamesList = data.results;
  const nextPage = data.next;
  return (
    <div>
      <Head>
        <title>Nikzad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContent gamesList={gamesList} nextPage={nextPage} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `${url}?key=${process.env.API_KEY}&ordering=-relevance`
  );
  const data = await res.json();
  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};

export default Home;
