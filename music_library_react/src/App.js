import './App.css';
import './components/AddSong'
import AddSong from './components/AddSong';
import UpdateAndRemove from './components/UpdateAndRemove'

function App() {


  return (
    <div className="App">
      <h1>APP COMPONENT</h1>
      <div>
        <AddSong/>
        <UpdateAndRemove/>
      </div>
    </div>
  );
}

export default App;
