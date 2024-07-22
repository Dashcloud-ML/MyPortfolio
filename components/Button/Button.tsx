import styles from "./Button.module.scss"

interface IProps extends React.HTMLProps<HTMLButtonElement> {
	children: React.ReactNode
}

const Button = ({ children, type = "button", ...props }: IProps) => {
	return (
		<span className={styles.ButtonContainer}>
			<button {...props}>{children}</button>
		</span>
	)
}

export default Button
