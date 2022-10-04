import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/itemCount';
import './itemDetailStyle.css'

/*Showing the selected Item Detail on page.*/
const ItemDetail = ({prod}) => { 

  return (
    <Card className="box">
      <Card.Header>
        <img className="imgDetail" src={prod.pic} alt="imgPicture" />
      </Card.Header>
      <Card.Body className='body'>
        <Card.Title>{prod.name}</Card.Title>
        <div className='information'>
          <div className='containers'>
            <div className='texts'>
              <p>{prod.details}</p> 
            </div>
          </div>
          <div className='containers'>
            <div className='texts'>
              <h4>Price: </h4> 
              <p>{prod.price} USD</p>
            </div>
          </div>
          <div className='containers'>
            <div className='texts'>
              <ItemCount initial={1} stock={5} prod={prod} />
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Ecommerce OZAN</Card.Footer>
    </Card>
  )
}

export default ItemDetail