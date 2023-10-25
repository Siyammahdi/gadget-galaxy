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
        <div className="mx-28 pt-36">
            <h2 className="text-5xl font bold text-blue-700 py-5"><span className="text-white font-semibold">Brand</span> Collections</h2>
            <hr />
            <div className="grid grid-cols-3 gap-16 py-28 ">
                {
                    brandData.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;