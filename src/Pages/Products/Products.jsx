import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Product from "./ProductCard";



const Products = () => {

    const productData = useLoaderData();
    console.log(productData.length);

    if(productData.length < 1){
        return <div className="h-screen flex justify-center items-center">
            <h2 className="text-5xl text-blue-700 dark:text-blue-400">No Products Available in this brand</h2>
        </div>
    }
    else{
        return (
            <div>
                <Slider></Slider>
                <div className="grid gap-10 mx-4 lg:mx-28 py-20 lg:py-36">
                    {
                        productData.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        );
    }


};

export default Products;