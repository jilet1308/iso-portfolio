import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../context/theme/useTheme";

import GoofyButton from "../ui/GoofyButton";

const navbarButtonStyle = `
    h-12
    w-12
    bg-teal-400
    cursor-pointer
    shadow-[4px_4px_0_0_#000]
    transition-all
    active:translate-x-1
    active:translate-y-1
    active:shadow-none
    hover:bg-teal-500
    hover:translate-x-0.5
    hover:translate-y-0.5
    hover:shadow-[2px_2px_0_0_#000]
    dark:bg-teal-500
    dark:hover:bg-teal-400
    dark:shadow-[4px_4px_0_0_theme(colors.teal.800)]
    dark:hover:shadow-[2px_2px_0_0_theme(colors.teal.800)]
`;

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const activeStyle = (path: string) =>
    location.pathname === path
      ? "bg-teal-600 dark:bg-teal-400 shadow-none translate-x-1 translate-y-1"
      : "";

  return (
    <div className="h-24 w-screen bg-amber-200 dark:bg-stone-700 pr-8 pl-8 fixed top-0 left-0 flex justify-between items-center z-50">
      <div className="flex justify-between items-center gap-4">
        <GoofyButton
          className={`${navbarButtonStyle} ${activeStyle("/")}`}
          onClick={() => navigate("/")}
        >
          <i className="fa-solid fa-house text-2xl dark:text-amber-50" />
        </GoofyButton>
        <GoofyButton
          className={`${navbarButtonStyle} ${activeStyle("/cv")}`}
          onClick={() => navigate("/cv")}
        >
          <p className="text-2xl dark:text-amber-50">CV</p>
        </GoofyButton>
        <GoofyButton
          className={`${navbarButtonStyle} ${activeStyle("/books")}`}
          onClick={() => navigate("/books")}
        >
          <i className="fa-solid fa-book text-2xl dark:text-amber-50" />
        </GoofyButton>
      </div>
      <div className="flex justify-between items-center gap-4">
        <GoofyButton
          className={navbarButtonStyle}
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
          }}
        >
          <i className="fa-solid fa-language text-2xl dark:text-amber-50" />
        </GoofyButton>
        <GoofyButton className={navbarButtonStyle} onClick={toggleTheme}>
          {theme === "dark" ? (
            <i className="fa-solid fa-sun text-2xl dark:text-amber-50" />
          ) : (
            <i className="fa-solid fa-moon text-2xl" />
          )}
        </GoofyButton>
      </div>
    </div>
  );
}

export default Navbar;
