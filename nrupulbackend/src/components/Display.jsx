import "./display.css"

export const Display=({props})=>{

    console.log(props)

    return(
        <div>
        <div className="main">
    {props.map((el,i)=>{
        return (
            <div key={i} >
                <div><img src={el.img} alt="image"/></div>
                <div><h2>{el.name}</h2></div>
                <div><h3>{el.colorName}</h3></div>
                <div><h3>Rs-{el.finalPrice}</h3></div>
                
            </div>
        )
    })
}
</div>
      </div>  
    )
}