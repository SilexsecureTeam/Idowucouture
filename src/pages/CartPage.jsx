import React from 'react'
import Notification from '../components/Notification'
import Header from '../components/Header'
import Cart from '../components/Cart'
import CartFooter from '../components/CartFooter'

const CartPage = () => {
  return (
    <div>
      <Notification />
      <Header />
      <Cart />
      <CartFooter />
    </div>
  )
}

export default CartPage
