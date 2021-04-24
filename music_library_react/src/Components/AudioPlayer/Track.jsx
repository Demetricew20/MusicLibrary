import React from 'react';
import theLight from './Audio/theLight.m4a';
import regulate from './Audio/regulate.m4a';
import myBabe from './Audio/myBabe.m4a';
import sittinOnTheDock from './Audio/sittinOnTheDock.m4a';
import elevators from './Audio/elevators.m4a';
import yourAllINeed from './Audio/yourAllINeed.m4a';
import itWasAGoodDay from './Audio/itWasAGoodDay.m4a';
import homeSweetHome from './Audio/homeSweetHome.m4a';
import walkingOnADream from './Audio/walkingOnADream.m4a';
import './Track.css';
import ReactAudioPlayer from 'react-audio-player';


function Track(props) {

    let source;
    let coverImage;

    // Audio and Image file designation

    switch (props.song.title) {
        
        case 'The Light':
            source = theLight;
            coverImage = "https://img.discogs.com/vQe13Jxkg7ZLGPitVnlLX6zBf3Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1078477-1539502479-3034.jpeg.jpg";
            break;
        case "(Sittin' On) the Dock of the Bay":
            source = sittinOnTheDock;
            coverImage = 'https://img.discogs.com/hEni01dDePXfzhwKsIR6EbZRq80=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7334278-1548884715-1249.jpeg.jpg';
            break;
        case "Elevators":
            source = elevators;
            coverImage = 'https://img.discogs.com/5n9SO5gAfhtncxUpxCtdGjsPKho=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8284050-1480354583-2186.jpeg.jpg';
            break;
        case "Home Sweet Home":
            source = homeSweetHome;
            coverImage = 'https://img.discogs.com/wvOtWg0zWKopbGfjBgYEHkBDB-Q=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2252583-1431858685-8618.jpeg.jpg';
            break;
        case "My Babe":
            source = myBabe;
            coverImage = 'https://i.scdn.co/image/ab67616d00001e0220f3de1822791b066e563a2d';
            break;
        case "I'll Be There for You/You're All I Need to Get By":
            source = yourAllINeed;
            coverImage = 'https://img.discogs.com/QvfERMWv5q0i3HlcJ_VbUmzsZt0=/fit-in/600x525/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-2516325-1556812692-5413.jpeg.jpg';
            break;
        case "It Was a Good Day":
            source = itWasAGoodDay;
            coverImage = 'https://e.snmc.io/i/600/s/b5cb358306fe681428a3e36f15421314/7842677';
            break;
        case "Regulate":
            source = regulate;
            coverImage = "https://img.discogs.com/MN7d6knGZHPlnqBP5IqVT6d2ToI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1739433-1401690539-1852.jpeg.jpg";
            break;
        case "Walking On a Dream":
            source = walkingOnADream;
            coverImage = 'https://upload.wikimedia.org/wikipedia/en/6/60/Empire_of_the_Sun_-_Walking_on_a_Dream_%28album%29.png';
            break;
    
        default:
            break;
    }


    return (
        <div className='song'>
            <div className='cover'>
                <h1 className='title'>{props.song.title}</h1>
                <img src={coverImage} alt="Album Cover Art" width={300} height={300}></img>
                <h4 className='artist'>Artist - {props.song.artist}</h4>
                <h4 className='album'>Album - {props.song.album}</h4>
                <h4 className='releaseDate'>{props.song.releaseDate}</h4>
                <span className='audio__player'>
                    <ReactAudioPlayer src={source} controls className='audio__controls' />
                    </span>
            </div>
        </div>
    );
}

export default Track;
