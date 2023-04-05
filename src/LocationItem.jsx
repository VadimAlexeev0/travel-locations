import { useState } from "react";


const LocationItem = ({data})=>{
    const [visited, setVisited] = useState(false);

    console.log(visited)
    return (
        <div className="location-item" onClick={()=>{
            //  check if it has not been visited if yes then set to true 
            setVisited((currentValue)=>{ 
               if (currentValue === true) {
                return false} 
         else{return true}
            })
         ;
        }}>
            <h2>{data}</h2>
        {visited? <h3>true</h3> :<h3>false</h3> }
        </div>
    )
}

export default LocationItem;