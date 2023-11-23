
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { brand_name, image_url } = brand;

    return (
        <div>
            <div className="card card-compact bg-white dark:bg-gray-800 shadow-xl ">
                <figure><img className='w-2/3 rounded-full p-5 my-5 bg-white' src={image_url} alt="Shoes" /></figure>
                
                <Link to={`/products/${brand_name}`}>
                    <div className="card-body border-t-2 border-gray-200 dark:border-gray-600 hover:bg-slate-100 rounded-b-2xl">
                        <h2 className="card-title text-3xl">{brand_name}</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object
};

export default BrandCard;