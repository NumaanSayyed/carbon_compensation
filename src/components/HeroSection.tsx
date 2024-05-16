import { Link } from 'react-router-dom';
import homephoto from '../assets/HomePhoto.png';
function HeroSection() {
  return (
    <>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 mt-1 text-2xl font-bold tracking-tight leading-none md:text-5xl xl:text-4xl text-text">Plants make a positive impact on your enviornment</h1>
            <p className="max-w-2xl mb-6 font-light text-text lg:mb-8 md:text-lg lg:text-xl ">Provide your house & office space with the right plants and let our plant care team keep them flourishing.</p>

            <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-3xl bg-gradient-to-r  from-green-300 to-green-500 hover:scale-105   ">
              Enroll Me
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <img src={homephoto} alt="mockup" />
          </div>
        </div>
      </section>

    </>
  );
}

export default HeroSection;
