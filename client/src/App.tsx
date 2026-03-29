import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bumbums from './pages/Bumbums';
import BumbumDetail from './pages/BumbumDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-secondary-main min-h-screen p-6 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bumbums" element={<Bumbums />} />
          <Route path="/bumbums/:id" element={<BumbumDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
