import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';
import notFoundCharacter from './dark404.gif';

class NotFound extends React.Component {
    render() {
        return(
            <div className="error-page">
                <div className="error-page__message">
                    <h3>404</h3>
                    <p>You're lost young padawan... <Link className="error-page__link" to="/">Get out of the darkside</Link></p>
                </div>

                <div className="error-page__overlay"></div>
                <img className="error-page__illustration" src={notFoundCharacter} alt="Dark Vador" />
            </div>
        );
    }
}

export default NotFound;