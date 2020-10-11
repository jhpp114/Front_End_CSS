import React, { Component } from 'react';

// form that pass value to formboxlist and update box array
class FormColorBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: ""
        ,   height: ""
        ,   color: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            width: ""
        ,   height: ""
        ,   color: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="width">Width: </label>
                <input 
                    type="text" 
                    id="width"
                    name="width" 
                    value={this.state.width}
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor="height">Height: </label>
                <input 
                    type="text" 
                    id="height"
                    name="height" 
                    value={this.state.height}
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor="color">Color: </label>
                <input 
                    type="text" 
                    id="color"
                    name="color" 
                    value={this.state.color}
                    onChange={this.handleChange}/>
                <br/>
                <button>Add Color Box</button>
            </form>
        );
    }
}

export default FormColorBoxForm;
