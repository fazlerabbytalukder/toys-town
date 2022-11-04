import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Contacts from './pages/Contact/Contacts';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
