import React, { Component } from 'react';
import './newBoxForm.style.css';
import { v4 as uuidv4 } from 'uuid';


class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: ''
        ,   height: ''
        ,   backgroundColor:''
        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(evt) {
        console.log(evt.target.name);
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit= (evt) => {
        evt.preventDefault();
        const newBox = {...this.state, id:uuidv4()}
        this.props.createNewBox(newBox);
        this.setState({
            width: '',
            height: '',
            backgroundColor: ''
        });
    }
    render() {
        return (
            // <div>
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
                            value={this.state.backgroundColor}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Create New Box</button>
                </form>
            // </div>
        )
    }
}

export default NewBoxForm;
