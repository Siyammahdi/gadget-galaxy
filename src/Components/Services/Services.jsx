import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServiceData(data)
            })
    }, [])

    return (
        <div className="mx-28">
            <h2 className="text-5xl font bold text-blue-700 py-5"><span className="text-white font-semibold">Our</span> Services</h2>
            <hr />
            <div className="grid grid-cols-3 gap-16 py-28">
                {
                    serviceData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;