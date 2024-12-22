import "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const WorkingStep = () => {
  return (
    <div className="relative py-12 bg-center bg-cover bg-working-img">
      <div className="absolute inset-0 bg-heroBg bg-opacity-85"></div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container relative px-4 py-20 mx-auto"
      >
        <div className="mb-20 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold font-secondary">
            How It Works
          </h2>
          <p className="w-full mx-auto text-lg md:w-1/2">
            Our platform simplifies the process of connecting you with the
            services or solutions you need. We provide a streamlined,
            user-friendly experience that ensures efficiency and satisfaction.
            Whether you are an individual or an organization, our approach is
            designed to meet your unique needs.
          </p>
        </div>

        <div className="flex flex-col gap-8 mx-auto md:w-4/5 md:flex-row">
          <div className="relative flex-1 p-6 text-center bg-white rounded-lg">
            <div className="absolute top-0 flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary size-14">
              1
            </div>
            <h3 className="mt-8 text-lg font-medium">Fill a form</h3>
            <p className="my-2">
              Begin by completing a short and simple form to provide the
              necessary details. This step helps us understand your preferences,
              goals, or requirements to serve you better.
            </p>
          </div>
          <div className="relative flex-1 p-6 text-center bg-white rounded-lg">
            <div className="absolute top-0 flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary size-14">
              2
            </div>
            <h3 className="mt-8 text-lg font-medium">Get Matched</h3>
            <p className="my-2">
              Based on your input, we use intelligent matching systems or expert
              reviews to connect you with the most suitable options, services,
              or professionals tailored specifically for you.
            </p>
          </div>
          <div className="relative flex-1 p-6 text-center bg-white rounded-lg">
            <div className="absolute top-0 flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary size-14">
              3
            </div>
            <h3 className="mt-8 text-lg font-medium">Schedule</h3>
            <p className="my-2">
              Once matched, you can easily schedule meetings, consultations, or
              appointments at a time that works best for you. We ensure that the
              process is smooth and convenient from start to finish.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkingStep;
