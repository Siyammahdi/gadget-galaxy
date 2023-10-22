
import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {

    const { brand_name, image_url } = brand;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img className='w-2/3 p-5 bg-white' src={image_url} alt="Shoes" /></figure>
                <hr />
                <div className="card-body hover:bg-slate-100 rounded-b-2xl">
                    <h2 className="card-title text-3xl">{brand_name}</h2>
                </div>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object
};

export default BrandCard;