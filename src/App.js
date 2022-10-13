import logo from './logo.svg';
import './App.css';
import {NavbarApp, NewsCard} from './components/organisms';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/pages';

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Home />
    </div>
  );
}

export default App;
