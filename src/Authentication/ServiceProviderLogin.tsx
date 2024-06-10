import { Link } from "react-router-dom";

function ServiceProviderLogin() {
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg ">
                <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-gray-900">
                    Create An Account 
                </h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="orgname" className="mb-3 block text-base font-medium text-[#07074D]">
                            Organization Name
                        </label>
                        <input
                            type="text"
                            name="orgname"
                            id="orgname"
                            placeholder="Organization Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="orgtype" className="mb-3 block text-base font-medium text-[#07074D]">
                            Organization Type
                        </label>
                        <input
                            type="text"
                            name="orgtype"
                            id="orgtype"
                            placeholder="Organization Type(NGO, Company etc..)"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="cpassword" className="mb-3 block text-base font-medium text-[#07074D]">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="cpassword"
                            id="cpassword"
                            placeholder="Confirm Password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="address" className="mb-3 block text-base font-medium text-[#07074D]">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                        ></textarea>
                    </div>

                    <Link to="/serviceprovider" >
                        <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Register An Account
                        </button>
                    </Link>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
Sign up        
                </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default ServiceProviderLogin;
