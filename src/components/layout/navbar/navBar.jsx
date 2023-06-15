import { NavLink } from "react-router-dom";
import CustomButton from "../../ui/button/button";

const NavBar = () => {
  return (
    <header className="px-generalPad py-subPad bg-primaryClr fixed w-full flex   h-max">
      <nav className=" flex font-normal text-fontClr  justify-between w-full  items-center text-smallFont">
        <h1 className="font-bold text-largeFont">DevFinder</h1>
        <div className="hidden md:flex justify-between items-center gap-12">
          <div className="flex gap-8">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/history"}>History</NavLink>
          </div>
          <CustomButton style={"theme-toggle"} label={"Light"} />
        </div>
      </nav>
      <CustomButton style={"menu"} />
    </header>
  );
};

export default NavBar;
