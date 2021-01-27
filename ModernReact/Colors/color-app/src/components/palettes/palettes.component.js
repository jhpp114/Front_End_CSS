import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from '../minipalette/minipalette.component';

const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: "50%",
        display: 'flex',
        alignItem: 'flex-start',
        flexDriection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

class palettes extends Component {
    
    gotoPalaette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        // console.log("From Palettes");
        // console.log(this.props.palette);
        const { palette, classes } = this.props;
        // console.log(palette);
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {
                            palette.map( eachPalette => (
                                <p>
                                    {/* <Link to={`/palette/${eachPalette.id}`}>{eachPalette.paletteName}</Link> */}
                                    
                                    <MiniPalette {...eachPalette} handleClick={ () => this.gotoPalaette(eachPalette.id)}/>
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(palettes);
