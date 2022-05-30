import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { CityFilter } from './components/CityFilter';
import { Citylist } from './components/Citylist';

function App() {
  const [newcity,setNewcity]=useState([]);

  const getdata=async()=>{
    axios.get("http://localhost:8080/cities").then((res)=>{
      setNewcity(res.data)
    })
    .catch((error)=>{
console.log(error)
    })
  }

  useEffect(()=>{
    getdata();
  },[])
  return (
    <div className="App">
    <Citylist props={getdata}/>
    <CityFilter props={{newcity,getdata}}/>
    </div>
  );
}

export default App;
