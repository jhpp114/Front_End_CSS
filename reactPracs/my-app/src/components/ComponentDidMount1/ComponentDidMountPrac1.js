import React, { Component } from 'react';
import axios from 'axios';
import './ComponenetDidMountPrac1.css';
class ComponentDidMountPrac1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ""
        ,   isLoading: false
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/zen').then(res=> this.setState(({
            quote: res.data
        })));

    }
    render() {
        return (
            <div>
                <p>{this.state.quote}</p>
            </div>
        );
    }
}

export default ComponentDidMountPrac1;