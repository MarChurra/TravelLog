import React from "react"
import Data from "../data.js"

export default function Destinations() {
    let destination = Data.map(function (dest) {
        return (
            <div className="cards" key={dest.id}>
                <img src={dest.imageUrl} alt="An image depicting the destination" className="destination-img" />
                <div className="location">
                    <img src="../Images/location-pin.png" className="pin-icon" />
                    <h3 className="destination-location">{dest.location}</h3>
                    <a className="destination-link" href={dest.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="destination-title" >{dest.title}</h2>
                <span className="travel-dates"> {dest.startDate} - {dest.endDate}</span>
                <p className="destination-description">{dest.description}</p>
            </div>
        )
    })

    return (
        <div className="destinations-container" >
            {destination}
        </div>
    )
}