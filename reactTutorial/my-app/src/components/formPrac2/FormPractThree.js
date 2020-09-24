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
        ,   isVegan: false
        ,   isHighBloodPressure: false
        ,   isLowBloodPressure: false
            
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
            <div>
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
                        onChange={this.handleChange}
                        checked={this.state.gender === 'male'}/>
                <input type="radio" 
                        name="gender" 
                        value="female"
                        onChange={this.handleChange}
                        checked={this.state.gender === 'female'}/>
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
                        name="isVegan"
                        checked={this.state.isVegan}
                        onChange={this.handleChange}/> Is Vegan
                <input type="checkbox" 
                        name="isHighBloodPressure"
                        checked={this.state.isHighBloodPressure}
                        onChange={this.handleChange}/> Is High blood pressure
                <input type="checkbox" 
                        name="isLowBloodPressure"
                        checked={this.state.isLowBloodPressure}
                        onChange={this.handleChange}/> Is Low blood pressure
            </form>
            <h3>Typed User Information</h3>
                <h6>{this.state.firstName}</h6>
                <h6>{this.state.lastName}</h6>
                <h6>{this.state.age}</h6>
                <h6>{this.state.gender}</h6>
                <h6>{this.state.location}</h6>
                <h6>Is Vegan: {this.state.isVegan ? "yes" : "no"}</h6>
                <h6>Have HighBloodPressure: {this.state.isHighBloodPressure ? "yes" : "no"}</h6>
                <h6>Have LowBloodPressure: {this.state.isLowBloodPressure ? "yes" : "no"}</h6>
            </div>

        )
    }
}
export default FormPractThree
