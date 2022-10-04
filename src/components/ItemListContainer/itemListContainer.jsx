import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Helpers/loading'
import ItemList from './itemList'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]) //*State hook for saving the information*/
  const [loading, setLoading] = useState(true) /*State hook for the spinner*/

  const {detalledCategory} = useParams() /*Hook for the parameter of category*/
  
  /*Bringing either ALL the productos of my firebase, or only the detalled ones*/
  useEffect(()=>{ 
    const db = getFirestore()
    const queryColection = collection( db , 'Productos')
    const queryColectionfiltred = detalledCategory ? query(queryColection, where( 'category' , '==' , detalledCategory )) : queryColection
  
    getDocs(queryColectionfiltred)
    .then(answer => setProductos(answer.docs.map( product => ({ id: product.id , ...product.data() }) ) ) )
    .catch(err => console.log(err) )
    .finally(()=> setLoading(false) )
  },[detalledCategory])

  /*Showing the loading spinner until we get the firebase DATA, then we show the products using interchangeability*/
  return (
    <div>
      {
        loading ? 
          <Loading />
          :
          <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer