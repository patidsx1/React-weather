const API_KEY='47cb5b86618703ceb061eeedee17a3d8' ;
const makeIconURL=(icon)=>`http://openweathermap.org/img/wn/${icon}@2x.png`

export const getWeatherData= async (city,unit='metric')=>{

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;

    const data=await fetch(url).then(res=>res.json()).then(data=>data);

    const {weather,name, main:{feels_like, temp,temp_min, temp_max,  pressure,humidity},wind:{speed},sys:{country}}  =data;

    const {description,icon}=weather[0]
    return {
        description,
        iconURL: makeIconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
      };

}