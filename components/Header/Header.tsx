import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"
import Button from "../Button/Button"

import styles from "./Header.module.scss"

const Header = () => {
	const router = useRouter()

	const goToResume = useCallback(
		() => router.push("/resume"),
		[router]
	)

	return (
		<header className={styles.HeaderContainer}>
			<div className={styles.Container}>
				<div className={styles.LogoContainer}>
					<Link href="/">
						<h1>
							Darshan<span>.</span>
						</h1>
					</Link>
				</div>
				<div className={styles.CTA}>
					<Button onClick={goToResume}>Resume</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
