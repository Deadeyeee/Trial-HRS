import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { Container } from './Style';

const Location = (props) => {
    return (
        <Map
            google={props.google}
            zoom={15}
            containerStyle={
                {
                    width: "100%",
                    height: "100%",
                }
            }
            initialCenter={
                {
                    lat: 14.670580,
                    lng: 121.018000
                }
            }
        >
            <Marker
                title={'RMC LUXE HOTEL'}
                position={{ lat: 14.670580, lng: 121.018000 }} />
            <Marker />
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: ('')
})(Location);