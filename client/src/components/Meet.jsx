
import { Link } from 'react-router-dom';
import Title from './Title';

const Meet = () => {
  return (
    <div className="flex flex-col gap-10 mt-20 mb-10 px-4 lg:px-2 2xl:px-20">
      {/* Title Section */}
      <div className="text-2xl lg:text-3xl text-center">
        <Title Heading="About Our Products" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/honey.jpg"
            alt="Honey"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h3 className="text-gray-700 text-xl lg:text-2xl font-medium leading-relaxed">
            At Sneherbazar, we bring you the best of nature in every product. Our offerings include:
          </h3>

          <div className="text-gray-700 text-base lg:text-lg leading-relaxed space-y-4">
            <p>
              <span className="font-semibold">Milk: </span>
              Fresh and pure, sourced directly from trusted farms, ensuring the highest quality and richness in every sip.
            </p>
            <p>
              <span className="font-semibold">Oil: </span>
              Premium-grade oils crafted for both cooking and health, rich in essential nutrients and flavors.
            </p>
            <p>
              <span className="font-semibold">Honey: </span>
              Raw and natural, harvested with care to retain its golden sweetness and nutritional value.
            </p>
            <p>
              <span className="font-semibold">Mixed Honey-Nut: </span>
              A heavenly combination of nuts and honey, offering a perfect balance of taste and health, ideal for snacking or as a nutritious treat.
            </p>
            <p>
              We are committed to delivering products that prioritize your well-being and enhance your everyday meals with the finest, natural ingredients.
              Order now and experience the goodness delivered to your doorstep!
            </p>
          </div>

          {/* Button */}
         <Link to='/orders'>
            <button  className="text-white bg-green-700 px-6 py-3 w-full sm:w-1/4 lg:w-1/2 2xl:w-1/3 rounded text-lg font-medium hover:bg-green-800 transition duration-300">
              Order Now
            </button>
            </Link>
        </div>
      </div> 
    </div>
  );
};

export default Meet;







/* className="flex justify-center lg:justify-start">*/





























