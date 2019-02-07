import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return(
            <ul className="header-nav">
                <li className="header-nav__item">
                    <Link className="header-nav__link" to="/">Accueil</Link>
                </li>
                <li className="header-nav__item">
                    <Link className="header-nav__link" to="/people">Les personnages</Link>
                </li>
                <li className="header-nav__item">
                    <Link className="header-nav__link" to="/vehicles">Les véhicules</Link>
                </li>
            </ul>
        );
    }
}

export default Navigation;