
function ServiceProviderDetails() {
  return (
   <>
         <div>
  <section className="  p-3 sm:p-5 antialiased">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
      <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
           
          
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase  dark:text-gray-900">
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
              <tr className="border-b dark:border-gray-700">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">ZED FOUNDATION</th>
                <td className="px-4 py-3 text-gray-900">1988</td>
                <td className="px-4 py-3 text-gray-900">2000</td>
                <td className="px-4 py-3 text-gray-900 max-w-[12rem] truncate">10,000</td>
                <td className="px-4 py-3 text-gray-900">2000</td>
                <td className="px-4 py-3 text-gray-900 flex items-center justify-end">
                
               
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
     
      </div>
    </div>
  </section>

 
 
</div>

   </>
  )
}

export default ServiceProviderDetails
