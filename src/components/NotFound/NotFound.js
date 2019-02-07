import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';
import notFoundCharacter from './iron-man-char.jpg';

class NotFound extends React.Component {
    render() {
        return(
            <div className="error-page">
                <div className="error-page__message">
                    <h3>404</h3>
                    <p>Cette page n'existe pas, <Link className="error-page__link" to="/">retourner à l'accueil</Link></p>
                </div>

                <div className="error-page__overlay"></div>
                <img className="error-page__illustration" src={notFoundCharacter} alt="Iron man" />
            </div>
        );
    }
}

export default NotFound;