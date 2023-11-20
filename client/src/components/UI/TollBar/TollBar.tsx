import { motion } from "framer-motion";
import useTheme from "../../../hooks/useTheme";
import ToolBarHeader from "../Headers/ToolBarHeader/ToolBarHeader";
import { useCallback, useState } from "react";
interface ITollBar {}

const TollBar = ({}: ITollBar) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const openClick = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, [open]);
  const variants = {
    open: {
      width: 257,
    },
    close: {
      width: 80,
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={open ? "open" : "close"}
      className={`h-full shadow-lg w-[80px] flex flex-col  ${
        theme === "dark" ? "bg-dark-cardBG" : "bg-light-cardBG"
      }`}
    >
      <ToolBarHeader openClick={openClick} active={open} />
    </motion.div>
  );
};

export default TollBar;
