import { ReactComponent as Sun } from "../../../assets/sun.svg";
import { ReactComponent as Moon } from "../../../assets/moon.svg";
import { ReactComponent as Remove } from "../../../assets/remove.svg";
import { ReactComponent as Menu } from "../../../assets/menu.svg";

const CustomButton = ({ style, label }) => {
  return (
    <>
      <button
        className={`font-normal rounded-lg gap-3 flex   items-center ${
          style === "search"
            ? "bg-layoutClr px-4 py-2 text-fontClr "
            : style === "theme-toggle "
            ? " px-4 py-2  "
            : style === "remove"
            ? "  rounded-md "
            : style === "menu"
            ? "md:hidden"
            : null
        }`}
      >
        <div className="tracking-widest">{label}</div>
        {style === "theme-toggle" ? (
          <Sun />
        ) : style === "remove" ? (
          <Remove />
        ) : style === "menu" ? (
          <Menu />
        ) : null}
      </button>
    </>
  );
};

export default CustomButton;
