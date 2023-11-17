import { BsCurrencyDollar } from 'react-icons/Bs';
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductDetails = () => {

    const [detail, setDetail] = useState([]);
    const detailsData = useLoaderData();
    const { id } = useParams();
    console.log(id);


    useEffect(() => {
        const findDetails = detailsData?.find(cardDetail => cardDetail._id == id)
        setDetail(findDetails)
    }, [id, detailsData])

    console.log(detail);
    const { photoURL, name, rating, price, description, brand } = detail;


    const handleAddCart = () => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(detail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added To Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }


    return (
        <div className='lg:mx-24 mb-10'> 
            <div className="hero min-h-screen pt-28">
                <div className="hero-content flex-col ">
                    <div className='bg-black bg-opacity-25 flex flex-col-reverse lg:flex-row justify-between rounded-2xl'>
                        <div className='p-10'>
                            <h1 className="text-4xl font-bold ">{name}</h1>
                            <h1 className="text-2xl font-bold px-2">{brand}</h1>
                            <h2 className="text-4xl flex items-center"><BsCurrencyDollar></BsCurrencyDollar> {price}</h2>
                            <h2 className='text-amber-500 px-2'>Rating: {rating} out of 5</h2>
                            <p className="py-6">{description}</p>
                            <button onClick={handleAddCart} className="btn bg-blue-500 hover:bg-blue-700 border-none text-white">Add to Cart</button>
                            <button onClick={handleBack} className='btn mb-5 mx-4  bg-blue-500 hover:bg-blue-700 border-none text-white'>Go Back</button>
                        </div>
                        <img className="w-full lg:w-2/4 h-auto rounded-t-2xl lg:rounded-r-2xl" src={photoURL} />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;