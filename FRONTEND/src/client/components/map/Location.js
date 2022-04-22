import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { Container } from './Style';
const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: 14.6695394,
    lng: 121.048841
};

const Location = (props) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={40}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker
                title={'RMC LUXE HOTEL'}
                position={{
                    lat: 14.6695394,
                    lng: 121.048841
                }} />
            <Marker />
        </GoogleMap>
        // <Map
        //     google={props.google}
        //     zoom={15}
        //     containerStyle={
        //         {
        //             width: "100%",
        //             height: "100%",
        //         }
        //     }
        //     initialCenter={
        //         {
        //             lat: 14.670580,
        //             lng: 121.018000
        //         }
        //     }
        // >
        //     <Marker
        //         title={'RMC LUXE HOTEL'}
        //         position={{ lat: 14.670580, lng: 121.018000 }} />
        //     <Marker />
        // </Map>
    ) : <></>
};

export default React.memo(Location);

// GoogleApiWrapper({
//     apiKey: ('')
// })(Location);