import React from "react";
import {
  MapContainer as LeafletMap,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import evenderech from "././images/evenderech.png";

const markerIcon = L.icon({
    iconUrl: require("././images/evenderech.png"),
    iconSize: [20, 20],
   
}) ;

function Map({ center, zoom }) {
  return (
    <div className="map">
      <MapContainer
        center={[31.063236, 35.046168]}
        zoom={15}
        maxZoom={15}
      >
        {/* <LeafletMap center={center} zoom={zoom}> */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
<Marker position={[31.063236, 35.046168]} icon={markerIcon}>
    <Popup><b>First Marker</b></Popup>
</Marker>
          {/* {showDataOnMap(countries, casesType)} */}
        {/* </LeafletMap> */}
      </MapContainer>
    </div>
  );
}

export default Map;
