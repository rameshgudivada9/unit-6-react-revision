import { useState } from "react";
import axios from "axios";

export const Citylist=({props})=>{

    const [cityname,setCityname]=useState({})

    const handlechange=(e)=>{
  const {name,value}=e.target;
  setCityname({...cityname,[name]:value})
    }

    const handlesubmit=(e)=>{
   e.preventDefault()

   axios.post("http://localhost:8080/cities",{...cityname}).then((res)=>{
console.log(res.data);
   })
   .catch((error)=>{
    console.log(error)
})
.then(()=>{
    props()
})

    }
    return (
        <form className="CITIES" onSubmit={(e)=>{handlesubmit(e)}}>
        <div>COUNTRY:{" "}<input name="COUNTRY"  className="country" type="text" onChange={(e)=>{handlechange(e)}} placeholder="Enter Country"/></div>
        <div>CITY:{" "}<input name="CITY" className="city" type="text" onChange={(e)=>{handlechange(e)}} placeholder="Enter City" /></div>
        <div>POPULATION:{" "}<input name="POPULATION" className="population" type="number" onChange={(e)=>{handlechange(e)}} placeholder="Enter Population" /></div>
        <div><input className="submit" type="submit" value="submit" /></div>
        <hr/>
        </form>

    )
}