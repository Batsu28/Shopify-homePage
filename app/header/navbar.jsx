import Button from "../global/button";

const Navbar = () => {
  return (
    <nav className="h-xl w-full p-0 hidden sm:flex justify-between items-center">
      <ul className="flexRowBetween gap-6 tracking-wide">
        <Button url={"./"} name={"FEATURES"} style={"headerBtn"} />
        <Button url={"./"} name={"CASE STUDIES"} style={"headerBtn"} />
        <Button url={"./"} name={"UPDATES"} style={"headerBtn"} />
      </ul>
    </nav>
  );
};

export default Navbar;
