import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome.js';
import Home from './pages/Home.js';
import Details from './pages/Details.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;