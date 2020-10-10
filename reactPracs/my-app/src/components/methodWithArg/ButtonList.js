import React, {Component} from 'react'

class ButtonList extends Component {
    static defaultProps = {
        colors: [
            "#e056fd", "#eb4d4b", "#badc58", "#f0932b"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            colors: "cyan"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(newColor) {
        this.setState({
            colors: newColor
        })  
        
    }
    render() {
        return (
            <div className='ButtonList' style={{backgroundColor: this.state.colors}}>
                {this.props.colors.map( color => {
                    const colorObj = {backgroundColor: color};
                    return <button style={colorObj} onClick={this.handleClick.bind(this, color)}>Click on me!</button>
                })}
            </div>
        )
    }
}

export default ButtonList;