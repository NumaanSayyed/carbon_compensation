import  { useState } from 'react';
import carbon from '../assets/carbon_compensation.png';

function Features() {
  const users = [
    {
      stud_name: "numan sd",
      feedback: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard"
    },
    {
      stud_name: "numan sd",
      feedback: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard"
    },
    {
      stud_name: "numan sd",
      feedback: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard"
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <section className="text-text body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-text mb-4">What Our Enrolled Participants Say</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Here are some testimonials from our students who enrolled for this program and now play a very crucial role in this project.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-black inline-flex" />
            </div>
          </div>
          {window.innerWidth > 768 ? (
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              {users.map((data, index) => (
                <div key={index} className="p-4 md:w-1/3 text-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <img src={carbon} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{data.stud_name}</h2>
                    <p className="leading-relaxed text-base">{data.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative mx-auto max-w-2xl">
              <div className="overflow-hidden">
                <div className="flex space-x-4 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}>
                  {users.map((data, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="p-4 text-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                          <img src={carbon} alt="" />
                        </div>
                        <div className="flex-grow">
                          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{data.stud_name}</h2>
                          <p className="leading-relaxed text-base">{data.feedback}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded-full" onClick={handlePrevTestimonial}>
                Prev
              </button>
              <button className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded-full" onClick={handleNextTestimonial}>
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Features;
