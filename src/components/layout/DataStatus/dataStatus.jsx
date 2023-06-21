import ResultCard from "../result-card/resultCard";

const DataStatus = ({ data, isLoading, isError }) => {
  return (
    <>
      {data && <ResultCard data={data} />}
      <div
        className={`w-full max-w-797 bg-secondaryClr rounded-xl ${
          data ? "" : "p-generalPad"
        } text-verySmallFont text-fontClr flex flex-col `}
      >
        {isLoading && <p>loading</p>}
        {!data && !isLoading && !isError ? <p>no users yet...</p> : ""}
        {isError && <p>user not found !, check for valid username</p>}
      </div>
    </>
  );
};

export default DataStatus;
