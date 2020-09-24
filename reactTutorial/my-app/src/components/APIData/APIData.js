import React from 'react'

class APIData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        ,   isLoading: false
        };
    }

    async componentDidMount(prevState) {
        this.setState(() => {
            return {
                isLoading: true
            }
        });
        
        const API_URL = `https://swapi.dev/api/`;
        try {
            //console.log(this.state.isLoading)
            const response = await fetch(`${API_URL}people/1`);
            const data = await response.json();
            this.setState( () => {
                return {
                    data : data
                ,   isLoading: false
                }
            })
        } catch (error) {
            console.log(error);
        }
        //fetch(`${API_URL}people/1`).then(response => response.json()).then(data => console.log(data));
        
    }

    render() {
        const LOADING_TEXT = this.state.isLoading ? 'Is Loading...' : this.state.data.name
        
        return(
            <p>{LOADING_TEXT}</p>
        );
    }
}
export default APIData