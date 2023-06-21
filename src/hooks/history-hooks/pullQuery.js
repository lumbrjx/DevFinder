// pulling queries from local storage and passing them to get rendered
export const usePull = () => {
  const PullData = () => {
    const keys = Object.keys(localStorage);
    const filteredKeys = keys.filter((key) => key.startsWith(`id-`));
    const dataObjects = filteredKeys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    return dataObjects;
  };
  return { PullData };
};
