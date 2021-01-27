import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../minipalette/minipalette.component';

class palettes extends Component {

    render() {
        // console.log("From Palettes");
        // console.log(this.props.palette);
        const { palette } = this.props;
        // console.log(palette);
        return (
            <div>
                <h1>Palette Lists</h1>
                {
                    <div>
                        {
                            palette.map( eachPalette => (
                                <p>
                                    {/* <Link to={`/palette/${eachPalette.id}`}>{eachPalette.paletteName}</Link> */}
                                    {console.log(eachPalette)}
                                    <MiniPalette {...eachPalette}/>
                                </p>
                            ))
                        }
                    </div>
                }
            </div>
        );
    }
}

export default palettes;
