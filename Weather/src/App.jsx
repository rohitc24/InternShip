import {useState } from 'react'
import './App.css'
import Getweather from './Getweather'
import Weatherinfo from './Weatherinfo'
import Error from './Error'

function App() {
  const [info,setinfo]=useState();
  const [err,seterr]=useState();
let upadteinfo=(res)=>{
  setinfo(res);
  seterr(false);
}
let updateerr=(e)=>{
  seterr(e);
  setinfo(false);
}
  return (
    <>
      <Getweather updateinfo={upadteinfo} updateerr={updateerr}/>
      {err && <Error err={err}/>}
      {info && <Weatherinfo info={info}/>}
    </>
  )
}

export default App
