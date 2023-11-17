import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/Md';

const CartCard = ({ card }) => {

    const { _id, name, photoURL, description } = card;
    const short_des = description.slice(0, 50)


    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted successfully.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    

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
                    <button onClick={() => handleDelete(_id)} className='btn text-2xl bg-dlt-btn text-white border-none hover:bg-slate-400'><MdDelete></MdDelete></button>
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