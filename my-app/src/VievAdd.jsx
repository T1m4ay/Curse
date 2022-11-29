import "./App.css";
import React from 'react'

function VievAdd({active, closeMark}){
    return(
    <div id="vievadds" className={vievAddClass}>
        <div className="close" onClick={() => closeMark()}>
          X
        </div>
    </div>
    )
}
export default VievAdd;