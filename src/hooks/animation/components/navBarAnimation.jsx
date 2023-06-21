export const useNavAnimation = () => {
  const NavAnimation = {
    initial: { opacity: 0, height: 0 },
    inInitial: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 1 },
  };
  return { NavAnimation };
};
