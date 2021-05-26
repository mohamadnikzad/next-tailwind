import Head from 'next/head'
import Navbar from '../components/layout/Navbar'

export default function Home() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Nz Vampire Gaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  )
}
