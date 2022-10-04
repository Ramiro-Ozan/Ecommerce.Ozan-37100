import { Link } from "react-router-dom"
import './itemStyle.css'

const Item = ( {prod} ) => { /*Showing on page the Items of my firebase, one by one*/
    return (
        <div className='col-md-4 p-1'>
            <div className='card w-100 mt-5'>
                <div className='card-header'>
                    {`${prod.name} - ${prod.category}`}
                </div>
                <div className="card-body">
                    <img src={prod.pic} alt="foto del producto" className="w-50 img" />
                </div>
                <div className='card-footer'>
                <Link to={`/detail/${prod.id}`}>
                    <button className='btn btn-primary'>Details</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Item