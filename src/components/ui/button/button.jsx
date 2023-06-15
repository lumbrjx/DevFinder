import { ReactComponent as Sun } from "../../../assets/sun.svg";
import { ReactComponent as Moon } from "../../../assets/moon.svg";
import { ReactComponent as Remove } from "../../../assets/remove.svg";

const CustomButton = ({ style, label }) => {
  return (
    <>
      <button
        className={
          style === "search"
            ? "bg-layoutClr px-4 py-2 rounded-md"
            : style === "theme-toggle"
            ? " px-4 py-2 rounded-md flex gap-3 font-normal  items-center"
            : style === "remove"
            ? "  rounded-md flex gap-3 font-normal items-center"
            : null
        }
      >
        {label}
        {style === "theme-toggle" ? (
          <Sun />
        ) : style === "remove" ? (
          <Remove />
        ) : null}
      </button>
    </>
  );
};

export default CustomButton;
