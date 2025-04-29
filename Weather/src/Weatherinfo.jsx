import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./info.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpDown ,faTemperatureLow, faDroplet,faEye, faWind,faCompass,faSun,faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";


export default function Weatherinfo({info}) {
  function degToCompass(num) {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr=["North","North-Northeast","North-East","East-Eastnorth","East","East-Southeast","South-East","South-Southeast","south","South-Southwest","south-West","West-Westsouth","West","West-Nothwest","North-West","North-Northwest"];
    return arr[(val % 16)];
  };
  return (
    <div className='card'>
      <div style={{paddingLeft:20}}>
        <h3 style={{margin:0}}>Weather Today in {info.city} at {new Date(Date.now()-info.timezone*1000).toLocaleString()}</h3>
      </div>

      <div style={{display:"flex", marginTop:20}}>
          <div style={{marginLeft:30,padding:20}}>
              <h4 style={{marginBottom:8,marginTop:0}}>Feels Like</h4>
              <span >{info.feels_like}&deg;C</span>
              <div style={{marginTop:5}}>
              {info.weather.toUpperCase()}
              </div>
      </div>
        <div style={{marginLeft:200, display:"flex",borderBottom:"2px solid black"}}>
            <div style={{marginRight:10, marginTop:60}}>
              <FontAwesomeIcon icon={faUpLong} style={{color: "#FFD43B",marginLeft:20}} />
              <div>
              {new Date(info.sunrise*1000).toLocaleTimeString()}
              </div>
            </div>
            <div>
            <FontAwesomeIcon icon={faSun} spin style={{color: "#FFD43B",fontSize:80}} />
            </div>
            <div style={{marginLeft:10, marginTop:60}}>
            <FontAwesomeIcon icon={faDownLong} style={{color: "#FFD43B",marginLeft:20}} />
            <div>
              {new Date(info.sunset*1000).toLocaleTimeString()}
              </div>
            </div>
            
        </div>
      </div>
      <div className="info">
        <div className="detail">
        <FontAwesomeIcon icon={faTemperatureLow} />
        <span>High/Low</span>
        <span style={{marginLeft:50}}>{"--" && info.temp_max}&deg;C/{info.temp_min}&deg;C</span>
        </div>
        <div className="detail">
        <FontAwesomeIcon icon={faDroplet} />
        <span>Humidity</span>
        <span style={{marginLeft:110}}>{info.humidity}&#37;</span>
        </div>
        <div className="detail">
        <FontAwesomeIcon icon={faUpDown} />
        <span>Pressure</span>
        <span style={{marginLeft:110}}>{info.pressure}mb</span>
        </div>
        <div className="detail">
        <FontAwesomeIcon icon={faEye} />
        <span>Visibility</span>
        <span style={{marginLeft:100}}>{info.visibility/1000} km</span>
        </div>
        <div className="detail">
        <FontAwesomeIcon icon={faWind} />
        <span>Wind Speed</span>
        <span style={{marginLeft:60}}>{(info.wind_speed*3.6).toFixed(2)}km/h</span>
        </div>
        <div className="detail">
        <FontAwesomeIcon icon={faCompass} />
        <span>Wind Direction</span>
        <span style={{marginLeft:20}}>{degToCompass(info.wind_dir)}</span>
        </div>
      </div>
    </div>
  );
}