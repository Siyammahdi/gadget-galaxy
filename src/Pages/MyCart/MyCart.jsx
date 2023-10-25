import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { FaOpencart } from 'react-icons/Fa';


const MyCart = () => {

    const cartData = useLoaderData();

    return (
        <div className="mx-28 py-32">
            <h2 className="text-5xl flex items-center mb-10 text-blue-500 gap-5"> <FaOpencart></FaOpencart> Cart</h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    cartData.map(card => <CartCard key={card._id} card={card}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;