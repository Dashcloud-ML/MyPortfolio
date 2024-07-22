import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Darshan Wagh</title>
				<meta name="description" content="Darshan Wagh Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
      <Main />
		</div>
	)
}

export default Home
