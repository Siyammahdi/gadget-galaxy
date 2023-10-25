import { Link } from "react-router-dom";

const MyCart = () => {
    return (
        <div className="my-36 flex justify-center">
            <h2>This feature is <span className="text-blue text-4xl">Coming Soon</span></h2>
            <Link to="/">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default MyCart;