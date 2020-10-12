import React, { Component } from 'react';
import axios from 'axios'
class ReacAsync extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ""
        ,   name: ""
        ,   isLoading: true
        }
    }

    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data);
        this.setState(({
            image: data.avatar_url
        ,   name: data.login
        ,   isLoading: false
        }));
    }

    render() {
        let result;
        if (this.state.isLoading) {
            result = (
                <p>Loading...</p>
            )
        } else {
            result = (
                <div>
                    <h1>{this.state.name}</h1>
                    <img src={this.state.image}/>
                </div>
            )
        }
        return (
            result
        );
    }
}

export default ReacAsync;