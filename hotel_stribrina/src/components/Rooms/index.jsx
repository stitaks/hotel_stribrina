import { useState, useEffect } from "react";
import { Card } from "../Card"

export const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const fetchRooms = async () => {
          const response = await fetch('http://localhost:4000/api/rooms');
          const data = await response.json();
          setRooms(data.result);
        };
    
        fetchRooms();
      }, []);
      
      const cardRooms = rooms.map((room) => {<Card room = {room}/>})

    return (
        <section className="dark">
            <div className="container">
            <h2>Pokoje</h2>
            <p>
                Vyberte si, který z pokojů je pro vás ten pravý.
            </p>
                {cardRooms}
            </div>
        </section>
    )
}