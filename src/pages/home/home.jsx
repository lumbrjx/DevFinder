import ResultCard from "../../components/layout/result-card/resultCard";
import SearchInput from "../../components/ui/search-input/searchInput";

const Home = () => {
  return (
    <div className="flex flex-col gap-3 pt-28 mx-generalPad">
      <SearchInput />
      <ResultCard />
    </div>
  );
};

export default Home;
