import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class palettes extends Component {

    render() {
        console.log("From Palettes");
        console.log(this.props.palette);
        const { palette } = this.props;
        return (
            <div>
                <h1>Palette Lists</h1>
                {
                    <div>
                        {
                            palette.map( eachPalette => (
                                <p>
                                    <Link to={`/palette/${eachPalette.id}`}>{eachPalette.paletteName}</Link>
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
