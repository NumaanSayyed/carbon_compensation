import carbon_credits from '../assets/carbon_credit.png';
import forest from '../assets/forest.jpg';
import water from '../assets/water.jpg';
import soil from '../assets/soil.jpg';
import ewaste from '../assets/e-waste.png';
import animal from '../assets/animal.jpg';
import suggestion from '../assets/suggest.png'



function Programs() {
  
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
      <section className="text-gray-600 body-font">
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
      </section>

 

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
            {prog.map((data) =>

              <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer hover:scale-105">
                <div className="p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover transition-all duration-300 hover:scale-110 object-center mb-6" src={data.img} alt={data.alt} />
                  {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{data.type}</h3> */}
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{data.type}</h2>
                  <p className="leading-relaxed text-base">{data.desc}</p>
                </div>
                
              </div>

            )}

            <img
              className="h-20 w-20 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-20 lg:w-20 transition-all duration-300 hover:scale-110 cursor-pointer border-4 border-white"
              src={suggestion}
              alt="Forest Image"
              title="If you have any suggestion share with us"
 />
           

          </div>
        </div>
      </section>

    </>
  );
}

export default Programs;
