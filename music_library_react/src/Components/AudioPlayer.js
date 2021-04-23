import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player'
import song1 from '../Assets/Audio/The_Light.mp3'

class AudioPlayer extends Component {



    render() 
    {
        return (
            <div>
                <ReactAudioPlayer src={song1} autoPlay controls/>
            </div>
        )
    }

    }

export default AudioPlayer;