<<<<<<< HEAD
=======
// import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import forest from '../assets/forest.jpg';
>>>>>>> 85d39d8aaf2344a8a7d85b1caf115f966b0ebc5d
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Program {
  prog: string;
}
interface NGO {
  name: string;
}

function SelectedProgram() {
  const location = useLocation();
  const { imageData } = location.state || {};


  const [showNGODropdown, setShowNGODropdown] = useState(false);
  const [showProgDropdown, setShowProgDropdown] = useState(false);
  const [selectedNGO, setSelectedNGO] = useState<NGO | null>(null);
  const [selectedProg, setSelectedProg] = useState<Program | null>(null);

  const NGOList: NGO[] = [
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

  const programList: Program[] = [
    {
      prog: "100 Trees"
    },
    {
      prog: "500 Trees"
    },
    {
      prog: "1000 Trees"
    }
  ];

  const handleSelectNGO = (ngo: NGO) => {
    setSelectedNGO(ngo);
    setShowNGODropdown(false);
  };

  const handleSelectProgram = (program: Program) => {
    setSelectedProg(program);
    setShowProgDropdown(false);
  };
  const renderNGOInfo = () => {
    if (selectedNGO) {
      return (
        <div>
          <section className="p-3 sm:p-5 antialiased">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
              <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-900">
                      <tr>
                        <th scope="col" className="px-4 py-4">Service Provider</th>
                        <th scope="col" className="px-4 py-3">Since</th>
                        <th scope="col" className="px-4 py-3">No Of Supported Student</th>
                        <th scope="col" className="px-4 py-3">Generated Carbon Credit</th>
                        <th scope="col" className="px-4 py-3">Provided Internship Certificate</th>
                        <th scope="col" className="px-4 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* You can populate this table with data related to the selected NGO */}
                      <tr className="border-b dark:border-gray-700">
                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{selectedNGO.name}</th>
                        <td className="px-4 py-3 text-gray-900">1988</td>
                        <td className="px-4 py-3 text-gray-900">2000</td>
                        <td className="px-4 py-3 text-gray-900 max-w-[12rem] truncate">10,000</td>
                        <td className="px-4 py-3 text-gray-900">2000</td>
                        <td className="px-4 py-3 text-gray-900 flex items-center justify-end">
                        </td>
                      </tr>
                      {/* Add more rows for additional information */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
           
            {imageData ? (
              <div>
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{imageData.text}</h1>
                <img
                  className="h-40 w-40 rounded-full object-cover transition-all duration-300 hover:scale-110 object-center mb-6"
                  src={imageData.img}
                  alt={imageData.alt}
                />
                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{imageData.type}</h2>
                <p className="leading-relaxed text-base">{imageData.desc}</p> */}
              </div>
            ) : (
              <p>No image data available</p>
            )}
            <div className="p-2 sm:w-1/2 w-full relative">
              <div className="relative">
                {/* NGO Dropdown */}
                <div className="bg-gray-100 rounded m-16 flex p-4 h-full   items-center cursor-pointer" onClick={() => setShowNGODropdown(!showNGODropdown)}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  <span className="title-font font-medium">{selectedNGO ? selectedNGO.name : "Service Provider"}</span>
                </div>

                {/* NGO Dropdown Menu */}
                {showNGODropdown && (
                  <div className="absolute top-0 mt-12 right-0 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      {NGOList.map((ngo, index) => (
                        <li key={index} className="cursor-pointer px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={() => handleSelectNGO(ngo)}>{ngo.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Program Dropdown */}
                <div className="bg-gray-100 rounded m-16 flex p-4 h-full items-center cursor-pointer" onClick={() => setShowProgDropdown(!showProgDropdown)}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="title-font font-medium">{selectedProg ? selectedProg.prog : "Select Program"}</span>
                </div>

                {/* Program Dropdown Menu */}
                {showProgDropdown && (
                  <div className="absolute top-0 mt-12 right-0 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      {programList.map((prog, index) => (
                        <li key={index} className="cursor-pointer px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={() => handleSelectProgram(prog)}>{prog.prog}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <button  type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gradient-to-r from-blue-300 to-blue-600 rounded-lg border  focus:z-10 focus:ring-4 ">Submit</button>

          </div>
          {renderNGOInfo()}

        </div>
      </section>

      
    </>
  );
}

export default SelectedProgram;
