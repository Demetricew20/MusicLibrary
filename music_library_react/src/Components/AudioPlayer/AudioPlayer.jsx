import React from 'react';
import Track from './Track';
import './AudioPlayer.css';

function AudioPlayer(props)  {

    return (
        <div className='row row-spacer align-items-center no-gutters'>
        <div className='col-md-3'>
            {/* {Button here to move to the previous Song viewed} */}
            <button className='btn__previous' onClick={() => props.previousSong()}>Previous Song</button>
        </div>
        <div className='col-md-6'>
            {/* Display Song with Cover here  */}
            <Track song={props.song} />
        </div>
        <div className='col-md-3'>
            {/* Button here to move to the next Song */}
            <button className='btn__next' onClick={() => props.nextSong()}>Next Song</button>
        </div>
    </div>
    )
}


export default AudioPlayer;