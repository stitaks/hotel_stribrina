import { useState } from "react"
import './style.css' 

export const Card = ({room}) => {
    const [detail, setDetail] = useState(false)
    {console.log(room)};
    return(
        
        
    <div onClick={() => setDetail(!detail)} className="card">
      <img className="card__image" src={room.image} />
      <div className="card__title">{room.name}</div>
      <div className="card__body">{room.description}</div>
      {/* <p>{price} za osobu na noc</p> */}
    </div>


    )

}