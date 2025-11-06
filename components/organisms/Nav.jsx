import Link from "next/link";
import Title from "../molecules/Title";
import Ul from "../molecules/Ul";

const Nav = () => {
  return (
    <div className="flex fixed z-999 w-full bg-[#ffffff] shadow-lg">
      <nav className="flex justify-between items-center w-300 h-15 m-auto">
        <Link href={"/projects"}>
          <Title />
        </Link>
        <Ul />
      </nav>
    </div>
  );
};

export default Nav;
