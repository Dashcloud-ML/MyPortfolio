import { nanoid } from "nanoid"
import styles from "./HistoryCard.module.scss"

interface IProps {
	companyName: string
	from: string
	to: string
	designation: string
	tasksHandled: string[]
}

const HistoryCard = (props: IProps) => {
	const { companyName, designation, from, to, tasksHandled } = props
	return (
		<section className={styles.HistoryCard}>
			<div className={styles.Header}>
				<div className={styles.CompanyDetails}>
					<h5 className={styles.CompanyName}>{companyName}</h5>
					<h5>
						{from} - {to}
					</h5>
				</div>
				<div className={styles.Designation}>
					<h4>{designation}</h4>
				</div>
			</div>
			<div className={styles.Body}>
				<ul>
					{tasksHandled.map((task) => (
						<li key={nanoid()}>{task}</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default HistoryCard
