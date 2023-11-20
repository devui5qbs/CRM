import { motion } from "framer-motion";
import useTheme from "../../../../hooks/useTheme";
import Logo from "../../../../images/Logo.svg";
import Arrow from "../../../../images/Arrow - Left.svg";

interface IToolBarHeaderProps {
  active: boolean;
  openClick: () => void;
}

const ToolBarHeader = ({ active, openClick }: IToolBarHeaderProps) => {
  const { theme } = useTheme();
  const variants = {
    open: {
      rotate: 0,
    },
    close: {
      rotate: 180,
    },
  };
  return (
    <div
      className={`${
        theme === "dark"
          ? "border-dark-tollBarBorder"
          : "border-light-tollBarBorder"
      } flex w-full justify-center items-center border-b-[2px] border-solid relative h-[76px]`}
    >
      <div className="flex gap-[8px]">
        <img src={Logo} className="w-[28px]" />
        {active && (
          <motion.h2
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className={`${
              theme === "dark" ? "text-dark-mainFont" : "text-light-mainFont"
            } text-[33px] font-medium`}
          >
            Hope UI
          </motion.h2>
        )}
      </div>
      <motion.div
        onClick={openClick}
        className="absolute right-[-20px] shadow-custom w-[30px] h-[30px] flex justify-center cursor-pointer items-center rounded-full bg-dark-authLink"
      >
        <motion.img
          variants={variants}
          animate={active ? "open" : "close"}
          src={Arrow}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default ToolBarHeader;
