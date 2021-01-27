import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import './minipalette.style.css';

const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: 'grey'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    }
};

function MiniPalette(props) {
    console.log(props);
    const {classes, paletteName, emoji } = props;
    //console.log(paletteName);
    //console.log(emoji);
    return (
        <div className={classes.root}>
            <div className={classes.colors}>
                <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </h5>
            </div>
            
            {/* <h1>MiniPalette</h1> */}
        </div>
        
    )
}

MiniPalette.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MiniPalette);
