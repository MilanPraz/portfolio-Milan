"use client";
import "../../src/app/globals.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { animate, delay, motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className=" col-span-7 place-self-center  text-center sm:text-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="   text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
              <span className=" block mr-2  text-transparent  bg-clip-text  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600">
                Hello, I'm
              </span>
              <TypeAnimation
                sequence={[
                  "Milan",
                  1000,
                  "Web Developer",
                  1000,
                  "FullStack Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h1>
            <p className="  text-myText  text-base  sm:text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
              fugit earum. Veniam possimus aut architecto debitis deserunt hic
              quo eos.
            </p>
          </motion.div>
          <div>
            <Link
              to={"contact"}
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              delay={300}
            >
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500 px-6 py-3 w-full sm:w-fit bg-white rounded-full hover:bg-slate-200 text-white font-semibold mr-4"
              >
                Hire Me
              </motion.button>
            </Link>
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" bg-clip-border bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 mt-4   sm:mt-0 bg-transparent w-full sm:w-fit px-1 py-1 hover:bg-slate-800 rounded-full  text-white"
            >
              <a href={"/resume.pdf"} download>
                <span className=" block px-6 py-3 bg-[#121212] rounded-full hover:bg-slate-800">
                  Download CV
                </span>
              </a>
            </motion.button>
          </div>
        </div>
        <div className=" col-span-5 place-self-center mt-4">
          <div className=" motion-safe:animate-bounce-slow relative rounded-full bg-[#181818] h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/hero-image.png"
              alt="hero image"
              width={300}
              height={300}
              className="    absolute  left-1/2 top-1/2 transform  -translate-x-1/2  -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
