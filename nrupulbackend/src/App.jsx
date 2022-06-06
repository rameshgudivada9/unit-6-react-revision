import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { Display } from './components/Display';

function App() {
  const [newdata, setNewdata] = useState([]);

  async function getdata() {
    axios
      .get("https://yooxapi.herokuapp.com/products/men")
      .then((res) => {
        setNewdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{

   getdata()
  },[])
console.log(newdata)
  return (
    <div className="App">
      <Display props={newdata}/>
    </div>
  );
}

export default App;
