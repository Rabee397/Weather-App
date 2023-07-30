import {React , useState} from 'react';
import './weather.css';

const Weather= ()=> {

  const [weatherInfo , setWeatherInfo] = useState({
    temperature : '' , city : '' , country : '', humidity : '', description : '', error: ''
  }) 
  

  const getWeather = async (e)=>{
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`);
    const data = await url.json();
    if(city && country){
        setWeatherInfo({temperature : data.main.temp , city : data.name , country : data.sys.country ,
            humidity : data.main.humidity , description : data.weather[0].description, error: ''
        })
    }else{
        setWeatherInfo({temperature : "" , city : "" , country : "" ,
            humidity : "" , description : "" , error: 'Please enter Data'
        })
    }
    
                
  }
  
     
  return (
    <div className='container'>
        <form onSubmit={getWeather}>
            <input type='text' name='country' placeholder='Country' />
            <input type='text' name='city' placeholder='City' />
            <button> Get Weather</button>
        </form>
        <div className='info'>
           
                
            {
                weatherInfo.city&&weatherInfo.country ?
                <div className='location'>
                  <span> Location : </span>
                  <span> {weatherInfo.city},{weatherInfo.country} </span>

                </div>
                : <></>
            }            
            {
                weatherInfo.temperature ?
                <div className='temp'>
                   <span> Temperature : </span>
                   <span> {weatherInfo.temperature} </span>
                </div>
                : <></>
            }
            {
                weatherInfo.humidity ?
                <div className='humid'>
                  <span> Humidity : </span>
                  <span> {weatherInfo.humidity} </span>
                </div>
                : <></>
            }
            {
                weatherInfo.description ?
                <div className='condi'>
                  <span> Condition :</span>
                  <span> {weatherInfo.description} </span>
                </div>
                : <></>  
            }
           
                 


            


        </div>
    </div>
  )
}

export default Weather