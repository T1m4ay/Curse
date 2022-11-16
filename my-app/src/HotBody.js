import noPhoto from "./noPhoto_120x90.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./App.css";

function HotBody() {
  const arr = [
    "hotBodyPhoto1",
    "hotBodyPhoto2",
    "hotBodyPhoto3",
    "hotBodyPhoto4",
    "hotBodyPhoto5",
    "hotBodyPhoto6",
    "hotBodyPhoto7",
    "hotBodyPhoto8",
    "hotBodyPhoto9",
    "hotBodyPhoto10",
    "hotBodyPhoto11",
    "hotBodyPhoto12",
    "hotBodyPhoto13",
    "hotBodyPhoto14",
    "hotBodyPhoto15",
    "hotBodyPhoto16",
    "hotBodyPhoto17",
    "hotBodyPhoto18",
    "hotBodyPhoto19",
    "hotBodyPhoto20",
    "hotBodyPhoto21",
    "hotBodyPhoto22",
    "hotBodyPhoto23",
    "hotBodyPhoto24",
    "hotBodyPhoto25",
    "hotBodyPhoto26",
    "hotBodyPhoto27",
  ];
  return (
    <div>
      <div className="edge">
        <div className="hotBody">
          {arr.map((item, index) => (
            <img key={index} src={noPhoto} className={item} alt="photo" />
          ))}
        </div>
      </div>
      <div className="navigationIcon">
        <div className="leftIcon">
          <ChevronLeftIcon className="iconItem" />
        </div>
        <div className="rightIcon">
          <ChevronRightIcon className="iconItem" />
        </div>
      </div>
      <div className="centerText">
        <a>Подать объявление</a>
      </div>
      <div className="centerText1">
        Всего на сайте 906 126 объявлений из них 10 201 объявление подано
        сегодня.
      </div>
      <hr className="edgeHR" />
    </div>
  );
}
export default HotBody;
