import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, {Component} from 'react';
import axios from 'axios';
import SongTable from './SongTable';
import Song from './Songs';
import Header from './Header';
import AddSong from './AddSong';

class App extends Component {
  state = {
    songs: []
}

  componentDidMount(){
    //gets called after the component did mount (rendered to the page)
    this.getAllSongs();
  };

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000');
    this.setState({
      songs: response.data
    })
  };

  mapSongs(){
    return this.state.songs.map(song =>
      <Song 
        key={song.id}
        song={song}
      />
    )
  };

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
        <Route path='/'>
      </Route>
      </Router>

    </div>
    );
  }
}

export default App