import "react";
import { useState } from "react";
import thumnailImg from "../assets/video-thumbnail.webp";
import { FaPlay } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center gap-8 px-4 py-12 mx-auto md:w-4/5 md:flex-row">
          {/* left side */}
          <div className="w-full mb-8 md:w-1/2 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumnailImg}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute p-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg cursor-pointer top-1/2 left-1/2 bg-primary"
                >
                  <FaPlay className="text-white size-12" />
                </button>
              </div>
            ) : null}
          </div>

          {isVideoPlaying && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative flex items-center justify-center w-full h-full">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/AiFZ3JN19UY?si=FY0C_mgrZjVlM7WK"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <button
                  onClick={handleCloseVideo}
                  className="absolute text-2xl text-white cursor-pointer top-4 right-4"
                >
                  x
                </button>
              </div>
            </div>
          )}

          {/* right side */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-4xl leading-snug capitalize front-secondary">
              Individual consultation and therapy
            </h2>
            <p className="mb-12 text-lg md:pr-8">
              We lower our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we are kinder to ourselves. Let
              us walk you through the basics in our new mindful guide on how to
              meditate.
            </p>

            <button className="text-white bg-primary py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
              <a href="#contact" className="flex items-center gap-1">
                <span>Get Started</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
