import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header/Header"
import Resume from "../components/Resume/Resume"

const ResumePage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Resume - Darshan Wagh</title>
				<meta name="description" content="Darshan Wagh Resume" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Resume />
		</div>
	)
}

export default ResumePage
