//Foreach is different from map because foreach cannot return a value whereras map can return a value
import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"
import { getCenter } from "geolib"
export default function Mapp({searchResults}) {
   
  const [selectedLocation, setSelectedLocation]=useState({})
//transform the searchresults object into the  {latitude:76.321, longitude:12.343} object
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordinates);

  return (
    <Map height={'90%'} defaultCenter={[center.latitude, center.longitude]} defaultZoom={11}>
      
      {searchResults.map(result => (
        
          <Marker
            key={result.long}
          width={40}
          anchor={[result.lat, result.long]} 
          onClick={()=>setSelectedLocation(result)}
        />
      ))}
    </Map>
  )
}
