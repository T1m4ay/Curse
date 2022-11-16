import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";
import MenuList from "./MenuList";
import HotAdd from "./HotAdd";
import HotBody from "./HotBody";
import "./App.css";
import MainBody from "./MainBody";

function App() {
  return (
    <div className="kolesa">
      <header>
        <HeaderMenu />
        <div className="shadowbox"></div>
        <HeaderMain />
        <MenuList />
      </header>
      <main>
        <HotAdd />
        <HotBody />
        <MainBody />
      </main>
    </div>
  );
}

export default App;
