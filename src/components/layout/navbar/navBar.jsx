import { NavLink } from "react-router-dom";
import CustomButton from "../../ui/button/button";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => {
    setToggle(!toggle);
  };
  console.log("button" + toggle);
  return (
    <header className="px-generalPad py-subPad bg-primaryClr fixed w-full flex   h-max">
      <nav className=" flex font-normal text-fontClr  justify-between w-full  items-center text-smallFont">
        <h1 className="font-bold text-largeFont">DevFinder</h1>
        <div
          className={`${
            toggle === false ? "hidden md:flex" : ""
          } absolute flex flex-col items-center top-0 right-0 gap-8 py-24 w-full bg-secondaryClr md:py-0 md:w-auto md:bg-transparent md:flex-row md:justify-between md:items-center md:gap-12 md:static  `}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/history"}>History</NavLink>
          </div>
          <CustomButton style={"theme-toggle"} label={"Light"} />
        </div>
      </nav>
      <CustomButton
        style={"menu"}
        onClick={() => menuToggle()}
        toggle={toggle}
      />
    </header>
  );
};

export default NavBar;
