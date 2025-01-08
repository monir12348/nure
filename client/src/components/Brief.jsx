import { Link } from 'react-router-dom'
import Briefs from '../api/Briefp.json'

const Brief = () => {
  return (
    <div>
        <div>
      {Briefs.map((Brief,id)=>(
       <div key={id}  className="flex flex-col bg-white shadow-md rounded-lg p-6 gap-8">
        <h3 className="text-lg sm:text-xl leading-relaxed font-bold text-gray-800">{Brief.h1}</h3>
        <p className="text-sm sm:text-base leading-relaxed text-gray-600">{Brief.t1}</p>

        <p className="text-sm sm:text-base leading-relaxed text-gray-600" >আমাদের পণ্য সম্পর্কে বিস্তারিত জানতে <Link to="/details" className='text-blue-700 underline'>এখানে ক্লিক করুন </Link></p>
       </div>

      ))}

</div>
    </div>
  )
}

export default Brief
