import { ReactComponent as City } from "../../../assets/city.svg";
import { ReactComponent as Linked } from "../../../assets/link.svg";
import { ReactComponent as Twitter } from "../../../assets/twitter.svg";
import { ReactComponent as Loc } from "../../../assets/location.svg";
import "./resultCard.css";
import { motion } from "framer-motion";
import { useResultAnimation } from "../../../hooks/animation/components/resultAnimation";
// rendering data and handeling the styles of missing ones
const ResultCard = ({ data }) => {
  const { ResultAnimation } = useResultAnimation();

  return (
    <motion.div
      variants={ResultAnimation}
      initial={ResultAnimation.initial}
      animate={ResultAnimation.inInitial}
      transition={{ duration: 0.3 }}
      exit={ResultAnimation.exit}
      className="w-full max-w-797 bg-secondaryClr rounded-xl p-generalPad text-verySmallFont text-fontClr flex flex-col gap-7"
    >
      <div className="customGrid grid gap-2 md:grid-cols-4 md:grid-flow-col">
        <div className="row-span-1 md:row-span-3 ">
          <img
            src={data.avatar_url}
            alt="avatar"
            className="w-24 h-24 md:h-36 md:w-36 rounded-full"
          />
        </div>
        <div className="row-span-1  md:col-span-3  md:flex-row flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-smallFont">{data.name}</h2>
            <p className="text-layoutClr">@{data.login}</p>
          </div>
          <div className="font-medium ">
            <p>Joined {data.created_at.split("T")[0].replace(/-/g, " ")}</p>
          </div>
        </div>
        <div className="col-span-2 font-medium md:col-span-3 pt-4">
          <p>{data.bio ? data.bio : "Not available"}</p>
        </div>
      </div>

      <div className="flex flex-col gap-7 md:items-end">
        <div className="bg-primaryClr font-medium w-full max-w-lg rounded-xl flex justify-between py-generalPad px-10 flex-wrap gap-2">
          <div>
            <p>Repos</p>
            <p>{data.public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{data.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{data.following}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 font-medium gap-2 w-full max-w-lg md:grid-cols-2">
          <div className="">
            <div
              className={`flex gap-2 mb-2 ${
                data.location ? "" : "text-disabledClr"
              } `}
            >
              <Loc className={data.location ? "" : "fill-disabledClr"} />
              <p>{data.location ? data.location : "Not available"}</p>
            </div>
            <div
              className={`flex gap-2  ${data.blog ? "" : "text-disabledClr"} `}
            >
              <Linked className={data.blog ? "" : "fill-disabledClr"} />{" "}
              <a href={data.blog}>{data.blog ? data.blog : "Not available"}</a>
            </div>
          </div>
          <div>
            <div
              className={`flex gap-2 mb-2 ${
                data.twitter_username ? "" : "text-disabledClr"
              } `}
            >
              <Twitter
                className={data.twitter_username ? "" : "fill-disabledClr"}
              />{" "}
              <p>
                {data.twitter_username
                  ? data.twitter_username
                  : "Not available"}
              </p>
            </div>
            <div
              className={`flex gap-2  ${
                data.company ? "" : "text-disabledClr"
              } `}
            >
              <City className={data.company ? "" : "fill-disabledClr"} />{" "}
              <p>{data.company ? data.company : "Not available"}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
