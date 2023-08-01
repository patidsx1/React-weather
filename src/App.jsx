
import { useEffect, useState } from 'react';
import cold from './assets/cold.jpg'
import hot from './assets/hot.jpg'
import  Description from './components/description';
import { getWeatherData } from "./weatherserivce";
function App() {
  const [city,setcity]=useState('Paris')
  const[weather,setweather]=useState(null)
const [unit ,setunit]=useState('metric')
const[bg,setbg]=useState(hot)
  useEffect(()=>{

    const getapidata=async ()=>{
    const data=  await  getWeatherData(city,unit)
    setweather(data)
    const threshold=unit==='metric'?20:60;
    data.temp.toFixed() >=threshold?setbg(hot):setbg(cold)
    }
    getapidata()
 
  },[unit,city])

  const alterUnit = (e)=>{

    e.target.innerText ==='F' ? (e.target.innerText ='C') : (e.target.innerText ='F') ;
    e.target.innerText ==='F' ?  setunit('metric'):setunit('imperial') ;
  }

  const handleClick= (e)=>{

  if(e.keyCode===13)
    {

    setcity(e.target.value)
      e.target.blur()
    }

  }


  return(<div className="app" style={{ backgroundImage: `url(${bg})` }}>
    <div className="overlay">
    {weather &&
        <div className="container">
        <div className="section section__inputs">
          <input    
            type="text"
            name="city"
            placeholder="Enter City..."
            onKeyUp={handleClick}
       
          />
        <button onClick={alterUnit}>F</button>
        </div>
        
        <div className="section section__temperature">  
         <div className="icon">
          <h3>{`${weather.name},${weather.country}`}</h3>
          <img src={weather.iconURL} alt="" />
          <h3>{weather.description}</h3>
         </div>
        <div className="temperature">
          <h1>{`${weather.temp.toFixed()}\u00b0` +(unit ==='metric'? 'C':'F')}</h1>
        </div>
        </div>  
        <Description united={unit} weathered={weather} /> 
      </div>
    }
  
      
    </div>
  </div>)
  
}

export default App;
