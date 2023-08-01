import React from "react";
import "./description.css";
import { FaArrowDown,FaArrowUp ,FaWind} from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

 const Description = ({weathered,united}) => {

    const tempUnit= united==='metric'?'C':'F';
    const windUnit=united==='metric'?'m/s':'km/hr';
    const cards = [
        {
          id: 1,
          icon: <FaArrowDown />,
          title: "min",
          data: weathered.temp_min.toFixed(),
          unit: '\u00b0'+tempUnit,
        },
        {
          id: 2,
          icon: <FaArrowUp />,
          title: "max",
          data: weathered.temp_max.toFixed(),
          unit:'\u00b0'+ tempUnit,
        },
        {
          id: 3,
          icon: <BiHappy />,
          title: "feels like",
          data: weathered.feels_like.toFixed(),
          unit: '\u00b0'+tempUnit,
        },
        {
          id: 4,
          icon: <MdCompress />,
          title: "pressure",
          data: weathered.pressure,
          unit: "hPa",
        },
        {
          id: 5,
          icon: <MdOutlineWaterDrop />,
          title: "humidity",
          data: weathered.humidity,
          unit: "%",
        },
        {
          id: 6,
          icon: <FaWind />,
          title: "wind speed",
          data: weathered.speed.toFixed(),
          unit: windUnit,
        },
      ];

    return (
        <div className="section section__descriptions">
   

   {
    cards.map(card=>    <div  key={card.id} className="card">
    <div className="description__card-icon">
{card.icon}
      <small>{card.title}</small>
    </div>
    <h2>{card.data  + ' ' +card.unit}</h2>
  </div>)
   }
        </div>
      );
    };
  
export default Description
