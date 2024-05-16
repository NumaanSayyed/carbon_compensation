import carbon from '../assets/carbon_compensation.png'
function Features() {
const users =[
    {
        stud_name:"numan sd",
        feedback:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard"
    },
    {
        stud_name:"numan sd",
        feedback:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard"
    },
    {
        stud_name:"numan sd",
        feedback:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard"
    },
]

  return (
   <>
        <section className="text-text body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-text mb-4">What Our Enrolled Participants Says </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Here are some testimonials from our students who enrolled for this program and now play's very crucial for this project.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-black inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
       {users.map((data, index)=>
         <div key={index} className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <img src={carbon} alt="" />
        </div>
        
            <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{data.stud_name}</h2>
                <p className="leading-relaxed text-base">{data.feedback}</p>

            </div>
        
      </div>
                      )}
      
    </div>
   
  </div>
</section>

   </>
  )
}

export default Features
