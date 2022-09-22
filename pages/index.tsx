import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <form action="/api/form" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
        <button type="submit">What's my color?</button>
    </form>
  )
}

export default Home
