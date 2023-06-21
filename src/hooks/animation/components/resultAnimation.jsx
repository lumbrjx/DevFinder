export const useResultAnimation = () => {
  const ResultAnimation = {
    initial: { opacity: 0 },
    inInitial: { y: [0, 80, 0], opacity: 1 },
    exit: { y: -400, opacity: 0 },
  };
  return { ResultAnimation };
};
