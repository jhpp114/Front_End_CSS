import React, { Component } from 'react';
import axios from 'axios'; 

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            isLoaded: false
        }
    }

    componentDidMount() {

        axios.get('https://api.github.com/zen').then(response => {
            setTimeout( () => {
                this.setState({
                    quote: response.data
                ,   isLoaded: true
                })
            }, 3000);
        })
    }

    render() {
        let result;
        if (this.state.isLoaded) {
            result = 
            (
                <div>
                    <p>{this.state.quote}</p>
                </div>
            )
        } else {
            result = 
            (
                <div>
                    <p>Loading....</p>
                </div>
            )
        }
        return result;
    }
}

export default Loader;
