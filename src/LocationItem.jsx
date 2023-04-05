import { useState } from "react";


const LocationItem = ({data})=>{
    const [visited, setVisited] = useState(false);

    console.log(visited)
    return (
        <div className="location-item" onClick={()=>{
            setVisited(true);
        }}>
            <h2>{data}</h2>
        </div>
    )
}

export default LocationItem;