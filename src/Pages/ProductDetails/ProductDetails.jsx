import { BsCurrencyDollar } from 'react-icons/Bs';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


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

    return (
        <div>
            <div className="hero min-h-screen py-28">
                <div className="hero-content flex-col ">
                    <div className='bg-black bg-opacity-25 flex justify-between mx-24 rounded-2xl'>
                        <div className='p-10'>
                            <h1 className="text-4xl font-bold ">{name}</h1>
                            <h1 className="text-2xl font-bold px-2">{brand}</h1>
                            <h2 className="text-4xl flex items-center"><BsCurrencyDollar></BsCurrencyDollar> {price}</h2>
                            <h2 className='text-amber-500 px-2'>Rating: {rating} out of 5</h2>
                            <p className="py-6">{description}</p>
                            <button className="btn bg-blue-500 hover:bg-blue-700 border-none text-white">Add to Cart</button>
                        </div>
                        <img className="w-2/4 h-auto rounded-r-2xl" src={photoURL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;