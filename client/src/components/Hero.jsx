import { Link } from "react-router-dom"
import Title from "./Title"



const Hero = () => {
  return (
    <div className="flex flex-col  sm:flex-row mt-6 gap-4 ">
      <div className="w-full sm:w-1/2 flex flex-col  justify-center ">
        <div className="flex flex-col  gap-6 ">
          <div className="text-2xl  lg:text-4xl text-center sm:text-start">
          <Title Heading='Pure Milk, Ghee, Honey, and Oil - Delivered to Your Doorstep with Just One Click' />
          </div>
          
          
          <div className="flex flex-col  sm:flex-row gap-4 w-full items-center sm:items-start">
    <Link to="/orders"><button className="text-white bg-green-700 sm:px-6 rounded py-3 text-[18px] font-medium cursor-pointer px-28 ">Order Now</button></Link>

     <Link to="/categories"><button className="text-green-700 border border-green-700 sm:px-6 rounded py-3 text-[18px] font-medium cursor-pointer px-28">Explore More</button></Link>
          </div>
        </div>
      </div>
      <img src="/images/hero.png" alt="" className="w-full sm:w-1/2 " />
    </div>
  )
}

export default Hero
