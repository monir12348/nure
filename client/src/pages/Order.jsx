import  { useState } from "react";

import Brief from "../components/Brief";
 import Title from "../components/Title";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    order: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Order Submitted Successfully!");
      } else {
        alert("Failed to Submit Order!");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Error submitting order!");
    }
  };

  return (
    <div className="min-h-screen flex  flex-col items-center justify-center bg-gray-100 p-10 gap-6 mt-10 mb-28 ">

    <div className="text-2xl lg:text-3xl text-center">

<Title Heading="অর্ডার করতে নিচের ফর্মটি পূরণ
 করুন " />
</div>


     <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
      <Brief/>
     </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-900">
          Place Your Order
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Order Details:
            </label>
            <textarea
              name="order"
              value={formData.order}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Describe your order"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 sm:py-4 px-4 rounded-md shadow-md sm:text-[20px] font-medium hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
