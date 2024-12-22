import "react";
import heroImg from "../assets/hero.webp";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center text-white pt-28 bg-heroBg md:h-screen"
    >
      <div className="container flex flex-col items-center justify-between h-full gap-12 p-8 mx-auto overflow-y-hidden md:flex-row">
        {/* left side */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h1 className="mb-4 text-4xl font-bold leading-snug font-secondary md:w-3/5">
            Start Your Journey to Mental Wellness
          </h1>
          <p className="mb-12 text-lg md:pr-8">
            We lower our stress levels, we get to know our pain, we connect
            better, we improve our focus, and we are kinder to ourselves. Let us
            walk you through the basics in our new mindful guide on how to
            meditate.
          </p>

          <button className="text-white bg-primary py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
            <a href="#contact" className="flex items-center gap-1">
              <span>Get Started</span>
              <FaCircleArrowRight />
            </a>
          </button>
        </motion.div>

        {/* right side */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="h-full md:w-1/2"
        >
          <img src={heroImg} alt="hero image" className="object-cover w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
