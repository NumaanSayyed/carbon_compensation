import { Link } from "react-router-dom";

function ServiceProviderLogin() {
  return (
    <>
          <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px] bg-white">
                  <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-gray-900">Create An Account As Service Provider </h1>
                  <form>
                      <div className="mb-5">
                          <label htmlFor="orgname" className="mb-3 block text-base font-medium text-[#07074D]">
                              Organization Name
                          </label>
                          <input type="text" name="orgname" id="orgname" placeholder="Organization Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                      </div>
                     
                      <div className="mb-5">
                          <label htmlFor="orgtype" className="mb-3 block text-base font-medium text-[#07074D]">
                              Organization Type
                          </label>
                          <input type="text" name="orgtype" id="orgtype" placeholder="Organization Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                      </div>
                      <div className="mb-5">
                          <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                              Email
                          </label>
                          <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                      </div>
                      <div className="mb-5 pt-3">
                          <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                              Password
                          </label>
                          <div className="-mx-3 flex flex-wrap">
                              <div className="w-full px-3 sm:w-1/2">
                                  <div className="mb-5">
                                      <input type="text" name="password" id="password" placeholder="Password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                                  </div>
                              </div>
                              <div className="w-full px-3 sm:w-1/2">
                                  <div className="mb-5">
                                      <input type="text" name="cpassword" id="cpassword" placeholder="Confirm Password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mb-5">
                          <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                              Contact Number
                          </label>
                          <input type="text" name="phone" id="phone" placeholder="Enter your phone number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                      </div>


                      <div className="p-2 w-full">
                          <div className="relative">
                              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Location</label>
                              <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""}  required/>
                          </div>
                      </div>
                    
                      <div>
                          <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                              Register An Account
                          </button>
                      </div>
                      <p className="mt-10 text-center text-sm text-gray-500">
                          Already have an account? <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</Link>
                      </p>
                  </form>
              </div>
          </div>
    </>
  )
}

export default ServiceProviderLogin
