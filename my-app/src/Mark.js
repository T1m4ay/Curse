import "./App.css";
import imgaudi from "./1200px-Audi_A7_Sportback_Genf_2018.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Car from "./Car";
import VievAdd from "./VievAdd";
import Modal from "react-modal";
import React from "react";

function Mark() {
  let subtitle;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const autoMark = () => {
  //   <VievAdd active="on" />;
  // };
  // const closeMark = () => {
  //   <VievAdd active="off" closeMark={closeMark} />;
  // };
  return (
    <div className="mainEdge">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <div className="headMark">
        <a className="markLink">Новые автомобили</a>
        <a className="markLink">С пробегом</a>
      </div>
      <div className="markTool">
        <p>Выбор автомобиля по марке</p>
        <div className="markToolColor">
          <div className="markToolItem">Все марки</div>
          <ArrowDropDownIcon className="arrowdownmark" />
        </div>
      </div>
      <div className="markTool">
        <div className="collumMark">
          <Car car="12" openModal={openModal} mark={"Audi"} number={6701} />
          <Car car="12" openModal={openModal} mark={"BAIC"} number={65} />
          <div className="markItem">
            <a onClick={openModal}>BMW</a>
            &nbsp;
            <small>5718</small>
          </div>
          <div className="markItem">
            <a>BYD</a>
            &nbsp;
            <small>63</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Bentley</a>
            &nbsp;
            <small>66</small>
          </div>
          <div className="markItem">
            <a>Cadillac</a>
            &nbsp;
            <small>690</small>
          </div>
          <div className="markItem">
            <a>Changan</a>
            &nbsp;
            <small>60</small>
          </div>
          <div className="markItem">
            <a>Chery</a>
            &nbsp;
            <small>263</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Chevrolet</a>
            &nbsp;
            <small>4273</small>
          </div>
          <div className="markItem">
            <a>Chrysler</a>
            &nbsp;
            <small>190</small>
          </div>
          <div className="markItem">
            <a>Citroen</a>
            &nbsp;
            <small>69</small>
          </div>
          <div className="markItem">
            <a>Daewoo</a>
            &nbsp;
            <small>4010</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Datsun</a>
            &nbsp;
            <small>76</small>
          </div>
          <div className="markItem">
            <a>Dodge</a>
            &nbsp;
            <small>163</small>
          </div>
          <div className="markItem">
            <a>EXEED</a>
            &nbsp;
            <small>186</small>
          </div>
          <div className="markItem">
            <a>FAW</a>
            &nbsp;
            <small>217</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Fiat</a>
            &nbsp;
            <small>62</small>
          </div>
          <div className="markItem">
            <a>Ford</a>
            &nbsp;
            <small>1521</small>
          </div>
          <div className="markItem">
            <a>Geely</a>
            &nbsp;
            <small>291</small>
          </div>
          <div className="markItem">
            <a>Genesis</a>
            &nbsp;
            <small>96</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Great Wall</a>
            &nbsp;
            <small>53</small>
          </div>
          <div className="markItem">
            <a>Haval</a>
            &nbsp;
            <small>213</small>
          </div>
          <div className="markItem">
            <a>Honda</a>
            &nbsp;
            <small>2539</small>
          </div>
          <div className="markItem">
            <a>Hummer</a>
            &nbsp;
            <small>102</small>
          </div>
        </div>
      </div>
      <div className="markTool">
        <p>Выбор нового автомобиля по модели</p>
        <div className="markToolColor">
          <div className="markToolItem">Все модели</div>
          <ArrowDropDownIcon className="arrowdownmark" />
        </div>
      </div>
      <div className="markTool">
        <div className="collumMark">
          <div className="markItem">
            <a>ГАЗ ГАЗель NEXT</a>
            &nbsp;
            <small>528</small>
          </div>
          <div className="markItem">
            <a>ГАЗ ГАЗель</a>
            &nbsp;
            <small>80</small>
          </div>
          <div className="markItem">
            <a>ГАЗ Соболь</a>
            &nbsp;
            <small>64</small>
          </div>
          <div className="markItem">
            <a>Cadillac XT4</a>
            &nbsp;
            <small>181</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Cadillac Escalade</a>
            &nbsp;
            <small>129</small>
          </div>
          <div className="markItem">
            <a>Cadillac XT5</a>
            &nbsp;
            <small>113</small>
          </div>
          <div className="markItem">
            <a>Cadillac XT6</a>
            &nbsp;
            <small>72</small>
          </div>
          <div className="markItem">
            <a>Infiniti QX80</a>
            &nbsp;
            <small>122</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Infiniti QX50</a>
            &nbsp;
            <small>98</small>
          </div>
          <div className="markItem">
            <a>Infiniti QX55</a>
            &nbsp;
            <small>87</small>
          </div>
          <div className="markItem">
            <a>Nissan X-Trail</a>
            &nbsp;
            <small>93</small>
          </div>
          <div className="markItem">
            <a>Nissan Qashqai</a>
            &nbsp;
            <small>80</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Nissan Murano</a>
            &nbsp;
            <small>42</small>
          </div>
          <div className="markItem">
            <a>Nissan Terrano</a>
            &nbsp;
            <small>7</small>
          </div>
          <div className="markItem">
            <a>Volkswagen Polo</a>
            &nbsp;
            <small>111</small>
          </div>
          <div className="markItem">
            <a>Volkswagen Taos</a>
            &nbsp;
            <small>27</small>
          </div>
        </div>
        <div className="collumMark">
          <div className="markItem">
            <a>Volkswagen Tiguan</a>
            &nbsp;
            <small>21</small>
          </div>
          <div className="markItem">
            <a>Volkswagen Touareg</a>
            &nbsp;
            <small>16</small>
          </div>
          <div className="markItem">
            <a>Volkswagen Passat</a>
            &nbsp;
            <small>2</small>
          </div>
          <div className="markItem">
            <a>УАЗ Профи</a>
            &nbsp;
            <small>64</small>
          </div>
        </div>
      </div>
      {/* <div id="vievadds" className="vievadd">
        <div className="close" onClick={() => closeMark()}>
          X
        </div>
      </div> */}
    </div>
  );
}
export default Mark;
