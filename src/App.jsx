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
import Masterpage from './components/pages/Masterpage';
import Products from './components/pages/Products';
import Cart from './components/pages/cart/Cart';

function App() {

  return (
    <>
      {/* <Symbol /> */}
      <Pages />
      
      <Sidebar />
      <Header />
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/view' element={<Masterpage/>} >
          <Route path='products' element={<Products/>} />
          <Route path='products/:category' element={<Products/>} />
          <Route path='product/:id' element={<Product/>} />
          <Route path='cart' element={<Cart/>} />
        </Route>
      </Routes>
      {/* <Index /> */}
      <Footer />
    </>
  )
}

export default App
