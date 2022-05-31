import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

const PAGE_NUMBER=1;

function App() {
  const [state,setState]=useState([]);
  const [page,setPage]=useState(PAGE_NUMBER);


  useEffect(()=>{
    fetch(`https://api.instantwebtools.net/v1/passenger?=${page}&size=5`)
    .then(res=>res.json())
    .then(json=>setState([...state,json.data]))
  },[page]);

const scrollToEnd=()=>{
  setPage(page+1);
}


window.onscroll=()=>{
  // check the page was scroll to bottom or not
if(
  window.innerHeight+document.documentElement.scrollTop === document.documentElement.offsetHeight
){
  scrollToEnd()
}

}


  return (
    <div className="App">
      {state.length>0 && state.map((el,i)=>{
        console.log(state)
return (
  <div key={i} className={"container"} >
   <h4>ID:{el._id}</h4>
   <h4>NAME:{el.name}</h4>
   <h4>TRIPS:{el.trips}</h4>
  </div>
)
      })}
    
    </div>
  );
}

export default App;
