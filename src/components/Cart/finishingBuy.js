import React from 'react'
import { Link } from 'react-router-dom'

/*interchangeability beetwen the show of the orderId, or the "no items in cart"*/
const FinishingBuy = ( orderId ) => {
  return (
    <div className='text-center m-5'>
      { orderId.data ? 
        <>
          <br />
          <br />
          <h1> Thanks for buying </h1>
          <br />
          <br />
          <h2>The id of your buy is: {orderId.data}</h2> 
        </>
        :
        <div>
          <h1>There are no items in your cart</h1>
          <br />
          <Link to='/' >
              <button className="btn btn-outline-primary">Go home and keep buying</button>
          </Link>
        </div>
        }
    </div>
  )
}

export default FinishingBuy