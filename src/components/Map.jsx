import React, { useState } from 'react'
import Map from 'react-map-gl'
import { searchResult } from '../data/searchResult'

const MapBox = () => {
    return (
        <Map
            initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5,
            }}
            mapStyle="mapbox://styles/kobe2601/ckzi7jm9y00fb15pc5u7eazgj"
            mapboxAccessToken="pk.eyJ1Ijoia29iZTI2MDEiLCJhIjoiY2t6aTc4ZTV1NDVrdTJvcDRvamMzZXd1ZyJ9.o3Ye4SOW4qbqdh70owBEQA"
        />
    )
}

export default MapBox
