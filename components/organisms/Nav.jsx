import Link from "next/link";
import Title from "../molecules/Title";
import Ul from "../molecules/Ul";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center max-w-300 h-15 m-auto">
      <Link href={"/projects"}>
        <Title />
      </Link>
      <Ul />
    </nav>
  );
};

export default Nav;
