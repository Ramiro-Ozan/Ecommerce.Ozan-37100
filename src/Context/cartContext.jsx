import { createContext , useContext, useState } from 'react'

const CartContext = createContext([]) /*Creating the context objet, for the global functions*/
export const useCartContext = () => useContext (CartContext)

/*Saving all the information and funtionability of the Global Functios, so i can use them anywhere*/
const CartContextProvider = ({children}) => {
  const [ cartList , setCartList ] = useState([])/*State hook for the cart list*/

  /*For saving on my cart list state hook*/
  const addToCart = (prod) => {
    let itemInCart = cartList.findIndex( item => item.id === prod.id )
    if (itemInCart === -1) {
      setCartList([ ...cartList , prod ])
    } else {
      cartList[itemInCart].quantity += prod.quantity
      setCartList([ ...cartList ])
    }
  }

  /*calculating the total price in my cart*/
  const totalPrice = () => {
    return cartList.reduce((acumPrice, prodObj) => acumPrice = acumPrice + (prodObj.price * prodObj.quantity), 0 )
  }

  /*calculating the total items in my cart*/
  const totalItems = () => {
    return cartList.reduce( (conter, productObj) => conter += productObj.quantity , 0 )
  }

  /*Deleting the selected items*/
  const deleteItem = (id) => {
    setCartList ( cartList.filter( prod => prod.id !== id) )
  }

  /*Deleting all the items in my cart*/
  const deleteCart = () => {
    setCartList([])
  }

  /*Setting all the functions to made them global.*/
  return(
    <CartContext.Provider value={{ cartList, addToCart, deleteCart, totalPrice, totalItems, deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider