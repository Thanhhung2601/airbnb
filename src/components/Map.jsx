import React, { useState } from 'react'
import Map from 'react-map-gl'
import styled from 'styled-components'

const MapBox = ({ showMap }) => {
    return (
        <MapStyled>
            <div className={showMap ? 'showmap--fixed' : 'map'}>
                <Map
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3.5,
                    }}
                    mapStyle="mapbox://styles/kobe2601/ckzi7jm9y00fb15pc5u7eazgj"
                    mapboxAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
                    width="100%"
                    height="100%"
                />
            </div>
        </MapStyled>
    )
}

const MapStyled = styled.div`
    width: 100%;
    height: 100%;
    @keyframes opa {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1128px) {
        .map {
            display: none;
        }
    }
    .showmap--fixed {
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        top: 0;
        animation: opa 0.2s ease-in;
    }
    .map {
        width: 100%;
        height: 100%;
    }
`

export default MapBox
