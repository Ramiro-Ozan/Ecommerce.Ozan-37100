import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// Getting the products from my Firebase
const GetProductsFirebase = () => {
  const [productos, setProductos] = useState([]) /*Hook state for the products*/
  const [loading, setLoading] = useState(true) /*Hook state for the loading spinner*/

  const {detalledCategory} = useParams() /*Creating a param of the pageLink*/

  /*connecting with firebase, where i can get the ALL the products, or separated by category*/
  const db = getFirestore() 
  const queryColection = collection( db , 'Productos')
  const queryColectionfiltred = detalledCategory ? query(queryColection, where( 'category' , '==' , detalledCategory )) : queryColection
  
  getDocs(queryColectionfiltred)
  .then(answer => setProductos(answer.docs.map( product => ({ id: product.id , ...product.data() }) ) ) )
  .catch(err => console.log(err) )
  .finally(()=> setLoading(false) )
}

export default GetProductsFirebase