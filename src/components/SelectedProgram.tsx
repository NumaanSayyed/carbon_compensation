import { Link } from 'react-router-dom';
import forest from '../assets/forest.jpg';
function SelectedProgram() {
  const NGO = [
    {
      name: "ZED FOUNDATION"
    },
    {
      name: "KD FOUNDATION"
    },
    {
      name: "NARMAL ORGANIZATION"
    }

  ];




  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Forestation: 1 Tree 1 Carbon Credit</h1>

            <img className="h-32 w-32 rounded-full border-4 border-white  mx-36 my-20"
              src={forest} alt="Forest Image" />

          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {NGO.map((data) =>
              <div className="p-2 sm:w-1/2 w-full" >
                <Link to="/login">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center cursor-pointer">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">{data.name}</span>
                  </div>
             
                </Link>
              </div>
            )}

          </div>

        </div>
      </section>

    </>
  );
}

export default SelectedProgram;
