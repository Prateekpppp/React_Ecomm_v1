import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'swiper/swiper-bundle.css';
import './assets/css/normalize.css';
import './assets/css/vendor.css';
import './assets/css/template/style.css';
import Header from './components/includes/Header';
import Pages from './components/includes/Pages';
import Sidebar from './components/includes/Sidebar';
import Index from './components/pages/Index';
import Footer from './components/includes/Footer';
// import Symbol from './components/includes/Symbol';
import { Route, Routes } from 'react-router-dom';
import Product from './components/pages/Product';

function App() {

  return (
    <>
      {/* <Symbol /> */}
      <Pages />
      
      <Sidebar />
      <Header />
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
      {/* <Index /> */}
      <Footer />
    </>
  )
}

export default App
