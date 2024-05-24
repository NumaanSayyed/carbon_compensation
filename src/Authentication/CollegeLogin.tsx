import { Link } from "react-router-dom";

function CollegeLogin() {
  return (
  <>
          <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px] bg-white">
                  <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-gray-900">Create An Account </h1>
                  <form>
                      <div className="mb-5">
                          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                              College Name
                          </label>
                          <input type="text" name="name" id="name" placeholder="College Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                              Principal Name
                          </label>
                          <input type="text" name="name" id="name" placeholder="Principal Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required/>
                      </div>
                      <div className="mb-5">
                          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                              Deputy Name
                          </label>
                          <input type="text" name="name" id="name" placeholder="Deputy Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required/>
                      </div>

                      <div className="mb-5">
                          <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                              Email
                          </label>
                          <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      </div>

                      <div className="mb-5">
                          <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                              Phone Number
                          </label>
                          <input type="text" name="phone" id="phone" placeholder="Enter your phone number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      </div>


                      <div className="mb-5 pt-3">
                          <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                              Password
                          </label>
                          <div className="-mx-3 flex flex-wrap">
                              <div className="w-full px-3 sm:w-1/2">
                                  <div className="mb-5">
                                      <input type="text" name="password" id="password" placeholder="Password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                  </div>
                              </div>
                              <div className="w-full px-3 sm:w-1/2">
                                  <div className="mb-5">
                                      <input type="text" name="cpassword" id="cpassword" placeholder="Confirm Password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                  </div>
                              </div>
                          </div>
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

export default CollegeLogin
