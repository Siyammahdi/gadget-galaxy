
import { Link, useLoaderData } from "react-router-dom";


const ProductDetails = () => {


    const detailsData = useLoaderData();
   
    console.log(detailsData);


    return (
        <div className="my-36 flex justify-center">
            <h2>Details is <span className="text-blue text-4xl">Coming Soon</span></h2>
            <Link to="/">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default ProductDetails;