import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Contacts from './components/Contact/Contacts';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {
  return (
    <BrowserRouter>
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
