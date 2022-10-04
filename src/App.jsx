import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Cart from './components/Cart/cart';
import CartContextProvider from './Context/cartContext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Here is my app, with all the components that are used*/
function App() {
  return (

    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route index path='/' element = { <ItemListContainer /> } />
          <Route path='/category/:detalledCategory' element = { <ItemListContainer /> } />
          <Route path='/detail/:detalledId' element = { <ItemDetailContainer /> } />
          <Route path='/cart' element = { <Cart /> } />
          
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    
  );
}

export default App;