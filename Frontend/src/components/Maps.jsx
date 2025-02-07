import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

// Custom icon
const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1673/1673221.png',
  iconSize: [38, 38],
});

// Custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "bg-gray-800 h-8 w-8 text-white flex items-center justify-center rounded-full text-xl shadow-[0_0_0_5px_white]",
    iconSize: point(33, 33, true),
  });
};

// Markers
const markers = [
  { geocode: [31.6340, 74.8723], popUp: "Hello, I am from Amritsar" },
  { geocode: [30.9010, 75.8573], popUp: "Hello, I am from Ludhiana" },
  { geocode: [30.3398, 76.3869], popUp: "Hello, I am from Patiala" },
];

function Maps() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Ensure map takes full width & height of its parent container */}
      <MapContainer center={[31.145937, 75.3429]} zoom={8} className="w-full h-[400px] rounded-lg overflow-hidden">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Maps;


