import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import forest from '../assets/forest.jpg';
import water from '../assets/water.jpg';
import soil from '../assets/soil.jpg';
import ewaste from '../assets/e-waste.png';
import animal from '../assets/animal.jpg';
import suggestion from '../assets/suggest.png';

function Programs() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const handleClick = (data: { type: string; desc: string; img: string; alt: string; }) => {
    navigate('/selected', { state: { imageData: data } });
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [modal]);


  const prog = [
    {
      type: "Forest",
      desc: "Restore forests. Plant trees, combat deforestation, and mitigate climate change. Join us in replenishing vital ecosystems and preserving biodiversity.",
      img: forest,
      alt: "Forest Image",
      text: "Forestation 1 Tree 1 Carbon Credit"
    },
    {
      type: "Water",
      desc: "Enroll to conserve water, protect ecosystems. Make a difference, preserve habitats, and safeguard freshwater resources. Join us now!",
      img: water,
      alt: "Water Image",
      text: "Clean Water 1 Well 1000 Liters"
    },
    {
      type: "Soil",
      desc: "Join to protect soil health. Contribute to sustainable agriculture, prevent erosion, and promote soil conservation. Take action today!",
      img: soil,
      alt: "Soil Image",
      text: "Soil Restoration 1 Acre 1000 Nutrients"
    },
    {
      type: "E-Waste",
      desc: "Join to recycle e-waste. Safely dispose of electronics, reduce pollution, and promote a cleaner environment. Make a difference now!",
      img: ewaste,
      alt: "E-Waste Image",
      text: "E- Waste Recycling 1 Device 1 Credit"
    },
    {
      type: "Animal",
      desc: "Help protect animals. Support conservation efforts, prevent habitat loss, and ensure the well-being of wildlife. Join us in safeguarding biodiversity",
      img: animal,
      alt: "Animal Image",
      text: "Wildlife Protection 1 Habitat 10 Animals"
    },
  ];

  return (
    <>
      {modal && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" onClick={() => setModal(false)}></div>}
      <div
        id="crud-modal"
        aria-hidden="true"
        className={`fixed top-0 left-0 flex justify-center items-center w-full h-full z-50 ${modal ? '' : 'hidden'}`}
      >
        <div className="relative w-full max-w-md bg-transparent radius">
          <div className="relative bg-transparent rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Share Your Thoughts
              </h3>
              <button
                type="button"
                onClick={() => setModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2"
                    placeholder="Your Email Here..."
                  />
                  <label
                    htmlFor="topic"
                    className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Topic Name
                  </label>
                  <input
                    type="text"
                    name="topic"
                    id="topic"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Topic Name Here..."
                  />
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mt-2 text-gray-900 dark:text-white"
                  >
                    Share Your Idea
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write your thoughts here..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Share Idea
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <section className="pt-16 bg-blueGray-50">
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
                    John Desouza
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Select Your Interested Area</h1>
              <div className="h-1 w-20 bg-black rounded" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {prog.map((data, index) => (
              <div
                key={index}
                className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer hover:scale-105"
                onClick={() => handleClick(data)}
              >
                <div className="p-6 rounded-lg" data-aos="fade-left">
                  <img
                    className="h-40 rounded w-full object-cover transition-all duration-300 hover:scale-110 object-center mb-6"
                    src={data.img}
                    alt={data.alt}
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{data.type}</h2>
                  <p className="leading-relaxed text-base">{data.desc}</p>
                </div>
              </div>

            ))}
            <img
              data-aos="fade-left"
              className="h-20 w-20 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-20 lg:w-20 transition-all duration-300 hover:scale-110 cursor-pointer border-4 border-white  "
              src={suggestion}
              alt="Suggestion Image"
              title="If you have any suggestion share with us"
              onClick={() => setModal(true)}
            />
          </div>
        </div>
        {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My Projects   </h1> */}
      </section>
    </>
  );
}

export default Programs;
