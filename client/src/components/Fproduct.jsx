import { Link } from 'react-router-dom';
import Products from '../api/Products.json';
import Star from './Star';
import Title from "./Title"
const Fproduct = () => {
  return (
    <div className="mt-28 mb-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      
      <div className="text-2xl  lg:text-3xl text-center ">
          <Title Heading='Our featured products' />
          </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-6">
        {Products.map((product, id) => (
          <li
            key={id}
            className="list-none shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.text}
              className="w-full h-52 object-cover"
            />

            {/* Product Details */}
            <div className="p-4 flex flex-col gap-3">

              <div className='inline-flex '>
              <p className="text-base sm:text-lg text-gray-800">{product.text}</p>
              <p className="text-base sm:text-lg text-gray-800">{product.text2}</p>

              </div>

              <div className='inline-flex gap-4'>
              <p className="text-lg sm:text-xl font-bold text-gray-700">
                {product.price}
              </p>

              <p className="text-lg sm:text-xl font-bold text-gray-400 line-through mr-2">
                {product.price2}
              </p>
              </div>

<Star/>

              <Link to="/orders">
                <button className="font-medium text-sm sm:text-base px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800 transition-colors duration-300 w-full 2xl:w-1/2">
                  Order Now
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fproduct;




















































