import useTheme from "../../../../hooks/useTheme";
interface IAuthFooterProps {
  text: string;
  linkText: string;
  redirectClick: () => void;
}
const AuthFooter = ({ text, redirectClick, linkText }: IAuthFooterProps) => {
  const { theme } = useTheme();
  return (
    <p
      className={`${
        theme === "dark" ? "text-dark-mainFont" : "text-light-mainFont"
      } text-center text-[16px]`}
    >
      {text}{" "}
      <span className=" text-dark-authLink cursor-pointer" onClick={redirectClick}>
        {linkText}
      </span>
    </p>
  );
};

export default AuthFooter;
