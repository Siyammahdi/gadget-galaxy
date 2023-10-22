
import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {

    const {service_name, service_details, image_url} = service;

    return (
        <div>
            <img className='w-16 m-auto' src={image_url} alt="" />
            <div className='text-center text-2xl py-5 font-semibold'>{service_name}</div>
            <div className='text-center'>{service_details}</div>
        </div>
    );
};

ServiceCard.propTypes = {
    service:PropTypes.object
};

export default ServiceCard;