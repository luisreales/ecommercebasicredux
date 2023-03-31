import './App.css'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './redux/features/cart/cartSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
