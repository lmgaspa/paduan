import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicosPage from './pages/ServicosPage';
import Orcamento from './pages/Orcamento';
import Contato from './pages/Contato';
import Quemsomos from './pages/Quemsomos';
import TrabalheConosco from './pages/TrabalheConosco';
import MenuDropDown from './components/MenuDropDown';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/quemsomos" element={<Quemsomos />} />
        <Route path="/trabalheconosco" element={<TrabalheConosco />} />
        <Route path="/menudrop" element={<MenuDropDown />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
