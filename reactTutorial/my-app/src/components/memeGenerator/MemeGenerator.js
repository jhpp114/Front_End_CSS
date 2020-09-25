import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: ""
        ,   bottomText: ""
        ,   randImage: "https://i.imgflip.com/1btij.jpg"
        ,   allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        const API_URL = `https://api.imgflip.com/get_memes`;
        const response = await fetch(API_URL);
        const data = await response.json();
        //console.log(data);
        this.setState({
            allMemeImgs: data.data.memes
        });
        console.log(this.state.allMemeImgs[0].url);
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name] : value
        })
    }

    handleClick(event) {
        event.preventDefault();
        const memGenBtn = document.querySelector('#memeGenBtn');
        const RAND_NUM = Math.floor(Math.random() * 100);
        console.log(RAND_NUM);
        const imageData = this.state.allMemeImgs[RAND_NUM].url;
        console.log(imageData);
        this.setState({
            randImage: imageData
        })
        
    }

    render() {
        // console.log(this.state.allMemeImgs);
        return (
            <main>
                <h1>Meme Generator</h1>
                <form>
                    
                    <input
                        type="text"
                        name="topText"
                        onChange={this.handleChange}
                        value={this.state.topText}
                        placeholder="top text"
                    />
                    
                    <input
                        type="text"
                        name="bottomText"
                        onChange={this.handleChange}
                        value={this.state.bottomText}
                        placeholder="bottom text"
                    />
           
                    <button className="genMemeBtn" id="memeGenBtn" onClick={this.handleClick}>Generate MEME</button>
                </form>
                <div className="imageContainer">
                    <img src={this.state.randImage} alt="random mem image"/>
                    <h2 className="imageUpperText">{this.state.topText}</h2>
                    <h2 className="imageBottomText">{this.state.bottomText}</h2>
                </div>
            </main>
        )
    }
}
export default MemeGenerator