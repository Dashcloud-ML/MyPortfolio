import { useMemo } from "react"
import { nanoid } from "nanoid"
import Image from "next/image"
import HistoryCard from "./HistoryCard/HistoryCard"
import styles from "./Resume.module.scss"
import ResumeIcon from "../../assets/resume.png"
import GraduateIcon from "../../assets/graduate.png"
import CertificateIcon from "../../assets/certificate.png"

const Resume = () => {
	const WorkHistory = useMemo(() => {
		return [
			{
				id: nanoid(),
				companyName: "Meld",
				from: "Apr 2023",
				to: "Jun 2023",
				designation: "Android Application Development Intern",
				tasksHandled: [
					"Worked on React Native multimodal functionality.",
					"Firebase for backend integration.",
					"Developed high quality pages in appication."
				]
			}, 
			{
				id: nanoid(),
				companyName: "Ride Evee",
				from: "Sep 2023",
				to: "Oct 2023",
				designation: "SDE Intern",
				tasksHandled: [
					"Frontend and backend development of websites using MERN Stack.",
					"Working closely with the team to design, implement, and test website functions Participating in code reviews and maintaining code quality standards.",
					"Mentor fellow associates in React, day-to-day and help them with UI perspective while working on features, highly proactive behavior in projects with design team.",
					"Worked on UI component library with Storybook UI for faster development. Base level components with maximum features to help speed up development. Best practices implementation for highly optimized components."
				]
			},
			/*{
				id: nanoid(),
				companyName: "Perennial Systems",
				from: "April 2020",
				to: "March 2022",
				designation: "Associate Engineer",
				tasksHandled: [
					"Worked on a money transfer app. Owned multiple features and created bug free user flows. Used single codebase to send money from any to any country. Success scenario: 100% lines of code coverage.(React, Node, styled-components, redux, thunk, sass)",
					"Worked on brands reviewer app for social media influencers. Created application boilerplate from scratch for scalable and theme based UI components. Responsible for multiple features on the application with complex forms. (React, Redux, Node, thunk, Material UI, Formik with yup validation, NestJS, MongoDB)",
					"Worked on SME Financing App. A platform for investors to invest in companies. Owned a feature and completed with bug free delivery. Success scenario: 100% lines of code coverage. (React, Node, Redux, styled-components, scss, Node, storybook for UI components)",
					"Created react boilerplate for new projects, reviewed PRs for fellow engineers."
				]
			},
			{
				id: nanoid(),
				companyName: "Perennial Systems",
				from: "August 2020",
				to: "March 2021",
				designation: "Trainee Engineer",
				tasksHandled: [
					"Learned to work on production scale ReactJS and NodeJS applications",
					"Learned to build applications without frameworks and only with JS & TS to understand functional and class based programming.",
					"Worked on a production scale project by myself only. A LinkedIn chrome helper extension built with Chrome's API to scrape search results and message prospects. Success scenario: 100% lines of code coverage.",
					"Used React, Node, NestJS, MaterialUI, Ant Design, PostGRES, Sequelize, Swagger"
				]
			} */
		]
	}, [])

	return (
		<div className={styles.Container}>
			<h3>Work History</h3>
			<div className={styles.HistoryContainer}>
				{WorkHistory.map((history) => (
					<div key={history.id}>
						<span className={styles.Pointer}>
							<Image
								width="16"
								height="16"
								src={ResumeIcon.src}
								alt="resume icon"
							/>
						</span>
						<HistoryCard {...history} />
					</div>
				))}
			</div>
			<br />
			<br />
			<br />
			<h3>Education </h3>
			<div
				className={styles.HistoryContainer}
				style={{
					marginBottom: "6rem"
				}}
			>
				<span className={styles.Pointer}>
					<Image
						width="16"
						height="16"
						src={GraduateIcon.src}
						alt="resume icon"
					/>
				</span>
				<HistoryCard
					companyName="MIT Academy Of Engineering, Pune"
					designation="Bachelor of Technology"
					from="2022"
					to="Present"
					tasksHandled={[
						"Persuing my last year of engineering with 8.01 CGPA",
						"Built a minor project for 2nd year. Autobot(autonomous robot) for medical purposes.",
						"Winner of GDSC Nirmaan 2022.",
						"Attended various tech events such as, AWS Community Day 2022.",
						"Part of volunteering team of AWS user group Nashik and React communtiy Nashik."
					]}
				/>
				<HistoryCard
					companyName="Government Polytechnic Nashik"
					designation="Post SSC Diploma"
					from="2019"
					to="2022"
					tasksHandled={[
						"Completed my diploma with Distinction.",
						"Built a project for final year in Electronics and IOT.",
					]}
				/>
</div>
			<h3>Certifications</h3>
			<div
				className={styles.HistoryContainer}
				style={{
					marginBottom: "6rem"
				}}
			><span className={styles.Pointer}>
			<Image
				width="16"
				height="16"
				src={CertificateIcon.src}
				alt="resume icon"
			/>
		</span>
		<HistoryCard
					designation="Certificates Achieved"
					tasksHandled={[
						" AWS Cloud Quest : Cloud Practitioner - By AWS",
						" PCAP : Programming Essentials in Python - By Python Institute",
						" Advanced React - By Scrimba",
						" Alteryx Foundational Micro Credential - By Alteryx",
						" Cyber Security Essentials - By Cisco"
					]}  companyName={""} from={"2019"} to={"Present"} 				/>
		</div>
			{/*<button className={styles.CTA}>Download Resume</button>*/}
		</div>
	)
}

export default Resume
