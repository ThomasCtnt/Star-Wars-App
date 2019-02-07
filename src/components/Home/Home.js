import React, { Component } from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = { heroes: {} };

    componentDidMount() {

        axios.get('https://api.nasa.gov/planetary/apod?api_key=1eooIq05BEbJ49FXBb4g4lUEBHVD3XWC6UmsRHNP')
            .then(response => {
                console.log(response.data);
            })
    }

    render() {
        return(
            <div>
                
            </div>
        );
    }
}

export default Home;