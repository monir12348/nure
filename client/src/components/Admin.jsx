import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

const handleDelete= async(e)=>{
e.preventDefault()
  try{
  const response= await fetch('http://localhost:5000/delete',{
    method:'DELETE'
  })
   if(response.ok){
    const result= await response.json();
    alert(result.message);
    setOrders([])
   }
    else{
      alert('not deleted')
    }
  }
    catch(err){
 console.error( "not deleted", err)
    }
  
}

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">

      <div className="flex items-center justify-between pb-6">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-green-800 mb-8">Order Dashboard</h1>
         <img src="delete.svg" alt="" className="w-6 sm:w-10 cursor-pointer" onClick={handleDelete}/>
      </div>


      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-green-900 text-[#fefefe] text-left">
              <th className="py-3 px-4 text-sm sm:text-[18px] font-semibold">Name</th>
              <th className="py-3 px-4 text-sm sm:text-[18px] font-semibold">Address</th>
              <th className="py-3 px-4 text-sm sm:text-[18px] font-semibold">Phone</th>
              <th className="py-3 px-4 text-sm sm:text-[18px] font-semibold">Order</th>
              <th className="py-3 px-4 text-sm sm:text-[18px] font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className={`${index % 2 === 0 ? "bg-green-200" : "bg-white"} hover:bg-green-100 cursor-pointer`}
              >
                <td className="py-3 px-4 text-sm sm:text-[16px] text-gray-800">{order.name}</td>
                <td className="py-3 px-4 text-sm sm:text-[16px] text-gray-800">{order.address}</td>
                <td className="py-3 px-4 text-sm sm:text-[16px] text-gray-800">{order.phone}</td>
                <td className="py-3 px-4 text-sm sm:text-[16px] text-gray-800">{order.order}</td>
                <td className="py-3 px-4 text-sm sm:text-[16px] text-gray-800">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
