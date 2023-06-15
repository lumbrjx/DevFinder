import { NavLink } from "react-router-dom";
import CustomButton from "../../ui/button/button";

const NavBar = () => {
  return (
    <nav className="px-generalPad py-subPad font-normal text-fontClr flex justify-between items-center text-smallFont">
      <h1 className="font-bold text-largeFont">DevFinder</h1>
      <div className="flex justify-between items-center gap-12">
        <div className="flex gap-8">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/history"}>History</NavLink>
        </div>
        <CustomButton style={"theme-toggle"} label={"Light"} />
      </div>
    </nav>
  );
};

export default NavBar;
