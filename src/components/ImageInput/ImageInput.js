import React, { Component } from 'react';
import axios from 'axios';

import './ImageInput.css';
import noImg from './no-image.png';

class ImageInput extends React.Component {
    state = { input: '', imageUrl: '' };

    componentDidMount() {
        axios.get(`https://test.corentindesfarges.fr/pictures?category=${this.props.cat}&remoteId=${this.props.id}`)
            .then(response => {
                this.setState({ imageUrl: response.data[response.data.length - 1].imageUrl })
            }).catch(error => {
                this.setState({ imageUrl: noImg })
            })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    handleClick = () => {

        axios.post('https://test.corentindesfarges.fr/pictures', {
            category: this.props.cat,
            imageUrl: this.state.input,
            remoteId: this.props.id
        }).then(response => {
            this.setState({ imageUrl: response.data.imageUrl });
            this.setState({ input: '' });
        })
    }

    render() {

        return(
            <div className="image-input">
                <img className="image-displayed" src={this.state.imageUrl} />
                <input className="sub-text" placeholder="Put image link here" type="text" onChange={(e) => this.handleChange(e)} value={this.state.input} />
                <input className="sub-btn" type="button" value="Add the image" onClick={() => this.handleClick()} />
            </div>
        );
    }
}

export default ImageInput;