import { BsMoonStars, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "./Context";

const DarkModeToggleBtn = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !darkMode);
  };

  return (
    <button className="darkModeToggleBtn" onClick={toggleDarkMode}>
      {darkMode ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default DarkModeToggleBtn;
