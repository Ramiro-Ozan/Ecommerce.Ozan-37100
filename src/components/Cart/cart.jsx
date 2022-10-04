import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../Context/cartContext'
import FinishingBuy from './finishingBuy'
import Card from 'react-bootstrap/Card';
import './cartStyle.css'

/*Here is all the information for the cart functionality*/
const Cart = () => {
  const { cartList , deleteCart, deleteItem, totalPrice} = useCartContext()  /*Global functions*/
  const [orderId, setOrderId] = useState('') /*State hook saving the orders*/

  /*State for the user's information*/
  const [formData, setFormData] = useState({
    name:'',
    phone:'',
    email:'',
    emailRepeated:''
  })

  // Setting the form values.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Finishing with the buy
  const saveOrder  = async (e) => {
    e.preventDefault()

    if (formData.name === "" || formData.phone==="" || formData.email==="" || formData.emailRepeated==="" ) {
      alert("Fill all the camps before finishing")
    } else if (formData.email !== formData.emailRepeated) {
      alert("The mails are no the same")
    } else {
      const order = {}
      order.buyer = formData
      
      order.items = cartList.map(prod => {
        return {
          product: prod.name,
          id: prod.id,
          price: prod.price,
          quantity: prod.quantity
        }
      })

      order.total = totalPrice()
  
      const db = getFirestore() 
      const queryOrders = collection( db , 'Orders' )
      addDoc( queryOrders, order )
      .then(resp => setOrderId(resp.id))
      .finally( () => { deleteCart() ;setFormData({ name:'', phone:'', email:'', emailRepeated:'' }) })
    }
  }

  return (
    <>
      {
        (cartList.length > 0) ?
          <>
            <Card className="text-center cart">
              <Card.Header>Cart</Card.Header>
              <Card.Body>
                    {cartList.map(item => (
                      <ul key={item.id} className='list'>
                        <Card className="itemsCard">
                            <img className="imgDetail" src={item.pic} alt="imgPicture" />
                            {item.name} - Quantity requested: {item.quantity} - Item Price: {item.price} USD - <button className='btn btn-danger' onClick={()=> deleteItem(item.id)}> X </button>
                        </Card>
                      </ul>
                    ))}
                <div>
                  <h4>Total Price: { totalPrice() } USD</h4>
                  <button className="btn btn-outline-primary" onClick={deleteCart} > Delete all the Porducts </button>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">Ecommerce OZAN</Card.Footer>
            </Card>
            <Card className='form'>
              <form onSubmit={saveOrder} className="p-2 border border-2 border warning rounded" > 

                <label className="ml-0 alert alert-warning">Complete with your information for finishing buy</label>

                <div className="form-group">
                  <label htmlFor="name">Full Name:</label>
                  <input type="text" className="form-control" name="name" placeholder="Enter your name" onChange={handleChange} value={formData.name} />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Phone:</label>
                  <input type="number" className="form-control" name="phone" placeholder="Enter your phone" onChange={handleChange} value={formData.phone} />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Email:</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter your email" onChange={handleChange} value={formData.email} />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Repeat Email:</label>
                  <input type="email" className="form-control" name="emailRepeated" placeholder="Re-enter your email" onChange={handleChange} value={formData.emailRepeated} />
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>

              </form>
            </Card>
          </>
        :
        <FinishingBuy data={orderId} />
      }
    </>
  )
}

export default Cart