import './Car.css'
import React from 'react'
import imgaudi from './1200px-Audi_A7_Sportback_Genf_2018.jpg'

function Car({car, openModal, mark, number}){
  const auto = [
    {
      marks: "audi",
      text: "Продается Audi",
      image: imgaudi,
      price: "100000$",
    },
  ];
  let filteredCars = cars.filter((car) => {
    return car.mark === car;
  });
  console.log(tmark);
  return(
      <div className="markItem">
        <a onClick={() => openModal({tmark})}>
          {mark}
        </a>
        &nbsp;
        <small>{number}</small>
      </div>
    )
}
export default Car;