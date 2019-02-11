import React, { Component } from 'react';

import './VehicleDetails.css';

class VehicleDetails extends React.Component {

    render() {

        return(
            <div className="vehicledetails">
                <p className="vehicledetails-prop"><strong>Name :</strong> {this.props.data.name}</p>
                <p className="vehicledetails-prop"><strong>Model :</strong> {this.props.data.model}</p>
                <p className="vehicledetails-prop"><strong>Manufacturer :</strong> {this.props.data.manufacturer}</p>
                <p className="vehicledetails-prop"><strong>Cost (in credits) :</strong> {this.props.data.cost_in_credits}</p>
                <p className="vehicledetails-prop"><strong>Max speed :</strong> {this.props.data.max_atmosphering_speed}</p>
            </div>    
        );
    }
}

export default VehicleDetails;