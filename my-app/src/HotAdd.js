import "./App.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import noPhoto from "./noPhoto_120x90.svg";

function HotAdd() {
  return (
    <div className="edge">
      <div className="hotHead">
        <div className="hotHeadItem">
          Горячие предложения по продаже авто в Казахстане
        </div>
        <WhatshotIcon className="hotIcon" />
        <div className="hotHeadItem2">Хочу сюда</div>
      </div>
    </div>
  );
}

export default HotAdd;
