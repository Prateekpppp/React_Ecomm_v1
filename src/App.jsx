import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/fonts/font-awesome.min.js';
import 'swiper/swiper-bundle.css';
import './assets/css/font-awesome.min.css';
import './assets/css/normalize.css';
import './assets/css/vendor.css';
import './assets/css/template/style.css';
import Header from './components/includes/Header';
import Pages from './components/includes/Pages';
import Sidebar from './components/includes/Sidebar';
import Index from './components/pages/Index';
import Footer from './components/includes/Footer';
// import Symbol from './components/includes/Symbol';
import { Route, Routes, useLocation } from 'react-router-dom';
import Product from './components/pages/Product';
import Masterpage from './components/pages/Masterpage';
import Products from './components/pages/Products';
import Cart from './components/pages/cart/Cart';
import ScrollToTop from './components/includes/ScrollToTop';
import Register from './User/Register';

function App() {

  const location = useLocation();
  const showHeader = location.pathname !== '/register' && location.pathname !== '/login';

  return (
    <>
      {/* <Symbol /> */}
      {showHeader && <Header />}
      {showHeader && <Sidebar />}
      {showHeader && <Pages />}
      {showHeader && <ScrollToTop />}
      
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/register' element={<Register/>} />
        {/* <Route path='/login' element={<Register/>} /> */}
        <Route path='products' element={<Products/>} />
        <Route path='/view' element={<Masterpage/>} >
          <Route path='products' element={<Products/>} />
          <Route path='products/:category' element={<Products/>} />
          <Route path='product/:id' element={<Product/>} />
          <Route path='cart' element={<Cart/>} />
        </Route>
      </Routes>
      {/* <Index /> */}
      
      {showHeader && <Footer />}
      {/* <Footer /> */}
    </>
  )
}

export default App
