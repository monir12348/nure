import { Link } from "react-router-dom"
import Title from "./Title"


const Category = () => {
  return (
    <div className="flex flex-col gap-10 mt-28 mb-6">
        <div className="text-2xl  lg:text-3xl text-center ">
          <Title Heading='shop by category' />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-4">
<Link to="/categories">
        <div className="flex flex-col items-center gap-2">
            <img src="/images/honey.jpg" alt="" className="rounded-md" />
            <p className="font-semibold text-gray-700 text-xl uppercase">honey</p>
        </div>
        </Link>

<Link to="/categories">
        <div className="flex flex-col items-center gap-2">
            <img src="/images/milk.jpg" alt="" className="rounded-md" />
            <p className="font-semibold text-gray-700 text-xl uppercase">milk</p>
        </div>
        </Link>

        <Link to="/categories">
        <div className="flex flex-col items-center gap-2">
            <img src="/images/oliveoil.jpg" alt="" className="rounded-md" />
            <p className="font-semibold text-gray-700 text-xl uppercase">oil</p>
        </div>
        </Link>

        <Link to ='/categories'>
        <div className="flex flex-col items-center gap-2">
            <img src="/images/mixednut.jpg" alt="" className="rounded-md" />
            <p className="font-semibold text-gray-700 text-xl uppercase">mixed-nut</p>
        </div>
        </Link>
          </div>
    </div>
  )
}

export default Category
