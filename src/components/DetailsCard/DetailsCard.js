import React, { Component } from 'react';
import axios from 'axios';
import ImageInput from '../ImageInput/ImageInput';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import VehicleDetails from '../VehicleDetails/VehicleDetails';

import './DetailsCard.css';

class DetailsCard extends React.Component {
    state = { objectDetails: [] };
    
    componentDidMount() {
        axios.get(`https://swapi.co/api${this.props.location.pathname}`)
            .then(response => {
                this.setState({ objectDetails: response.data })
            })
    }

    render() {

        const pathname = this.props.location.pathname;
        const category = pathname.match(/\/([a-z]*)/)[1];
        const id = this.props.match.params.id;
        
        if (category === "vehicles") {
            return (
                <div className="details-container">
                    <ImageInput data={this.state.objectDetails} cat={category} id={id} />
                    <VehicleDetails data={this.state.objectDetails} />
                </div>
            );
        } else {
            return(
                <div className="details-container">
                    <ImageInput data={this.state.objectDetails} cat={category} id={id} />
                    <CharacterDetails data={this.state.objectDetails} />
                </div>
            );
        }
    }
}

export default DetailsCard;