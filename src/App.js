import logo from './logo.svg';
import './App.css';
import Listarticles from './components/articlesRedux/Listarticles';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';

function App() {
  return (
    <>
    <Router>
      <Routes>
    
      <Route path='/articlesadmin' element={<Listarticles/>}/> 
      <Route path='/articlesadmin2' element={<ProductsAppAdmin/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
