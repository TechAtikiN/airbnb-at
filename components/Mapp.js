//Foreach is different from map because foreach cannot return a value whereras map can return a value
import React from "react"
import { Map, Marker, Overlay } from "pigeon-maps"
import data from "../lib/data"
import { getCenter } from "geolib"
export default function Mapp({searchResults}) {
    // const lat = 28.7041
    // const long = 77.1025
  // console.log(data.Mumbai.latitude)

//transform the searchresults object into the  {latitude:76.321, longitude:12.343} object
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));
  // console.log(coordinates)

  const center = getCenter(coordinates);
  // console.log(center);
  


  return (
    <Map height={'90%'} defaultCenter={[center.latitude, center.longitude]} defaultZoom={11}>
      
      {searchResults.map(result => (
        <div key={ result.long}>
          {console.log(result)}
          <Overlay width={30} anchor={[ result.lat, result.long]}></Overlay>

        </div>
      ))}
    </Map>
  )
}
