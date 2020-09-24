import React from 'react'

class ConditionContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            userLogin: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(prevState) {
        const btnLoginStatus = document.querySelector('#userLoginBtn');
        this.setState( (prevState) => {
            return {
                userLogin : !prevState.userLogin
            }    
        });
    }
    render() {
        let userCondition = ``;
        let btnState = '';
        
        if (this.state.userLogin) {
            userCondition = 'Logged in';
            btnState = 'Log Out';

        } else {
            userCondition = 'Logged Out';
            btnState = 'Log In';
        }
        return (
            <div>
                <h1>User is Currently {userCondition}</h1>
                <button id="userLoginBtn" onClick={this.handleClick}>{btnState}</button>
            </div>
        )
    }
}
export default ConditionContainer