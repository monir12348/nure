import  { useState } from "react";
import Title from "../components/Title";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = { ...formData, access_key: "c92a70c0-d5e7-47c4-88bf-282a11536fba" };
    const json = JSON.stringify(data);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setFormData({ name: "", email: "", message: "" }); // ইনপুট খালি করা
    }
  };

  return (
    <div
      className="flex flex-col mt-10 pb-10"
   
    >
      <div className="text-2xl lg:text-3xl text-center">
        <Title Heading="Contact Us here" />
      </div>

      <div className="flex flex-col sm:flex-row gap-10 mt-14">
        {/* right side */}
        <div className="w-full sm:w-1/2 text-gray-700">
          <div className="flex flex-col gap-6 py-4">
            <h1 className="font-bold text-start text-2xl text-green-900">
              LET`S TALK
            </h1>

            <p className="text-sm md:text-base lg:text-lg">
            Our website is always ready to take your orders and ensure your products are delivered to you accurately and on time. We accept orders 24/7, allowing you to reach out to us anytime. You can contact us directly by filling out the form with your message, calling us at the number provided below, or sending us an email at the mentioned address. Your satisfaction is our priority, and we are here to serve you whenever you need.
            </p>

            <p className="text-sm md:text-base">
              <span className="font-bold">Phone:</span> +880 01611004447
            </p>
            <p className="text-sm md:text-base">
              <span className="font-bold">Gmail:</span> expartmuhammad@gmail.com
            </p>
          </div>
        </div>

        {/* left side */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 w-full sm:w-1/2 pb-4 mx-auto bg-white shadow-xl rounded-lg p-6 border-t-1"
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md text-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md text-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 font-medium mb-1"
            >
              Write Here
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md text-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" px-4 py-2 rounded-lg  w-full font-semibold text-lg mt-4 bg-green-700 text-white hover:bg-green-800 transition-colors duration-300
          ">
            Submit Form
          </button>
        </form>                                    
      </div>
    </div>
  );
}

export default Contact;





















































/*const Contact = () => {
  return (
    <div>
      
    </div>
  )
}

export default Contact*/
