import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate()
    const handleBack = () => {
       navigate(-1)
    }

    return (
        <div>
            <div className="grid h-screen px-4 bg-white place-content-center dark:bg-gray-900">
                <div className="text-center">
                    <h1 className="font-black text-gray-200 text-9xl dark:text-gray-700">404</h1>

                    <p
                        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                    >
                        Oops!
                    </p>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        We cannot find that page.
                    </p>

                    <button onClick={handleBack} className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;