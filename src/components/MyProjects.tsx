import forest from '../assets/forest.jpg';
import ewaste from '../assets/e-waste.png';
import { useState } from "react";
import { Link } from "react-router-dom";

function MyProjects() {
    const [searchTerm, setSearchTerm] = useState("");

    const tableData = [
        {
            Area: "Forest",
            img: forest,
            project: "100 Trees",
            sp: "KD Foundation",
            Initiated: "12/2/2023",
            status: "Approved",
            Remarks: "Nothing",
            CarbonCredits: 200
        },
        {
            Area: "EWaste",
            img: ewaste,
            project: "Recycle Gadget's",
            sp: "ZED Foundation",
            Initiated: "10/3/2024",
            status: "Approved",
            Remarks: "Nothing",
            CarbonCredits: 500
        },
    ];

    const filteredData = tableData.filter(data =>
        data.Area.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
          {/* <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My Project </h1>
              <div className="h-1 w-20 bg-black rounded" />
          </div> */}
          <section className="bg-gray-50 p-3 sm:p-5 antialiased">
              <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
                  <div className="bg-white relative sm:rounded-lg overflow-hidden">

                      <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
                          <div className="w-full md:w-1/2">
                              <form className="flex items-center">
                                  <label htmlFor="simple-search" className="sr-only">Search</label>
                                  <div className="relative w-full">
                                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                          </svg>
                                      </div>
                                      <input
                                          type="text"
                                          id="simple-search"
                                          placeholder="Search for project"
                                          required
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
                                      />
                                  </div>
                              </form>
                          </div>
                          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                              <Link to="/projects" className="flex items-center justify-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 bg-blue-600 focus:outline-none dark:focus:ring-primary-800">
                                  <svg className="h-3.5 w-3.5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                      <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                  </svg>
                                  Enroll For Project
                              </Link>
                          </div>
                      </div>

                      <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left text-black">
                              <thead className="text-xs text-black uppercase bg-gray-100">
                                  <tr>
                                      <th scope="col" className="p-4">PID</th>
                                      <th scope="col" className="p-4">Area</th>
                                      <th scope="col" className="p-4">Project</th>
                                      <th scope="col" className="p-4">SP</th>
                                      <th scope="col" className="p-4">Initiated</th>
                                      <th scope="col" className="p-4">Status</th>
                                      <th scope="col" className="p-4">Remarks</th>
                                      <th scope="col" className="p-4">Carbon Credits</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {filteredData.map((data, index) => (
                                      <tr key={index} className="border-b dark:border-gray-600 hover:bg-gray-100">
                                          <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                              {index + 1}
                                          </th>
                                          <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                              <div className="flex items-center mr-3">
                                                  <img src={data.img} className="h-5 w-5 rounded-full mr-3" alt={data.Area} />
                                                  {data.Area}
                                              </div>
                                          </th>
                                          <td className="px-4 py-3">
                                              <span className="text-xs font-bold px-2 py-0.5 rounded text-black">{data.project}</span>
                                          </td>
                                          <td className="px-4 py-3">
                                              <span className="text-xs font-bold px-2 py-0.5 rounded text-black">{data.sp}</span>
                                          </td>
                                          <td className="px-4 py-3">
                                              <span className="text-xs font-bold px-2 py-0.5 rounded text-black">{data.Initiated}</span>
                                          </td>
                                          <td className="px-4 py-3 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                                              <div className="flex items-center">
                                                  <div className="h-4 w-4 rounded-full inline-block mr-2 bg-green-700" />
                                                  {data.status}
                                              </div>
                                          </td>
                                          <td className="text-xs font-bold px-2 py-0.5 rounded text-black">{data.Remarks}</td>
                                          <td className="text-xs font-bold px-2 py-0.5 rounded text-black">{data.CarbonCredits}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>

                  </div>
              </div>
          </section>
    
    </>
  )
}

export default MyProjects
