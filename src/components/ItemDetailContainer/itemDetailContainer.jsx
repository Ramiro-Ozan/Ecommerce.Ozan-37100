import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetailContainer/itemDetail'
import Loading from '../Helpers/loading'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]) /*State hook for saving the information*/
  const [loading, setLoading] = useState(true) /*State hook for the spinner*/

  const {detalledId} = useParams() /*Hook calling a single objet with the parameter {detalledId}*/

  useEffect(()=>{ /*bringing the filtred products of the Firebase*/
    const db = getFirestore()
    const queryPorduct = doc( db , 'Productos' , detalledId )
    getDoc(queryPorduct)
    .then(answer => setProducto( { id: answer.id , ...answer.data() } ))
    .finally(()=> setLoading(false) )
  },[detalledId])

  return (
    <div>
      {
        loading ? 
          <Loading />
          :
          <ItemDetail prod={producto} /> 
      }
    </div>
  )
}

export default ItemDetailContainer