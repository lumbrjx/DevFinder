import { useState } from "react";
import SearchInput from "../../components/ui/search-input/searchInput";
import { useFetchData } from "../../hooks/api/fetchData";
import DataStatus from "../../components/layout/DataStatus/dataStatus";
import { usePush } from "../../hooks/history-hooks/pushQuery";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/animation/pages/pageAnimation";
const Home = () => {
  const { pageAnimation } = usePageAnimation();
  const { PushData } = usePush();
  const [query, setQuery] = useState("");
  const [data, isLoading, isError] = useFetchData(query);
  return (
    <motion.div
      variants={pageAnimation}
      initial={pageAnimation.initial}
      animate={pageAnimation.inInitial}
      exit={pageAnimation.exit}
      className="flex flex-col gap-3 pt-28 mx-generalPad md:items-center"
    >
      <SearchInput setQuery={setQuery} PushData={PushData} />
      <DataStatus data={data} isLoading={isLoading} isError={isError} />
    </motion.div>
  );
};
export default Home;
