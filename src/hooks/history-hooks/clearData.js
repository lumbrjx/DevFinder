// clear local storage
export const useClear = () => {
  const ClearData = () => {
    const keyToKeep = "Theme";
    Object.keys(localStorage).forEach((key) => {
      if (key !== keyToKeep) {
        localStorage.removeItem(key);
      }
    });
  };
  return { ClearData };
};
