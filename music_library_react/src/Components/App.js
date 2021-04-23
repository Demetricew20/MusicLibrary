import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, {Component} from 'react';
import MusicLibraryServices from '../Services/requests'
import SongTable from './SongTable/SongTable';
import Header from './Header/Header';
import AddSong from './AddSong/AddSong';

class App extends Component {
  state = {
    songs: [],
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



  render(){
    console.log("this.state >>>", this.state);
    return(
    <div className='main__content' >


      <Router>
        <Header/>
        <Route path='/library'>
        <SongTable mapSongs={() => this.mapSongs()}/>
        </Route>
        <Route path='/add_song'>
          <AddSong/>
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

export default App