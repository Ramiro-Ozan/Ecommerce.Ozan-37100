import { useCartContext } from '../../../Context/cartContext'
import logo from '../../../Images/Cart_logo.png'
import '../navBarStyle.css'

/*Showing the cart logo, and, if there it is, the number of the products*/
const Cartwidget = () => {
    const {totalItems} = useCartContext()
    return (
        <div className='d-flex flex-row'>
            <div className='p-2'><img src={logo} alt="cart"/></div>
            <div className='p-3 cartNumber'>{ totalItems() !== 0 && totalItems() }</div>
        </div>
    )
}

export default Cartwidget