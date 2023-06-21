// pushing search queries to local storage with unique id's
export const usePush = () => {
  const PushData = (query) => {
    const id = crypto.randomUUID();
    const queryObject = { id: id, query: query };
    localStorage.setItem("id-" + id.toString(), JSON.stringify(queryObject));
  };
  return { PushData };
};
