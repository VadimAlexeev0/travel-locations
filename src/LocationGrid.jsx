import LocationItem from "./LocationItem"
const LocationGrid = ()=>{
    const locations = [
        "UK",
        "USA",
        "Bangladesh",
        "Belgium",
        "Vietnam",
        "Russia",
        "Sweden",
        "Norway",
        "Germany",
        "Portugal",
        "France",
        "Spain"
    ]

    return (
        <div>
            <h2>Location:</h2>
            <div className="location-container">
                {locations.map((location)=> (
                    <LocationItem key={location} data={location}/>
                ))}
            </div>

        </div>
    )
};

export default LocationGrid