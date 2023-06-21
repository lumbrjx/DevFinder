// deleting search queries from local storage depending on query id
export const useDelete = () => {
  const RemoveData = (id) => {
    localStorage.removeItem(`id-${id}`);
  };
  return { RemoveData };
};
