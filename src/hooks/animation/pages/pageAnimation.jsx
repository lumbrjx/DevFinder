export const usePageAnimation = () => {
  const pageAnimation = {
    initial: { opacity: 0 },
    inInitial: { x: [-400, 50, 0], opacity: 1 },
    exit: { x: "100vw", opacity: 1 },
  };
  return { pageAnimation };
};
