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
      <div className="absolute top-26 left-0 w-full">
      <Cart />
      <CartFooter />
      </div>
    </div>
  )
}

export default CartPage
