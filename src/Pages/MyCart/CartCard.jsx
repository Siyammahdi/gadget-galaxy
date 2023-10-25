
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CartCard = ({ card }) => {

    const { _id, name, photoURL, description } = card;
    const short_des = description.slice(0, 50)

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-60 w-full' src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        
                    </div>
                    <p>{short_des}.... <Link to={`/productDetails/${_id}`}><button className="btn btn-link ">Details</button></Link> </p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-blue-500 hover:bg-blue-700 text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    card: PropTypes.object,
};

export default CartCard;