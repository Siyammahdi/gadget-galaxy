import Swal from 'sweetalert2'

const AddProduct = () => {


    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, brand, type, price, rating, description, photoURL};
        console.log(newProduct);

        //send new data to server
        fetch("https://gadget-galaxy-server-one.vercel.app/Gadgets", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }


    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/qgLmJKp/blue-smooth-wall-textured-background.jpg')]  lg:px-28">
                <div className="hero-content flex-col lg:flex-row items-start gap-20 my-28">
                    <div className=' text-white mt-24'>
                        <h3 className='text-3xl lg:text-5xl mb-5'>Add <span className='text-blue-600 '>Products</span></h3>
                        <p className='text-sm md:text-base'>Fill up the from by providing authentic data. These will store as a product on database</p>
                    </div>
                    <div className="card flex-shrink-0 p-5 lg:w-2/3 shadow-black shadow-lg lg:shadow-2xl backdrop-blur-md">
                        <form onSubmit={handleAddProduct}>
                            <div className="lg:mx-28 font-sans font-semibold text-white py-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-5 ">
                                    <label>
                                        <h3 className="text-left my-2 text-lg">Name</h3>
                                        <input type="text" name="name" placeholder="Enter Product name" className="input w-full text-black bg-white bg-opacity-10" required />
                                    </label>
                                    <label>
                                        <h3 className="text-left my-2 text-lg">Brand</h3>
                                        <input type="text" name="brand" placeholder="Enter Brand Name" className="input w-full text-black bg-white bg-opacity-10" required />
                                    </label>
                                    <label>
                                        <h3 className="text-left my-2 text-lg">Type</h3>
                                        <input type="text" name="type" placeholder="Enter Product Type" className="input w-full text-black bg-white bg-opacity-10" required />
                                    </label>
                                    <label>
                                        <h3 className="text-left my-2 text-lg">Price</h3>
                                        <input type="text" name="price" placeholder="Enter Product Price" className="input w-full text-black bg-white bg-opacity-10" />
                                    </label>
                                    <label>
                                        <h3 className="text-left my-2 mb-2 text-lg">Photo</h3>
                                        <input type="url" name="photoURL" placeholder="Enter Photo URL" className="input w-full text-black bg-white bg-opacity-10" required />
                                    </label>
                                    <label>
                                        <h3 className="text-left my-2 text-lg">Rating</h3>
                                        <input type="text" name="rating" placeholder="Product Rating" className="input w-full text-black bg-white bg-opacity-10" />
                                    </label>
                                </div>
                                <label>
                                    <h3 className="text-left my-2 mt-7 text-lg">Description</h3>
                                    <textarea name='description' className="textarea w-full bg-white bg-opacity-10 text-black h-36" placeholder="Description"></textarea>
                                </label>
                                <input type="submit" className="btn btn-block my-5 bg-block-btn-bg text-primary-color border-2 border-primary-color font-rancho hover:bg-primary-color hover:text-block-btn-bg hover:border-block-btn-bg" value="Add Product" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;