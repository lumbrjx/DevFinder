// pushing search queries to local storage with unique id's
export const usePush = () => {
  const PushData = (query) => {
    const id = crypto.randomUUID();
    localStorage.setItem(id.toString(), query);
  };
  return { PushData };
};
