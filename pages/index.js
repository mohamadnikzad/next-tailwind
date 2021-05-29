import Head from 'next/head'
import Header from '../components/layout/Header'
import PageContent from '../components/PageContent'
import axios from "axios"
import { url } from "../util/url"


export default function Home({ data }) {
  const gamesList = data.results
  const nextPage = data.next
  return (
    <div className="">
      <Head>
        <title>Nz Vampire Gaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContent gamesList={gamesList} nextPage={nextPage} />
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`${url}?key=${process.env.API_KEY}&ordering=-relevance`)
  const data = await res.json()
  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}