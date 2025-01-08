import Detailses from '../api/Details.json';
import Title from '../components/Title';
const Productdetails = () => {
  return (
    <div className="p-2 sm:p-0 bg-gray-50 min-h-screen flex flex-col items-center gap-10">
 <div className="text-2xl lg:text-3xl text-center">

        <Title Heading="About Our Products" />
      </div>
    
    <div className="space-y-10 max-w-4xl flex flex-col  gap-4 pb-10 pt-10">
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
  )
}

export default Productdetails
