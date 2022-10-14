import logo from './logo.svg';
import './App.css';
import {NavbarApp, NewsCard} from './components/organisms';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/pages';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
