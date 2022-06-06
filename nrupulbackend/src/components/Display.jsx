import "./display.css"

export const Display=({props})=>{

    console.log(props)

    return(
        
        <div className="main">
    {props.map((el,i)=>{
        return (
            <div key={i} >
                <div><img src={el.img}/></div>
                <div>{el.name}</div>
                <div>{el.colorName}</div>
                <div>Rs-{el.finalPrice}</div>
                <div>{el.size}</div>
                
            </div>
        )
    })
}
</div>
        
    )
}