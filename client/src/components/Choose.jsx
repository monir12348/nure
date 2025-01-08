 
 
 const Choose = () => {
   return (
     <div className="grid lg:grid-cols-3 justify-center gap-4 mt-20">

       <div className="inline-flex items-center gap-2">
        <img src="/images/cycle.jpg" alt="" className="w-36" />
        <div className="flex flex-col gap-2">
   <p className="font-semibold text-gray-800 text-sm sm:text-xl">Fast Delivery</p>
   <p className="text-sm sm:text-xl text-gray-600 leading-relaxed"> Enjoy Fast delivery on all your orders, making fresh and healthy eating more convenient than ever</p>
        </div>
       </div>


       <div className="inline-flex items-center gap-2">
        <img src="/images/herovec.png" alt="" className="w-36" />
        <div className="flex flex-col gap-2">
   <p className="font-semibold text-gray-800 text-sm sm:text-xl">Fresh Products</p>
   <p className="text-sm sm:text-xl text-gray-600 leading-relaxed"> Enjoy the best of nature with our handpicked Fresh Milk, Honey, Nut etc that are always fresh and nutritious.</p>
        </div>
       </div>



       <div className="inline-flex items-center gap-2">
        <img src="/images/headphone.jpg" alt="" className="w-36" />
        <div className="flex flex-col gap-2">
   <p className="font-semibold text-gray-800 text-sm sm:text-xl">Help & Supports</p>
   <p className="text-sm sm:text-xl text-gray-600 leading-relaxed"> We’re available 24/7 to provide the help and support you need, whenever you need it.</p>
        </div>
       </div>


     
     </div>
   )
 }
 
 export default Choose
 