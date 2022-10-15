import logo from './logo.svg';
import './App.css';
import {NavbarApp, NewsCard, NewsProgramming, NewsCovid} from './components/organisms';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Covid, Home, Programming} from './components/pages';
import {
  Routes,
  Route
} from 'react-router-dom';
import NewsContextProvider from './NewsContext';

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
    </div>
  );
}

export default App;
