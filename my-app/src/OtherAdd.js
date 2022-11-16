import "./App.css";
import noPhoto from "./noPhoto_120x90.svg";

function OtherAdd() {
  const arr = ["otherPhoto1", "otherPhoto2", "otherPhoto3", "otherPhoto4"];
  return (
    <div className="mainEdge">
      <div className="headMark">
        <a className="markLink">Запчасти</a>
      </div>
      <div>
        <small>
          Шины, диски, оптика, стёкла, масла, присадки, полироли и многое другое
          — всё здесь.
        </small>
      </div>
      <div className="otherPhotoBody">
        {arr.map((item, index) => (
          <img key={index} src={noPhoto} className={item} alt="photo" />
        ))}
      </div>
      <div className="collumOther">
        <div className="markItem">
          <a>Автозапчасти</a>
        </div>
        <div className="markItem">
          <a>Запчасти на коммерческие</a>
        </div>
        <div className="markItem">
          <a>Мотозапчасти</a>
        </div>
        <div className="markItem">
          <a>Шины</a>
        </div>
      </div>
    </div>
  );
}

export default OtherAdd;
