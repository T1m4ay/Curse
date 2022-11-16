import AddBoxIcon from "@mui/icons-material/AddBox";
import kolesa from "./kolesa-logo.svg";
import "./App.css";

function HeaderMain() {
  return (
    <div className="edge">
      <div className="headerMain">
        <img src={kolesa} className="mainItem" alt="logo" />
      </div>
      <div className="headerMainMenu">
        <div className="headerMainItem">
          Машины
          <div className="blueDash"></div>
        </div>
        <div className="headerMainItemOff">
          <a>Запчасти</a>
        </div>
        <div className="headerMainItemOff">
          <a>Ремонт и услуги</a>
        </div>
        <div className="headerMainItemOff">
          <a>Коммерческие</a>
        </div>
        <div className="headerMainItemOff">
          <a>Прочее</a>
        </div>
        <div className="headerMainItemOff">
          <a>Почитать</a>
        </div>
        <div className="headerMainItemOff">
          <a>Kolesa Гид</a>
        </div>
        <div className="headerMainItemOff">
          <a>Дилерам</a>
        </div>
      </div>
      <div className="headerAdd">
        <div className="headersAd">
          <div className="addbox">
            <AddBoxIcon className="addboxitem" />
          </div>
          <div className="headerMainItemAdd">Подать объявление</div>
        </div>
        <div>
          <i className="countAdd">895 793 уже на сайте</i>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
