import React, { Component } from 'react';
import axios from 'axios';

import './People.css';

class People extends React.Component {
    state = { characters: [] };

    componentDidMount() {

        axios.get('https://swapi.co/api/people/')
            .then(response => {
                let data = response.data.results;
                this.setState({characters: data});
            })
    }

    render() {
        return(
            <ul className="peoples">
                {
                    this.state.characters.map(function(character, i) {
                        return (                            
                            <li className="people" key={i}>
                                <p className="people-name">{character.name}</p>
                                <a className="people-link" href="#">Fiche détaillée</a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default People;