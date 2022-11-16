import "./App.css";
import KolesaGid from "./KolesaGid";
import Mark from "./Mark";
import OtherAdd from "./OtherAdd";

function LeftBody() {
  return (
    <div className="mainEdge">
      <KolesaGid />
      <Mark />
      <OtherAdd />
    </div>
  );
}

export default LeftBody;
