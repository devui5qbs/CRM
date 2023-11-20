import useTheme from "../../../hooks/useTheme";
import SearchInput from "../Inputs/SearchInput/SearchInput";

const Nav = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? " bg-dark-cardBG" : "bg-light-cardBG"
      }   w-full h-[76px] flex justify-between items-center py-[16px] px-[32px] `}
    >
      <SearchInput placeholder="Search…" />
      <div className="w-[200px] h-full"></div>
    </div>
  );
};

export default Nav;
