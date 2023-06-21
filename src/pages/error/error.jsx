import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className=" bg-secondaryClr rounded-xl h-60 py-subPad px-generalPad  text-fontClr text-smallFont truncate pt-28 flex flex-col gap-3 mx-generalPad ">
      <h2 className="text-largeFont font-bold">Sorry page not found :/</h2>
      <NavLink to={"/"} className="underline underline-offset-2">
        Go home
      </NavLink>
    </div>
  );
};

export default Error;
