import CustomButton from "../button/button";
import { ReactComponent as Search } from "../../../assets/search.svg";
const SearchInput = () => {
  return (
    <div className=" py-1.5 bg-secondaryClr  text-fontClr flex items-center pe-1.5 ps-4 rounded-xl w-full gap-3 ">
      <div className="flex  items-center gap-4 w-11/12">
        <Search />
        <input
          type="text"
          className=" border-none outline-none w-full  py-2 bg-secondaryClr truncate"
          placeholder="Search Github username"
        />
      </div>
      <CustomButton style={"search"} label={"Search"} />
    </div>
  );
};

export default SearchInput;
