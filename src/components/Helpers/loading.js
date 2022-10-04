import { Spinner } from 'reactstrap'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Helpers/loading.css'

//My loading spinner using react-bootstrap
const Loading = () => {
  
  return (
    <div className="divFather">
      <div className="divChildren">
        <Spinner color="secondary" className='spinnerReactstrap' />
      </div>
    </div>
  )
}

export default Loading