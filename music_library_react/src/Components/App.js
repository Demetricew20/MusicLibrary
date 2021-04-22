import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, {Component} from 'react';
import MusicLibraryServices from '../Services/requests'
import SongTable from './SongTable';
import Song from './Songs';
import Header from './Header';
import AddSong from './AddSong';
import EditSong from './EditSong'

class App extends Component {
  state = {
    songs: [],
    currentSong: []
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


  async deleteSong(id){
    await MusicLibraryServices.delete(id)
    .then(response => {
      console.log(response.data);
      this.props.history.push('/')
    })
    .catch(error => {
      console.log(error.response);
    })

    this.getAllSongs();
  }
  
  
  mapSongs(){
    return this.state.songs.map(song =>
      <Song 
        key={song.id}
        song={song}
        link={'/song/' + song.id}
        deleteSong={() => this.deleteSong(song.id)}
      />
    )
  };

  refreshTable() {
    this.getAllSongs();
    this.setState({
      currentSong: null,
      currentIndex: -1
    })
  }

  render(){
    console.log("this.state >>>", this.state);
    return(
    <div>
      <Router>
        <Header/>
        <Route path='/library'>
        <SongTable mapSongs={() => this.mapSongs()}/>
        </Route>
        <Route path='/add_song'>
          <AddSong/>
      </Route>
      </Router>

    </div>
    );
  }
}

export default App