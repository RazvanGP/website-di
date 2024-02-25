import { BsMoonStars, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "./Context";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const DarkModeToggleBtn = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !darkMode);
    // set darkMode in cookie
    cookies.set("darkMode", darkMode, { path: "/" });
  };

  return (
    <button className="darkModeToggleBtn" onClick={toggleDarkMode}>
      {darkMode ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default DarkModeToggleBtn;
