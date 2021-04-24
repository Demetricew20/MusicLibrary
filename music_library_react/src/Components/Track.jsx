import React from 'react';
import theLight from '../Assets/Audio/The_Light.m4a';
import regulate from '../Assets/Audio/Regulate.m4a';
import myBabe from '../Assets/Audio/My_Babe.m4a';
import sittinOnTheDock from '../Assets/Audio/Sittin_on_the_Dock.m4a';
import elevators from '../Assets/Audio/elevators.m4a';
import yourAllINeed from '../Assets/Audio/itWasAGoodDay.m4a';
import itWasAGoodDay from '../Assets/Audio/itWasAGoodDay.m4a';
import homeSweetHome from '../Assets/Audio/homeSweetHome.m4a';
import walkingOnADream from '../Assets/Audio/walkingOnADream.m4a';
import './Track.css';


function Track(props) {

    let source;

    switch (props.song.title) {
        
        case 'The Light':
            source = theLight
            break;
        case "(Sittin' On) the Dock of the Bay":
            source = sittinOnTheDock
            break;
        case "Elevators":
            source = elevators
            break;
        case "Home Sweet Home":
            source = homeSweetHome
            break;
        case "My Babe":
            source = myBabe
            break;
        case "I'll Be There for You/You're All I Need to Get By":
            source = yourAllINeed
            break;
        case "It Was a Good Day":
            source = itWasAGoodDay
            break;
        case "Regulate":
            source = regulate
            break;
        case "Walking On a Dream":
            source = walkingOnADream
            break;
    
        default:
            break;
    }


    return (
        <div className='song'>
            <div className='cover'>
                <h1 className='title'>{props.song.title}</h1>
                <h4 className='artist'>Artist - {props.song.artist}</h4>
                <h4 className='album'>Album - {props.song.album}</h4>
                <h4 className='releaseDate'>{props.song.releaseDate}</h4>
                <span className='audio__player'>
                    <audio controls src={source} />
                    </span>
            </div>
        </div>
    );
}

export default Track;
