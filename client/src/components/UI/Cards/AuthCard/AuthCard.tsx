import { ReactNode } from "react";
import useTheme from "../../../../hooks/useTheme";
import MiniLogoRight from "../../../../images/MiniLogo.svg";
import MiniLogoLeft from "../../../../images/MiniLogoLeft.svg";
import { motion } from "framer-motion";
import { IAuthType } from "../../../../interfaces/IAuthType";
interface IAuthCardProps {
  children: ReactNode;
  type: IAuthType;
}
const AuthCard = ({ children, type }: IAuthCardProps) => {
  const { theme } = useTheme();
  const variants = {
    "Sign Up": {
      left: "50%",
    },
    "Sign In": {
      left: "0%",
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={type}
      className={`${
        theme === "dark" ? " bg-dark-cardBG " : "bg-light-cardBG"
      } w-[50%] h-full relative flex justify-center items-center`}
    >
      {children}
      {type === "Sign In" ? (
        <img
          src={MiniLogoLeft}
          alt=""
          className="absolute left-0 top-0 w-[50%]"
        />
      ) : (
        <img
          src={MiniLogoRight}
          alt=""
          className="absolute right-0 top-0 w-[50%]"
        />
      )}
    </motion.div>
  );
};

export default AuthCard;
