import './App.css';
import { addcount } from './Redux/action';
import {store} from "./Redux/store"

function App() {
  const storedata=store.getState()
  console.log(storedata);
  return (
    <div className="App">
   <h3>Counter:0</h3>
   <button onClick={()=>{
     store.dispatch(addcount(1))
   }}>ADD 1</button>
    </div>
  );
}

export default App;
