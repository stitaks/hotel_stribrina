import { Card } from "../Card"

export const Rooms = () => {

    const rooms = [];
    useEffect(() => {
        const fetchRooms = async () => {
          const response = await fetch('http://localhost:4000/api/rooms');
          const data = await response.json();
          rooms = data;
        };
    
        fetchRooms();
      }, []);

    return (
        <section class="dark">
            <div class="container">
            <h2>Pokoje</h2>
            <p>
                Vyberte si, který z pokojů je pro vás ten pravý.
            </p>
            < Card />
            </div>
        </section>
    )
}