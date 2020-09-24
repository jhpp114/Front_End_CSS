import React, { useImperativeHandle } from 'react'

class FormPartOne extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: ""
        ,   lastname: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render() {
        return (
            <form>
                <input type="text" name="firstname" placeholder="first name" onChange={this.handleChange}/>
                <input type="text" name="lastname" placeholder="last name" onChange={this.handleChange}/>
                <p>{this.state.firstname} {this.state.lastname}</p>
            </form>
            
        )
    }
}
export default FormPartOne
