import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Brands = () => {

    const [brandData, setBrandData] = useState([])

    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => {
                setBrandData(data);
            })
    }, [])
    
    return (
        <div className="mx-10 md:mx-16 lg:mx-28 pt-36">
            <h2 className="text-3xl lg:text-5xl font bold text-blue-700 py-5"><span className="text-white font-semibold">Brand</span> Collections</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-28 ">
                {
                    brandData.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;