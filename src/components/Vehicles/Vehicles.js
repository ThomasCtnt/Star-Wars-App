import React, { Component } from 'react';
import axios from 'axios';

import './Vehicles.css';

class Vehicles extends React.Component {
    state = { vehicles: [] };

    componentDidMount() {

        axios.get('https://swapi.co/api/vehicles/')
            .then(response => {
                console.log(response);
            })
    }

    render() {

        return(
            <div>

            </div>
        );
    }
}

export default Vehicles;