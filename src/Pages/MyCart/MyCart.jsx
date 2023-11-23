import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { FaOpencart } from 'react-icons/Fa';
import Swal from "sweetalert2";
import { useState } from "react";


const MyCart = () => {

    const cartData = useLoaderData();

    const [items, setItems] = useState([cartData]);
    console.log(items);
    
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

                fetch(`http://localhost:5000/gadget/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Gadget has been deleted successfully.',
                                'success'
                            )

                            setItems(prevItems => prevItems.filter(item => item._id !== _id));
                        }

                    })
            }
        })
    }


    return (
        <div className="mx-10 lg:mx-28 py-32">
            <div className="mb-16">
                <h2 className="text-3xl lg:text-5xl flex items-center mb-3 text-blue-500 gap-5"> <FaOpencart></FaOpencart> Cart</h2>
                <hr />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    cartData.map(card => <CartCard key={card._id} card={card} handleDelete={handleDelete}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;