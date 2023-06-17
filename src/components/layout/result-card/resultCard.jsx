import { ReactComponent as City } from "../../../assets/city.svg";
import { ReactComponent as Linked } from "../../../assets/link.svg";
import { ReactComponent as Twitter } from "../../../assets/twitter.svg";
import { ReactComponent as Loc } from "../../../assets/location.svg";
import "./resultCard.css";
const ResultCard = () => {
  return (
    <div className=" w-full max-w-797 bg-secondaryClr  rounded-xl p-generalPad text-verySmallFont text-fontClr flex flex-col gap-7">
      <div className=" customGrid grid gap-2 md:grid-cols-4  md:grid-flow-col">
        <div className=" row-span-1  md:row-span-3  ">Image</div>
        <div className=" row-span-1 md:col-span-3 md:flex md:flex-row md:justify-between ">
          <div>
            <h2 className="font-bold text-smallFont">the name</h2>
            <p className="text-layoutClr ">tagname</p>
          </div>
          <div className="font-medium">
            <p>joined 25 jan 2011</p>
          </div>
        </div>
        <div className=" col-span-2 font-medium md:col-span-3 pt-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            ipsam a asperiores ad dolorem quasi, veritatis minus laudantium nemo
            odit perferendis officiis eligendi, deleniti atque quod voluptas
            iusto voluptate repellendus!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:items-end">
        <div className="bg-primaryClr font-medium w-full max-w-lg rounded-xl flex justify-between py-generalPad px-10 flex-wrap gap-2 ">
          <div>
            <p>repos</p>
            <p>8</p>
          </div>
          <div>
            <p>followers</p>
            <p>8</p>
          </div>
          <div>
            <p>following</p>
            <p>8</p>
          </div>
        </div>
        <div className="grid grid-cols-1 font-medium gap-2 w-full max-w-lg md:grid-cols-2">
          <div className="">
            <div className="flex gap-2 mb-2">
              <Loc /> <p>sans frnasici</p>
            </div>
            <div className="flex gap-2">
              <Linked /> <p>sans frnasici</p>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-2">
              <Twitter /> <p>sans frnasici</p>
            </div>
            <div className="flex gap-2">
              <City /> <p>sans frnasici</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
