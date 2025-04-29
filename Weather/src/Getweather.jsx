import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Getweather({updateinfo,updateerr}){
    const [city,setcity]=useState("Delhi");
    const Api_key=import.meta.env.VITE_API_KEY;
    const Url="https://api.openweathermap.org/data/2.5/weather";
    const getweatherinfo=async()=>{
        if(!city.trim()){
            updateerr({cod:404,message:"please enter city"});
            return ;
        }
        try{
            const res= await axios.get(`${Url}?q=${city}&appid=${Api_key}&units=metric`);
            const data={
                city: res.data.name,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                timezone: res.data.timezone,
                visibility: res.data.visibility,
                temp: res.data.main.temp,
                temp_max: res.data.main.temp_max,
                temp_min: res.data.main.temp_min,
                sunrise: res.data.sys.sunrise,
                sunset: res.data.sys.sunset,
                rain:res.data.rain,
                wind_speed: res.data.wind.speed,
                wind_dir: res.data.wind.deg,
                pressure:res.data.main.pressure,
                weather: res.data.weather[0].main
            }
           updateinfo(data);
        
        }catch(e){
        
            updateerr(e.response.data);
        }
    }
    const handlechange=(e)=>{
        setcity(e.target.value);
    }
    const handlesubmit=async (e)=>{
        e.preventDefault();
       
        await getweatherinfo();
        setcity("");
        
    }
    useEffect(()=>{
        const weatherapp=async()=>{
           await getweatherinfo();
           
            setcity("");
        }
        weatherapp();
    },[])
    return (
        <>
        <form onSubmit={handlesubmit}>
        <h3 style={{textDecoration:"underline"}}>Weather App</h3>
        <TextField id="city" label="City" variant="outlined" onChange={handlechange} value={city}/>
        <br /><br />
        <Button variant="contained" type="submit">Submit</Button>
        </form>
        </>
    )
}