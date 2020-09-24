import React from "react"

class FormPractThree extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName : ""
        ,   lastName: ""
        ,   age: ""
        ,   gender: ""
        ,   location: 'UnitedStates'
        ,   isRestricted: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    render() {
        return (
            <form>
                <label>First Name</label>
                <input type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange}/>
                <br/>
                <hr/>
                <label>Last Name</label>
                <input type="text" 
                        name="lastName" 
                        value={this.state.lastName}
                        onChange={this.handleChange}/>
                <br/>
                <hr/>
                <label>Age</label>
                <input type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}/>
                <br/>
                <hr/>
                <label>Gender</label>
                <input type="radio" 
                        name="gender" 
                        value="male"
                        onChange={this.handleChange}/>
                <input type="radio" 
                        name="gender" 
                        value="female"
                        onChange={this.handleChange}/>
                <br/>
                <hr/>
                <label>Location</label>
                <select value={this.state.location}
                        onChange={this.handleChange}
                        name="location">
                        <option value="UnitedStates">United States</option>
                        <option value="SouthKorea">South Korea</option>
                        <option value="France">France</option>
                </select>
                <br/>
                <hr/>
                <label>Restrictions </label>
                <input type="checkbox" 
                        name="isRestricted"
                        checked={this.state.isRestricted}
                        onChange={this.handleChange}/> Restricted1
                <p>{this.state.firstName} {this.state.lastName} {this.state.age} {this.state.gender}
                    {this.state.location} {this.state.isRestricted}
                </p>
            </form>
        )
    }
}
export default FormPractThree
