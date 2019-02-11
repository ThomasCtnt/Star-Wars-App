import React, { Component } from 'react';

import './CharacterDetails.css';

class CharacterDetails extends React.Component {
    
    render() {

        return(   
            <div className="chardetails">
                <p className="chardetails-prop"><strong>Name:</strong> {this.props.data.name}</p>
                <p className="chardetails-prop"><strong>Height:</strong> {this.props.data.height} cm</p>
                <p className="chardetails-prop"><strong>Weight:</strong> {this.props.data.mass} kg</p>
                <p className="chardetails-prop"><strong>Hair color:</strong> {this.props.data.hair_color}</p>
                <p className="chardetails-prop"><strong>Eye color:</strong> {this.props.data.eye_color}</p>
            </div>     
        );
    }
}

export default CharacterDetails;