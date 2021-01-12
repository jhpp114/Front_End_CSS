import React, { Component } from 'react';
import './newBoxForm.style.css';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: ''
        ,   height: ''
        ,   backgroudColor: ''
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newBoxItem = {
            width: this.state.width
        }
        this.props.createNewBox();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='width'>Width: </label>
                        <input 
                            id='width'
                            type='text'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='height'>Height: </label>
                        <input 
                            id='height'
                            type='text'
                            name='height'
                            value={this.state.height}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='backgroudColor'>Background Color: </label>
                        <input
                            id='backgroundColor'
                            type='text'
                            name='backgroundColor'
                            value={this.state.backgroudColor}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Create New Box</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;
