import axios from "axios"
import "./cityFilter.css"
export const CityFilter=({props})=>{

    const deletingElement=(ind)=>{
      
    
        axios
        .delete(`http://localhost:8080/cities/${ind}`)
        .then((res) => {
        props.getdata()
        })
        .catch((error) => {
          console.log(error);
        })
    
    }


    const editingElement=(ind)=>{
      
    
        axios
        .edit(`http://localhost:8080/cities/${ind}`)
        .then((res) => {
        props.getdata()
        })
        .catch((error) => {
          console.log(error);
        })
    
    }

    return (
        <div>
            <div>
            <select onClick={() => {}}>
                    <option value="small-big">Ascending population</option>
                    <option value="big-small">  Decending population</option>
                </select>
            </div>
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>COUNTRY NAME</th>
                    <th>CITY NAME</th>
                    <th>POPULATION</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
         {props.newcity.map((ele,index)=>{
return (
    <tr key={index}>
        <td>{index+1}</td>
        <td>{ele.COUNTRY}</td>
        <td>{ele.CITY}</td>
        <td>{ele.POPULATION}</td>
        <td><button onClick={()=>{editingElement(ele.id)}} >EDIT</button></td>
        <td><button onClick={()=>{deletingElement(ele.id)}} >DELETE</button></td>
    </tr>
)
         })}
            </tbody>
        </table>
        </div>
        </div>
    )
}