import { BsCurrencyDollar } from 'react-icons/Bs';
import { HiPencil } from 'react-icons/Hi';
import { CgDetailsMore } from 'react-icons/Cg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const { _id, photoURL, name, brand, type, price, rating } = product;

    return (
        <div>
            <div>
                <div className="hero-content flex-col lg:flex-row bg-black bg-opacity-40 rounded-2xl justify-between gap-10">
                    <div className='flex gap-20 items-center'>
                        <img src={photoURL} className="w-72 h-60 rounded-lg shadow-2xl ml-0" />
                        <div className='flex flex-col gap-2'>
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <h2 className='text-xl'>{brand}</h2>
                            <h2 className='text-lg'>{type}</h2>
                            <h2 className='text-amber-500'>{rating} out of 5</h2>

                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mr-16'>
                        <h2 className='text-3xl font-bold flex items-center'><BsCurrencyDollar></BsCurrencyDollar> {price}</h2>
                        <Link>
                            <button className="btn bg-blue-500 text-white hover:bg-blue-700"><HiPencil className='text-xl'></HiPencil> Update</button>
                        </Link>
                        <Link to={`/productDetails/${_id}`}>
                            <button className="btn bg-blue-500 text-white hover:bg-blue-700"><CgDetailsMore className='text-xl'></CgDetailsMore> Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;