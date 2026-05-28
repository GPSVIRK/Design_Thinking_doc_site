import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Prototype from './pages/Prototype';
import Docs from './pages/Docs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-slate-800">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/prototype" element={<Prototype />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
