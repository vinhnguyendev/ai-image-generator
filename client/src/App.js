import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as lay from './components'
import * as sec from './components'

function App() {
  return (
    <div className="App">
      <lay.NavigationBar/>
      <sec.Hero/>
      <sec.CreatePost/>
    </div>
  );
}

export default App;
