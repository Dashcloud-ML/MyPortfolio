import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"

import Arrow from "../../assets/arrow.png"
import Images from "../../assets/aboutme.jpg"
import Button from "../Button/Button"
import styles from "./Main.module.scss"

const Main = () => {
	const router = useRouter()

	const goToLinkedIn = useCallback(
		() => router.replace("https://www.linkedin.com/in/darshan-wagh-1a1411203/"),
		[router]
	)

	return (
		<main className={`${styles.Main} ${styles.Container}`}>
			<div className={styles.Content}>
				<h1>
					Hi! I am <span className={styles.Chip}>DashCloud</span>
					<br />
					Darshan Wagh
				</h1>
				<p>
					<span>Building beautiful and robust</span>
					<br /> <span className={styles.Tech}>Front_End</span> of Web
					for more than 1 year.
				</p>
				<Button onClick={goToLinkedIn}>Hire Me</Button>
			{/*	<span className={styles.ProjectsLink}>
					<Link href="/resume">
						<div className={styles.ProjectsButton}>
						<p>Projects</p>
							<div className={styles.ArrowIcon}>
								<Image
									src={Arrow.src}
									width={"20"}
									height={"20"}
									alt="arrow icon"
								/> 
							</div>
						</div>
					</Link>
				</span> */}
				<div className={styles.Contact}>
					<h2>
						Contact: <br />
						<a href="mailto:darshanwagh523@gmail.com"><span style={{color: "rgb(2, 175, 255)"}}>Email:</span> darshanwagh523@gmail.com</a><br />
						<a href="contactno:8080062649"><span style={{color: "rgb(2, 175, 255)"}}>Mob.no:</span> +91 80800 62649</a><br />
						<a href="Linkedin:link"><span style={{color: "rgb(2, 175, 255)"}}>Linkedin:</span> https://www.linkedin.com/in/darshan-wagh-1a1411203/</a><br />
						<a href="git:link"><span style={{color: "rgb(2, 175, 255)"}}>Github:</span> https://github.com/Dashcloud-MLs</a>
						</h2>
				</div>
			</div>
			<div className={styles.ImageContainer}>
				<Image
					src={Images.src}
					alt="My Photo"
					width="425"
					height="555"
					style={{borderRadius: '10px'}}
				/>
			</div>
		</main>
	)
}

export default Main
