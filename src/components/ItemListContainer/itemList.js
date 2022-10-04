import React from 'react'
import Item from './item'

/*Mapping the products*/
const ItemList = ( {productos} ) => {
  return (
    <div className='row gx-0 m-5'>
      {
        productos?.map(prod => <Item key={ prod.id } prod={prod} />)
      }
    </div>
  )
}

export default ItemList