import Carbon from '../assets/carbon_compensation.png'
import Carbon2 from '../assets/carbon1.png'

function ShowCase() {
  return (
  <>
          <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What Carbon Compensation Program is?
      </h1>
                      <p className="mb-8 leading-relaxed">A carbon compensation program enables individuals and organizations to offset their carbon emissions by investing in projects that reduce greenhouse gas emissions or remove carbon dioxide from the atmosphere. Participants calculate their carbon footprint, then purchase carbon offsets equivalent to their emissions, supporting initiatives such as renewable energy projects, reforestation efforts, or methane capture programs. By investing in these projects, participants mitigate their environmental impact, promote sustainability, and work towards achieving carbon neutrality, where their total emissions are balanced out by the offsets purchased. Overall, carbon compensation programs offer a tangible way to address climate change and contribute to a greener, more sustainable future.


</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img className="object-cover object-center rounded" alt="hero" src={Carbon2} />
    </div>
  </div>
          </section>

          <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img className="object-cover object-center rounded" alt="hero" src={Carbon} />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Green Solutions: Exploring Carbon Offset Initiatives

                      </h1>
                      <p className="mb-8 leading-relaxed">Embark on a journey towards a greener future by joining our carbon compensation program! Take proactive steps to offset your carbon footprint and contribute to the fight against climate change. With our program, you can support a variety of sustainable projects, from reforestation efforts and renewable energy initiatives to methane capture and biodiversity conservation. By participating, you're not just reducing your environmental impact – you're investing in a more sustainable world for future generations. Join us in making a meaningful difference today!

                          <div>

                              <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Renewable Energy</div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }} />
                              </div>
                              <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">Carbon Emissions</div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500" style={{ width: '45%' }} />
                              </div>
                              <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Sustainable Practices</div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: '55%' }} />
                              </div>
                              <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Environmental Impact</div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                  <div className="bg-yellow-600 h-2.5 rounded-full dark:bg-yellow-500" style={{ width: '45%' }} />
                              </div>

                          </div>




                      </p>

                  </div>
              </div>
          </section>

  </>
  )
}

export default ShowCase
