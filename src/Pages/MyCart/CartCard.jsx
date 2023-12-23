import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const CartCard = ({ card, handleDelete }) => {

    const { _id, name, photoURL, description } = card;
    const short_des = description.slice(0, 50)

    const handleBuy = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Order Placed',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }


    return (
        <div>
            <div className="card card-compact bg-base-100 bg-opacity-50 shadow-xl">
                <figure><img className='h-60 w-full' src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title text-white">{name}</h2>
                    </div>
                    <p>{short_des}.... <Link to={`/productDetails/${_id}`}><button className="btn btn-link text-blue-500">Details</button></Link> </p>
                    <div className="card-actions justify-end">
                        <button type='button' onClick={() => handleDelete(_id)} className='btn text-2xl bg-dlt-btn text-white border-none hover:bg-slate-400'><MdDelete></MdDelete></button>
                        <button onClick={handleBuy} className='btn btn-primary'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    card: PropTypes.object,
    handleDelete: PropTypes.func
};

export default CartCard;