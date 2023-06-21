import CustomButton from "../button/button";
import { ReactComponent as Search } from "../../../assets/search.svg";
import { useState } from "react";
const SearchInput = ({ setQuery, PushData }) => {
  const [value, setValue] = useState("");
  return (
    <div className=" py-1.5 bg-secondaryClr  text-fontClr  flex items-center pe-1.5 ps-4 rounded-xl w-full max-w-797 gap-3 ">
      <div className="flex  items-center gap-4 w-11/12">
        <Search />
        <input
          value={value}
          type="text"
          className=" border-none outline-none w-full  py-2 bg-secondaryClr truncate"
          placeholder="Search Github username"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <CustomButton
        style={"search"}
        label={"Search"}
        onClick={() => {
          setQuery(value);
          PushData(value);
        }}
      />
    </div>
  );
};

export default SearchInput;
