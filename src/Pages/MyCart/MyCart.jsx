import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { FaOpencart } from 'react-icons/Fa';


const MyCart = () => {

    const cartData = useLoaderData();

    return (
        <div className="mx-10 lg:mx-28 py-32">
            <div className="mb-16">
                <h2 className="text-3xl lg:text-5xl flex items-center mb-3 text-blue-500 gap-5"> <FaOpencart></FaOpencart> Cart</h2>
                <hr />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    cartData.map(card => <CartCard key={card._id} card={card}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;