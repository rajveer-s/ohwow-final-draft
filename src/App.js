import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Image from './components/image';
import Roster from './components/Roster';
import Creative from './components/Creative';
import Navbar from './components/Navbar';



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
      </Routes>
    </Router>
  </div>
);
}

export default App;