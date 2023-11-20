import { IAuthType } from "../../../../interfaces/IAuthType";
import useTheme from "../../../../hooks/useTheme";

interface IFormHeaderProps {
  type: IAuthType;
}
const FormHeader = ({ type }: IFormHeaderProps) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-[16px] justify-center">
      <h2
        className={` ${
          theme ? "text-dark-mainFont" : "text-light-mainFont"
        } text-[33px] font-bold text-center`}
      >
        {type}
      </h2>
      <h3 className="text-[#8A92A6] text-[16px] text-center">
        {type === "Sign In"
          ? "Sign in to stay connected."
          : "Create your Hope UI account"}
      </h3>
    </div>
  );
};

export default FormHeader;
