import { Link } from "react-router-dom"

const Footer = () => {
    return (
     <div className="flex flex-col gap-4 text-sm text-gray-700 mb-6 mt-28" 
  >
   <img src="logo.svg" alt="" className="w-36"/>

  <div className=" w-[300px] sm:w-[600px] text-sm sm:text-lg flex flex-col gap-4 pb-4">
   <p className="leading-relaxed"> We are committed to delivering products that prioritize your well-being and enhance your everyday meals with the finest, natural ingredients. Order now and experience the goodness delivered to your doorstep!</p>

   <p className="text-sm sm:text-lg text-gray-700"><span className="font-semibold">Gmail:  </span>expartmuhammad@gmail.com</p>
   <p className="text-sm sm:text-lg text-gray-700"><span className="font-semibold">Phone:  </span>01611004447</p>
  </div>
  
  <div className="w-full h-[2px] bg-gray-500">
  
  </div>
  
  <div className="flex flex-col gap-4 sm:flex-row sm:justify-between  ">
  <p className="text-lg font-semibold">© SneherBazar 2025. All rights reserved.</p>
  
  <div className="inline-flex   gap-4 text-sm">
  <p> Privacy policy</p>
  <p>Terms & Conditions</p>
  <p>Contact me</p>
 <Link to='/admin'><p>Admin</p></Link>
  </div>
  </div>
  
     </div>
     
    )
  }
  
  export default Footer
  