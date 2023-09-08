import Button from "../global/button";

const Navbar = () => {
	return (
		<nav className="flexRowBetween h-xl w-full p-0">
			<ul className="flexRowBetween gap-5">
				<Button
					url={"./"}
					name={"FEATURES"}
				/>
				<Button
					url={"./"}
					name={"CASE STUDIES"}
				/>
				<Button
					url={"./"}
					name={"UPDATES"}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
