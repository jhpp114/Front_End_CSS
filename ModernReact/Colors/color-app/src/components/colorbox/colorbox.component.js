import React, { Component } from 'react';
import './colorbox.style.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

class colorbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCopied: false
        }
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState({
            isCopied: true
        }, () => {
            setTimeout( ()=>{
                this.setState({
                    isCopied: false
                })
            }, 1500);
        });
    }

    render() {
        const { background, name, eachPaletteId, id } = this.props;
        const { isCopied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{backgroundColor: background}} className='colorbox'>
                    <div style={{backgroundColor:background}} 
                        className={`copy-overlay ${isCopied? `show`:``}`}
                    />
                    <div className={`copy-msg ${isCopied? `show`:``}`}>
                        <h2 className='copy-msg-header'>Copied!</h2>
                        <p className='copy-msg-para'>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <Link to={`/palette/${eachPaletteId}/${id}`} onClick={ (event) => {event.stopPropagation()}}>
                        <span className='see-more'>More</span>
                    </Link>
                    
                </div>
            </CopyToClipboard>
        );
    }
}

export default colorbox;
