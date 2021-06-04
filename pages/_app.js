// import 'tailwindcss/tailwind.css'
import axios from "axios"
import { useEffect, useState } from "react"
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const fetchGame = async () => {
  //     try {
  //       const res = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
  //       const res = await fetch(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`)
  //       const bela = await res.json()
  //       setGenres(bela)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fetchGame()
  // }, [])
  return <Component {...pageProps} />
}

export default MyApp
