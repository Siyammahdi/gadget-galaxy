import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Product from "./ProductCard";


const Products = () => {

    const productData = useLoaderData();

    return (
        <div className="">
            <Slider></Slider>
            <div className="grid gap-10 mx-4 lg:mx-28 py-20 lg:py-36">
                {
                    productData.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;