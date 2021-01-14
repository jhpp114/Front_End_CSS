import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: ""
        ,   name: ""
        ,   isLoaded: false
        };
    }

    async componentDidMount() {
        setTimeout( async () => {
            const url = `https://api.github.com/users/${this.props.username}`;
            const response = await axios.get(url);
            let data = await response.data;
            this.setState({
                imgUrl: data.avatar_url,
                name: data.name,
                isLoaded: true
            });
        }, 2000)
    }

    render() {
        let result;
        if (this.state.isLoaded) {
            result = 
            (
                <div>
                    <p>{this.state.name}</p>
                    <img src={this.state.imgUrl}/>
                </div>
            )
        } else {
            result = 
            (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        return result;
    }
}


export default GithubUserInfo;
