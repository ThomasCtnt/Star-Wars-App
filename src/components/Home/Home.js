import React, { Component } from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = { heroes: {} };

    componentDidMount() {
        axios.get('http://gateway.marvel.com:3000/v1/public/characters?apikey=58f0ce7fc0a9b6286daf2b8bbea68738')
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

export default Home;