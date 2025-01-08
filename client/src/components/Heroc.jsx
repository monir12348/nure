import Title from "./Title"



const Heroc = () => {
  return (
    <div className="flex flex-col  sm:flex-row mt-6 gap-10 ">
      <div className="w-full sm:w-1/2 flex flex-col  justify-center ">

        <div className="flex flex-col   ">


          <div className="text-2xl  lg:text-4xl text-center sm:text-start">
          <Title Heading='Discover Our Exclusive Range of Pure and Natural Products' />
          </div>
          
          
          
        </div>
      </div>
      <img src="/images/heroc.png" alt="" className="w-full sm:w-1/2 " />
    </div>
  )
}

export default Heroc
