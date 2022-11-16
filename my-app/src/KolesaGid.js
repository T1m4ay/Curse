import "./App.css";
import logoguide from "./logo-guide.svg";
import phone from "./phone.png";

function KolesaGid() {
  return (
    <div className="kolesaGid">
      <div className="kolesaGidText">
        <img src={logoguide} alt="logo" />
        <div className="kolesaGidTextItem">
          Как рассчитать налог и переоформить автомобиль онлайн?
        </div>
        <div className="gidButtom">
          <p className="gidButtomText">Узнайте на Kolesa Гид</p>
        </div>
      </div>
      <div>
        <img src={phone} className="phonePhoto" alt="logo" />
      </div>
    </div>
  );
}

export default KolesaGid;
