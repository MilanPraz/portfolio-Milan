"use client";

import axios from "axios";
import { useState } from "react";

function EmailSection() {
  const initial = {
    email: "",
    subject: "",
    message: "",
  };
  const [input, setInput] = useState(initial);

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // console.log(JSONData);
    const endpoint = "api/send";

    await axios
      .post(endpoint, input)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // const JSONData = JSON.stringify(data);
    // const options = {
    //   method: "POST", //method is post coz we are sending data
    //   headers: {
    //     "Content-Type": "application/json", //tell the server we are sending json
    //   },
    //   body: JSONData, // body of the req is the jsondata we created above
    // };

    // const response = await fetch(endpoint, options);
    // const resData = await response.json();
    // console.log(resData);
    // if (response.status === 200) {
    //   console.log(resData);
    // }
  }

  return (
    <section
      id="contact"
      className=" grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-3xl  absolute top-2/3 -left-4 transform -translate-x-1/2 -translate-1/2  animate-bounce-slow"></div>
      <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 to-transparent rounded-full h-80 w-80 z-0 blur-3xl opacity-70 absolute -top-2 -right-96 transform -translate-x-1/2 -translate-1/2 animate-pulse"></div>
      <div>
        <h5 className=" text-xl text-white my-2 font-bold">
          Let &apos; s Connect
        </h5>
        <p className=" text-myText mb-4 max-w-md ">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socialMedia"></div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-1">
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" text-white block mb-1 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
              required
              placeholder="example@gmail.com"
              className=" bg-myBg outline-none border text-white border-[#33353F]  placeholder:text-[#9CA2A9] text-sm rounded-lg w-full  block p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className=" text-white block mb-1 text-sm font-medium"
            >
              Subject
            </label>
            <input
              value={input.subject}
              onChange={(e) => handleChange(e)}
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="say Hi"
              className=" text-white bg-myBg outline-none border border-[#33353F]  placeholder:text-[#9CA2A9] text-sm rounded-lg w-full  block p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className=" text-white block mb-1 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              value={input.message}
              onChange={(e) => handleChange(e)}
              type="text"
              name="message"
              required
              placeholder="Let's talk about..."
              className=" text-white bg-myBg outline-none border border-[#33353F]  placeholder:text-[#9CA2A9] text-sm rounded-lg w-full  block p-2.5 "
            />
          </div>
          <button
            type="submit"
            className=" bg-purple-500 hover:bg-purple-600 text-white py-2 px-5 rounded-lg text-sm  font-medium w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
