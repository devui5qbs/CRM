import { ReactNode } from "react";
import useTheme from "../../../hooks/useTheme";
interface IContainerProps {
  children: ReactNode;
}
const MainContainer = ({ children }: IContainerProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? " bg-dark-bg" : "bg-light-bg"
      } transition-all w-full h-[100vh] relative flex`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
  