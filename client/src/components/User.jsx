
import Users from '../api/User.json';
import Star from './Star';
import Title from "./Title"

const User = () => {
  return (
    <div className="mt-28 mb-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10">
      
      <div className="text-2xl  lg:text-3xl text-center ">
          <Title Heading='Our happy client`s' />
          </div>

      <ul className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 max-w-[1200px]">
        {Users.map((user, id) => (
          <li
            key={id}
            className="list-none shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={user.image}
              alt={user.text}
              className="w-full h-52 object-cover"
            />

            {/* Product Details */}
            <div className="p-4 flex flex-col gap-3 ">

            <p className="text-base sm:text-lg text-gray-800 font-semibold leading-relaxed text-justify">{user.name}</p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-justify">{user.text}</p>
            
              
              
            
<Star/>

             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;


