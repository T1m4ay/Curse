import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import kolesa from "./kolesa-logo.svg";
import krisha from "./krisha-logo.svg";
import market from "./market-logo.svg";
import "./App.css";

function HeaderMenu() {
  return (
    <div className="edge">
      <div className="headerLogo">
        <div>
          <img src={kolesa} className="logoItem" alt="logo" />
        </div>
        <div className="headerLine"></div>
        <div>
          <img src={krisha} className="logoItem" alt="logo" />
        </div>
        <div className="headerLine"></div>
        <div>
          <img src={market} className="logoItem" alt="logo" />
        </div>
      </div>
      <div className="headerMenu">
        <div className="headerMenuItem">RU</div>
        <ArrowDropDownIcon className="arrowdown" />
        <div className="headerMenuItem">
          <a>Регистрация</a>
        </div>
        <div className="headerMenuItem">
          <a>Личный кабинет</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
