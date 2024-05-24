import { Link } from "react-router-dom";

function StudLogin() {
  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-gray-900">Create An Account </h1>
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
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

            <div className="-mx-3 flex flex-wrap items-center">
              <div className="w-full px-3 sm:w-1/2 mb-5">
                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                  DOB
                </label>
                <input type="date" name="date" id="date" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <fieldset>
                    <legend className="mb-3 block text-base font-medium text-[#07074D]">Gender</legend>
                    <div className="flex items-center">
                      <input type="radio" id="male" name="gender" value="male" className="mr-2" />
                      <label htmlFor="male" className="mr-6">Male</label>

                      <input type="radio" id="female" name="gender" value="female" className="mr-2" />
                      <label htmlFor="female" className="mr-6">Female</label>

                      <input type="radio" id="other" name="gender" value="other" className="mr-2" />
                      <label htmlFor="other">Other</label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                College (Optional)
              </label>
              <input type="text" name="name" id="name" placeholder="Your College Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
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
  );
}

export default StudLogin;
