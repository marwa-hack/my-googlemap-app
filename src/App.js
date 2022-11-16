import logo from './logo.svg';
import './App.css';
import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Polygon(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default function App(){
  const defaultProps = {
    center: {
      lat: 46.732400,
      lng: -117.00020
    },
    zoom: 17
  };

  const handleApiLoaded = (map, maps) => {
  // use map and maps objects
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={46.732413}
          lng={-117.000244}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
