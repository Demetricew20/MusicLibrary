import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, {Component} from 'react';
import SongTable from './SongTable/SongTable';
import Header from './Header/Header';
import AudioPlayer from './AudioPlayer';

class App extends Component {

  render(){
    console.log("this.state >>>", this.state);
    return(
    <div className='main__content' >


      <Router>
        <Header/>
        <Route path='/library'>
        <SongTable mapSongs={() => this.mapSongs()}/>
        </Route>
        <Route path='/'>
          <AudioPlayer/>
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