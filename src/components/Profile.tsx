import { Link } from "react-router-dom";

export default function Profile() {

  return (
    <>
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-center px-4">
                  <div className="relative hover:scale-125 cursor-pointer">
                    <img
                      data-aos="fade-down"
                      alt="Medal"
                      src="https://img.freepik.com/premium-vector/gold-medal-badge-vector-best-award_548471-256.jpg"
                      className="shadow-xl rounded-full h-32 w-32 lg:h-40 lg:w-40 -mt-16 border-none "
                    />
                    <h3 className="text-xl font-semibold leading-normal mt-2 text-center" data-aos="flip-right">
                      Gold Crusader
                    </h3>
                  </div>
                </div>
                <div className="w-full text-center mt-20 px-4">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center" data-aos="fade-up">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        1000
                      </span>
                      <span className="text-sm text-blueGray-400">Current Credit</span>
                    </div>
                    <div className="mr-4 p-3 text-center" data-aos="fade-down">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        1500
                      </span>
                      <span className="text-sm text-blueGray-400">Committed Credit </span>
                    </div>
                    <div className="p-3 text-center lg:mr-4" data-aos="fade-left">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        20
                      </span>
                      <span className="text-sm text-blueGray-400">Enrolled Projects</span>
                    </div>
                    <Link to="/profile" className="p-3 text-center lg:mr-4" data-aos="fade-left">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        13
                      </span>
                      <span className="text-sm text-blueGray-400">Completed Projects</span>
                    </Link>
                  </div>
                  <h3 className="text-xl font-semibold leading-normal  mb-2" data-aos="flip-right">
                    Jese Leos
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}
