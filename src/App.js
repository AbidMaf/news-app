import logo from './logo.svg';
import './App.css';
import {NavbarApp, NewsCard, NewsProgramming, NewsCovid} from './components/organisms';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Covid, Home, Programming, SearchPage, SavedNews} from './components/pages';
import {
  Routes,
  Route
} from 'react-router-dom';
import NewsContextProvider from './context/NewsContext';

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/saved" element={<SavedNews />} />
      </Routes>
    </div>
  );
}

export default App;
