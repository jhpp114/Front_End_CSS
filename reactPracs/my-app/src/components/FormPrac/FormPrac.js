import React, {Component} from 'react'

class FormPrac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        ,   lastname: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        this.setState(({
           [event.target.name]: event.target.value
        }))
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.lastname);
        this.setState( ({
            [event.target.name]: ""
        }))
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>The Form Practice</h1>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onChange}/>
                    <input 
                        type="text" 
                        name="lastname"
                        placeholder="lastname"
                        value={this.state.lastname}
                        onChange={this.onChange}/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default FormPrac;
