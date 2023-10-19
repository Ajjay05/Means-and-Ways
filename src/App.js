import './App.css'
import Cart from './Cart/Cart'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CheckoutCart from './Cart/CheckoutCart'


function App() {

  return (<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Cart/>}></Route>
  <Route path='/Checkout' element={<CheckoutCart/>}></Route>
</Routes>
</BrowserRouter>
  </>
    
  )
}

export default App
