

const ContactUs = () => {
    return (
        <div>
            <div className="px-4 lg:px-28 pb-28">

                <div className="pb-28">
                    <h2 className="text-5xl font bold text-blue-700 py-5"><span className="text-white font-semibold">Contact</span> Us</h2>
                    <hr />
                </div>

                <section className="bg-white bg-opacity-20 rounded-3xl mt-5">
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            <div className="lg:col-span-2 lg:py-12">
                                <h3 className="text-3xl text-blue-700 font-semibold py-5">Contact Information</h3>
                                <p className="max-w-xl text-lg text-gray-200">
                                    At the same time, the fact that we are wholly owned and totally
                                    independent from manufacturer and other group control gives you
                                    confidence that we will only recommend what is right for you.
                                </p>

                                <div className="my-8">
                                    <a href="" className="text-2xl font-bold text-blue-700">
                                        +880 1774 010 501
                                    </a>

                                    <p className="">Email: siyammahdi1@gmail.com</p>

                                    <address className="mt-2 not-italic">
                                        282 Kevin Brook, Imogeneborough, CA 58517
                                    </address>
                                </div>

                            </div>

                            <div className="rounded-lg p-8 lg:col-span-3 lg:p-12">
                                <form action="" className="space-y-4">
                                    <div>
                                        <label className="sr-only" htmlFor="name">Name</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 bg-white bg-opacity-30 text-gray-600 p-3 text-sm"
                                            placeholder="Name"
                                            type="text"
                                            id="name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="sr-only" htmlFor="email">Email</label>
                                            <input
                                                className="w-full rounded-lg  bg-white bg-opacity-30 text-gray-600 border-gray-200 p-3 text-sm"
                                                placeholder="Email address"
                                                type="email"
                                                id="email"
                                            />
                                        </div>

                                        <div>
                                            <label className="sr-only" htmlFor="phone">Phone</label>
                                            <input
                                                className="w-full rounded-lg  bg-white bg-opacity-30 text-gray-600 border-gray-200 p-3 text-sm"
                                                placeholder="Phone Number"
                                                type="tel"
                                                id="phone"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="message">Message</label>

                                        <textarea
                                            className="w-full rounded-lg  bg-white bg-opacity-30 text-gray-600 border-gray-200 p-3 text-sm"
                                            placeholder="Message"
                                            rows="8"
                                            id="message"
                                        ></textarea>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white sm:w-auto"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;