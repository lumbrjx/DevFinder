import { useDelete } from "../../../hooks/history-hooks/DeleteQuery";
import CustomButton from "../button/button";
const HistoryCard = ({ label, setHistoryData, id }) => {
  const { RemoveData } = useDelete();
  return (
    <div className=" bg-secondaryClr rounded-xl py-subPad px-generalPad justify-between text-fontClr text-smallFont truncate flex">
      <p className="w-11/12">{label}</p>
      <CustomButton
        style={"remove"}
        onClick={() => {
          RemoveData(id);
          setHistoryData((prev) => prev.filter((query) => query.id !== id));
        }}
      />
    </div>
  );
};

export default HistoryCard;
