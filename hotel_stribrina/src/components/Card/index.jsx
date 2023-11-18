import { useState } from "react"

export const Card = ([index, name, price, description]) => {
    cosnt [detail, setDetail] = useState(false)

    return(
        <>
        <h2>{name}</h2>
        <p>{price} za osobu na noc</p>
        <button onClick={setDetail(!detail)}>Detail</button>
        </>
    )
}