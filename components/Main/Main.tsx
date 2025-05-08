import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"
import Arrow from "../../assets/arrow.png"
import Images from "../../assets/aboutme.jpg"
import Button from "../Button/Button"
import styles from "./Main.module.scss"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

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
				<span className={styles.ProjectsLink}>
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
				</span> 
				<br />
				<br />
				<br />
				<br />
				<br />

				<div className={styles.Contact}>
				
    <h2 style={{ fontSize: '20px' }}>
      📞 Contact: <br />
      <br />
      <a
        href="mailto:darshanwagh523@gmail.com"
        aria-label="Email"
        style={{ fontSize: '28px', marginRight: '16px', color: '#02afff' }}
      >
        <FaEnvelope />
      </a>

      <a
        href="tel:+918080062649"
        aria-label="Phone"
        style={{ fontSize: '28px', marginRight: '16px', color: '#02afff' }}
      >
        <FaPhone />
      </a>

      <a
        href="https://www.linkedin.com/in/darshan-wagh-1a1411203/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{ fontSize: '28px', marginRight: '16px', color: '#0077B5' }}
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/Dashcloud-ML"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{ fontSize: '28px', color: '#000' }}
      >
        <FaGithub />
      </a>
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
