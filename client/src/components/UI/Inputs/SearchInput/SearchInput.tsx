import { InputHTMLAttributes } from "react";
import SearchIcon from "../../../../images/Search.svg";
import useTheme from "../../../../hooks/useTheme";
interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}
const SearchInput = ({ ...props }: ISearchInputProps) => {
  const { theme } = useTheme();
  return (
    <label className="w-full h-[32px] relative">
      <input
        {...props}
        className={`bg-transparent border-[#30384F] w-[240px] h-[32px] border-[2px] border-solid pl-[48px] rounded-[4px] ${
          theme === "dark" ? "text-dark-mainFont" : "text-light-mainFont"
        }`}
      />
      <img src={SearchIcon} alt="" className="absolute top-[4px] left-[16px]" />
    </label>
  );
};

export default SearchInput;
