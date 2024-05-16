// import carbon_credits from '../assets/carbon_credit.png';
import forest from '../assets/forest.jpg';
import water from '../assets/water.jpg';
import soil from '../assets/soil.jpg';
import ewaste from '../assets/e-waste.png';
import animal from '../assets/animal.jpg';
import suggestion from '../assets/suggest.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Programs() {
  const [modal,setModal] = useState(false)
  const prog = [
    {
      type: "Forest",
      desc: "Restore forests. Plant trees, combat deforestation, and mitigate climate change. Join us in replenishing vital ecosystems and preserving biodiversity.",
      img: forest,
      alt: "Forest Image"
    },
    {
      type: "Water",
      desc: "Enroll to conserve water, protect ecosystems. Make a difference, preserve habitats, and safeguard freshwater resources. Join us now!",
      img: water,
      alt: "Water Image"
    },
    {
      type: "Soil",
      desc: "Join to protect soil health. Contribute to sustainable agriculture, prevent erosion, and promote soil conservation. Take action today!",
      img: soil,
      alt: "Soil Image"
    },
    {
      type: "E-Waste",
      desc: "Join to recycle e-waste. Safely dispose of electronics, reduce pollution, and promote a cleaner environment. Make a difference now!",
      img: ewaste,
      alt: "E-Waste Image"
    },
    {
      type: "Animal",
      desc: "Help protect animals. Support conservation efforts, prevent habitat loss, and ensure the well-being of wildlife. Join us in safeguarding biodiversity",
      img: animal,
      alt: "Animal Image"
    },
  ];

  // const steps = [
  //   {
  //     num: "1",
  //     heading: "Register Your Account",
  //     desc: "Register your account to our portal, once you create your account you will get -1000 carbon credit points. "
  //   },
  //   {
  //     num: "2",
  //     heading: "Navigate to Program Section",
  //     desc: "In the program section you'll be able to see the different area's for which you can enroll e.g. forest, water, soil etc..."
  //   },
  //   {
  //     num: "3",
  //     heading: "Navigate to Program Section",
  //     desc: "In the program section you'll be able to see the different area's for which you can enroll e.g. forest, water, soil etc..."
  //   },
    
  
  // ];
  
  return (
    <>

      <div
        id="crud-modal"
        // tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 ${modal ? '' : 'hidden'}`}
      >
        <div className="relative w-full max-w-md bg-transparent radius">
          {/* Modal content */}
          <div className="relative bg-transparent  rounded-lg shadow ">
            {/* Modal header */}
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
                    htmlFor="name"
                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2"
                    placeholder="Your Name Here..."
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
                    placeholder="Your Name Here..."
                  />

                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mt-2 text-gray-900 dark:text-white"
                  >
                    Share Your Idea
                  </label>
                  <textarea id="message" rows={4} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600  focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write your thoughts here..." defaultValue={""} />


                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >

                Share Idea
              </button>
            </form>
            <form className="p-4 md:p-5">
              {/* Form inputs */}
            </form>
          </div>
        </div>
      </div>


  `   {/* <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={carbon_credits} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is Carbon Credits?How you can earn this

            </h1>
            <p className="mb-8 leading-relaxed">Embark on a journey towards a greener future by joining our carbon compensation program! Take proactive steps to offset your carbon footprint and contribute to the fight against climate change. With our program, you can support a variety of sustainable projects, from reforestation efforts and renewable energy initiatives to methane capture and biodiversity conservation. By participating, you're not just reducing your environmental impact – you're investing in a more sustainable world for future generations. Join us in making a meaningful difference today!





            </p>

          </div>
        </div>
      </section> ` */}

 

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Select Your Interested Area</h1>
              <div className="h-1 w-20 bg-black rounded" />
            </div>
            {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            {prog.map((data, index) =>

              <Link to="/selected" className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer hover:scale-105">
                <div className="p-6 rounded-lg" key={index}>
                  <img className="h-40 rounded w-full object-cover transition-all duration-300 hover:scale-110 object-center mb-6" src={data.img} alt={data.alt} />
                  {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{data.type}</h3> */}
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{data.type}</h2>
                  <p className="leading-relaxed text-base">{data.desc}</p>
                </div>
                
              </Link>

            )}

            <img

              className="h-20 w-20 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-20 lg:w-20 transition-all duration-300 hover:scale-110 cursor-pointer border-4 border-white"
              src={suggestion}
              alt="Forest Image"
              title="If you have any suggestion share with us"
              onClick={()=> setModal(true)}
 />
          
          </div>
        </div>
      </section>

    </>
  );
}

export default Programs;
