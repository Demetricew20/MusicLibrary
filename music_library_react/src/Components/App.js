import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, {Component} from 'react';
import MusicLibraryServices from '../Services/requests';
import SongTable from './SongTable/SongTable';
import Header from './Header/Header';
import AudioPlayer from './AudioPlayer/AudioPlayer';

class App extends Component {

  state = {
    songs: [],
    songNumber: 0
  }

  componentDidMount(){
    //gets called after the component did mount (rendered to the page)
    this.getAllSongs();
  };

  async getAllSongs(){
    const response = await MusicLibraryServices.getAll();
    this.setState({
      songs: response.data
    })
  };

  goToNextSong(){
      let tempSongNumber = this.state.songNumber;
      tempSongNumber++;
      console.log(tempSongNumber);
      if(tempSongNumber === this.state.songs.length){
          tempSongNumber = 0;
      }
      this.setState({
          songNumber: tempSongNumber
      });
  }

  goToPreviousSong(){
      let tempSongNumber = this.state.songNumber;
      tempSongNumber--;
      console.log(tempSongNumber);
      if(tempSongNumber < 0){
          tempSongNumber = this.state.songs.length - 1;
      }
      this.setState({
          songNumber: tempSongNumber
      });
  }

  mapSongs(){
    
  }

  render(){
    console.log('state >>>', this.state.songs)
    if (this.state.songs.length == 0) {
      return <div>Loading....</div>
    }
    else {
      return(
        <div className='main__content' >
    
    
          <Router>
            <Header/>
            <Route path='/library'>
            <SongTable/>
            </Route>
            <Route path='/home'>
              <AudioPlayer song={this.state.songs[this.state.songNumber]} nextSong={() => this.goToNextSong()} previousSong={()=>this.goToPreviousSong()}/>
          </Route>
    
          </Router>
          <div className='animation__area'>
            <ul className='box__area'>
              
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
    
            </ul>
    
    
          </div>
    
        </div>
        );
      
    }

  }
}

export default App