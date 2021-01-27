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
        backgroundColor: 'white',
        height: '150px',
        width: '100%',
        borderRadius: "5px",
        overflow: 'hidden'
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
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom:'-3.5px'
    }
};

function MiniPalette(props) {
    console.log(props);
    const {classes, paletteName, emoji, colors } = props;
    const miniColorBoxes = colors.map(eachColor => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: eachColor.color}}
            key={eachColor.name}    
        >

        </div>
    ))
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} 
                <span className={classes.emoji}>
                    {emoji}
                </span>
            </h5>
            {/* <h1>MiniPalette</h1> */}
        </div>
        
    )
}

MiniPalette.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MiniPalette);
