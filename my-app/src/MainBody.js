import "./App.css";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

function MainBody() {
  return (
    <div className="edge">
      <LeftBody />
      <RightBody />
    </div>
  );
}

export default MainBody;
