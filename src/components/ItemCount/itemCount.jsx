import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";

/*Here is the functionability of my Item Count*/
const ItemCount = ({initial = 1, stock =  5, prod}) => {

  const { addToCart } = useCartContext() /*Global functions*/
  const [ count , setCount ] = useState(1); /*Hook state saving the solicited quantity of the prod.*/ 
  const [ inputType , setInputType ] = useState('button') /*Creating the paramenters por the interchangeability*/
  
  //Saving in the count hook state the data of the quantity required by adding
  const handleClickPlus = () => {
    if ( count < stock ){
      setCount(count + 1);
    }
  };

  //Sacing in the count hook state the dataof the quantity required by subtracting
  const handleClickMinor = () => {
    if ( count > initial ){
      setCount(count - 1);
    }
  };
  
  /*The DOM of the buttoncount*/
  const ButtonCount= ( { handleInter } )=> {
    return (
          <div className="card w-75 d-grid col-6 mx-auto">
            <button onClick={handleClickMinor} className="btn btn-secondary ">-</button>
            <h5>Quantity: {count}</h5>
            <button onClick={handleClickPlus} className="btn btn-secondary">+</button>
            <br />
            <button className="btn btn-outline-success" onClick={handleInter} >
                Add to cart
            </button>
          </div>
    )
}


const handleInter = () => { /*shoots the interchangeability, changing the state of the hook*/
  addToCart( { ...prod , quantity: count } )
  setInputType('input')
}

/*what we see on page*/
const InputCount= ()=> {
    return (
      <div className="">
          <Link to='/cart' >
              <button className="btn btn-primary w-75" >Go to cart and finish buying</button>
          </Link>
          <br />
          <br />
          <Link to='/' >
          <button className="btn btn-outline-primary w-75" >Keep buying</button>
          </Link>
      </div>
    )
  }
    return (
        <>
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
        </>
  )
}

export default ItemCount