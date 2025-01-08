import Detailses from '../api/Details.json';


const Details = () => {
  return (
    <div className="p-2 sm:p-0 bg-gray-50 min-h-screen">
      <div className="space-y-10">
        {Detailses.map((detail, id) => (
          <div
            key={id}
            className="flex flex-col bg-white shadow-md rounded-lg p-6 gap-8"
          >
            {/* Section 1 */}
            <div className="space-y-10">
              <h3 className="text-lg sm:text-xl leading-relaxed font-bold text-gray-800">
                {detail.h3}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">{detail.text}</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-10">
              <h4 className="text-lg sm:text-xl leading-relaxed font-semibold text-gray-800">
                {detail.h4}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">{detail.text2}</p>
            </div>

            {/* Ordered List */}
            <div className="space-y-10">
              <h5 className="text-lg sm:text-xl font-semibold leading-relaxed text-gray-800">
                {detail.ol}
              </h5>
              <ol className="list-decimal list-inside leading-relaxed text-sm sm:text-base text-gray-600 space-y-1 pl-4">
                <li>{detail.li1}</li>
                <li>{detail.li2}</li>
                <li>{detail.li3}</li>
              </ol>
            </div>

            {/* Closing Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed  text-gray-600">{detail.text3}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Details;































































/*import Detailses from '../api/Details.json'

const Details = () => {
  return (
    <div>
      <div >
        {Detailses.map((detail,id)=>(
            
                <div key={id} className='flex flex-col text-gray-700 leading-relaxed gap-10'>
  <div className='flex flex-col mt-10 gap-10'>
                    <div className='flex flex-col gap-2'>
                  <h3 className='font-semibold text-[14px] sm:text-[20px]'>{detail.h3}</h3>
                  <p className='font-normal text-[12px] sm:text-[18px]'>{detail.text}</p> 
                  </div>

                    
                  <div className='flex flex-col gap-2'>
                  <h4 className='font-semibold text-[14px] sm:text-[20px]'>{detail.h4}</h4>

                  <p className='font-normal text-[12px] sm:text-[18px]'>{detail.text2}</p> 
                   </div>
   

   <div className='flex flex-col gap-10'>
                  <ol className='font-semibold text-[14px] sm:text-[20px]  '>{detail.ol}

                    <li className='font-normal text-[12px] sm:text-[18px]'>{detail.li1}</li>
                    <li className='font-normal text-[12px] sm:text-[18px]'>{detail.li2}</li>
                    <li className='font-normal text-[12px] sm:text-[18px]'>{detail.li3}</li>
                  </ol>

                  </div>

                  <p className='font-normal text-[12px] sm:text-[18px]'>{detail.text3}</p>

                  </div>
                </div>

            
        ))}
      </div>
    </div>
  )
}

export default Details */
