import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Image from './components/image';
import Roster from './components/Roster';
import Creative from './components/Creative';
import Navbar from './components/Navbar';
import About from './components/About';
import JoshySoul from './components/JoshySoul';
import Typerwriter from './components/Typer';
import { InvalidPage } from './components/404';
import Thomko from './components/Thomko';

function App() {

return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'
          element={<Image />} />
        <Route path='/roster'
          element={<Roster />} />
        <Route path='/creative'
          element={<Creative />} />
          <Route path='/about'
          element={<About />} />
          <Route path='/joshysoul'
          element={<JoshySoul />} />
             <Route path='/thomko'
          element={<Thomko />} />
          <Route path='/loop'
          element={<Typerwriter />} />
          <Route path='*'
          element={<InvalidPage />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;