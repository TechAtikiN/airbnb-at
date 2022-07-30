// import { useEffect, useState } from 'react'
// import { MapContainer, TileLayer, Circle } from 'react-leaflet'
// import "leaflet/dist/leaflet.css";

// export default function Map() {
//     const position = [51.505, -0.09];
//     const [map, setMap] = useState(null);
//     const fillBlueOptions = { fillColor: "#0484D6" };

//     useEffect(() => {
//         if (map) {
//            setInterval(function () {
//               map.invalidateSize();
//            }, 100);
//         }
//      }, [map]);

//     return (
//         <MapContainer center={position} zoom={20} whenCreated={setMap}>
//             <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             <Circle center={position} pathOptions={fillBlueOptions} radius={50} />
//         </MapContainer>
//     )
// }

import React, { useState } from 'react'
import { Map } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'

const AirbnbMap = () => {
    const [center, setCenter] = useState([50.879, 4.6997])
    const [zoom, setZoom] = useState(11)

    const maptilerProvider = maptiler('E4fCQu0Ia79YcjRiKIr4', 'streets')

    return (
        <Map
            provider={maptilerProvider}
            dprs={[1, 2]} // this provider supports HiDPI tiles
            height={200}
            defaultCenter={[50.879, 4.6997]}
            defaultZoom={11}
        />
    );
}
 
export default AirbnbMap;
