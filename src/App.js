import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Image from './components/Image';
import Roster from './components/Roster';
import Creative from './components/Creative';
import Navbar from './components/Navbar';
import About from './components/About';
import JoshySoul from './components/JoshySoul';
import InvalidPage  from './components/Invalid404';
import Thomko from './components/Thomko';
import Joshyfigure from './components/Joshyfigure.jsx';
import Yinyang from './components/Yinyang.jsx';

function App() {

return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'
          element={<Image />} />
           <Route path='/yin'
          element={<Yinyang />} />
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
          <Route path='/joshyfigure'
          element={<Joshyfigure />} />
          <Route path='*'
          element={<InvalidPage />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;