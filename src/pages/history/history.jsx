import CustomButton from "../../components/ui/button/button";
import HistoryCard from "../../components/ui/history-card/historyCard";
import { usePush } from "../../hooks/history-hooks/pushQuery";

const History = () => {
  return (
    <div className="pt-28 flex flex-col gap-3 mx-generalPad ">
      <div className="flex items-start justify-between">
        <h2 className="text-smallFont font-bold text-fontClr mb-4">
          Search history
        </h2>
        <CustomButton label={"clear all"} style={"search"} />
      </div>
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </div>
  );
};

export default History;
