import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/normalize.css';
import './assets/css/vendor.css';
import Header from './components/includes/Header';
import Pages from './components/includes/Pages';
import Sidebar from './components/includes/Sidebar';
// import Symbol from './components/includes/Symbol';

function App() {

  return (
    <>
      {/* <Symbol /> */}
      <Pages />
      <Sidebar />
      <Header />
    </>
  )
}

export default App
