import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './ElementList.css';

class ElementList extends React.Component {
    state = { elements: [] };

    componentDidMount() {

        axios.get(`https://swapi.co/api${this.props.location.pathname}/`)
            .then(response => {
                this.setState({ elements: response.data.results });
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            axios.get(`https://swapi.co/api${this.props.location.pathname}/`)
            .then(response => {
                this.setState({ elements: response.data.results });
            })
        }
    }

    render() {

        return(
            <ul className="list">
                {
                    this.state.elements.map(function(element, i) {
                        let url = element.url;
                        let id = url.match(/https:\/\/swapi\.co\/api\/[a-z]*\/([0-9]*)\//)[1];

                        return (                            
                            <li className="item" key={i}>
                                <p className="item-name">{element.name}</p>
                                <Link className="item-link" to={`/details/${id}`}>Fiche détaillée</Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default ElementList;