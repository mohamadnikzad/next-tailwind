import Head from 'next/head'
import Header from '../components/layout/Header'
import PageContent from '../components/PageContent'
import axios from "axios"
import { url } from "../util/url"


export default function Home({ data, genres }) {
  const gamesList = data.results
  const nextPage = data.next
  const genresList = genres.results
  return (
    <div className="">
      <Head>
        <title>Nz Vampire Gaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContent gamesList={gamesList} nextPage={nextPage} genres={genresList} />
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`${url}?key=${process.env.API_KEY}&ordering=-relevance`)
  const data = await res.json()
  // const res2 = await fetch(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
  // const data2 = await res2.json()
  let genresRes, genres
  try {
    genresRes = await fetch(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
    genres = await genresRes.json()
  } catch (error) {
    console.log(error)
  }
  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data, genres }, // will be passed to the page component as props
  }
}