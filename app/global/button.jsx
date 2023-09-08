import Link from "next/link";

const Button = ({ url, name, style }) => {
	return (
		<Link href={url}>
			<div className={`${style}`}>{name}</div>
		</Link>
	);
};

export default Button;
