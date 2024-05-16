import graduate from '../SVG/graduate.svg';
import college from '../SVG/college.svg';
import service from '../SVG/service.svg';
import top_individual from '../SVG/top_individual.svg';
import carbon_credits from '../SVG/carboncredits.png';
import top_college from '../SVG/top_college.svg';
function Stat() {
  const stats = [
    {
      icon: graduate,
      num: 1000,
      value: "Students Enrolled"
    },
    {
      icon: college,
      num: 200,
      value: "Colleges Enrolled"
    },
    {
      icon: service,
      num: 200,
      value: "Service Providers"
    },
    {
      icon: carbon_credits,
      num: 10000,
      value: "Credit Generated"
    },
    {
      icon: top_individual,
      num: 500,
      name:"Hamza",
      value: "Top Most Individual"
    },
    {
      icon: top_college,
      num: 200,
      name: "Rizvi College",
      value: "Top Most College"
    },

  ];

  return (
    <section className="text-gray-600 body-font  ">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-gray-900">Carbon Compensation Statistic</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Delve into the numbers behind our Carbon Compensationting efforts</p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          
          {stats.map((data, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-gray-200 px-4 py-6 rounded-lg">
                <img src={data.icon} alt="Icon" className="w-16 h-16  inline-block hover:scale-105 cursor-pointer" />
                <h2 className="title-font font-medium text-2xl text-gray-900">{data.name}</h2>
                <p className="title-font font-medium text-1xl text-gray-900">{data.value}</p>
                <p className="title-font font-medium text-2xl text-gray-900">{data.num}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stat;
