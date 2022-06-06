import "./display.css"

export const Display=({props})=>{

    console.log(props)

    return(
        <div>
            <div>
                <select>
                    <option value="">sort by price</option>
                    <option value="decending">Big to small</option>
                    <option value="ascending">small to big</option>
                </select>
                <select name="" id="">
                    <option value="">Filter by brand</option>
                    <option value="gucci">gucci</option>
                    <option value="black">black color</option>
                </select>
            </div>
            <div>
                
            </div>
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