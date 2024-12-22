import "react";
import { Tab, Tabs, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Services = () => {
  return (
    <div className="bg-[#f7f8fc]" id="services">
      <div className="container px-4 mx-auto pt-28">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-5 text-center"
        >
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p>
            Together, we can build a healthier, more balanced mind. Explore
            practical meditation techniques, learn how to manage daily stress,
            and uncover tools for emotional resilience. Let is take small steps
            toward a happier and more peaceful you.
          </p>
        </motion.div>

        {/* service category */}
        <div className="py-12 mx-auto md:w-4/5">
          <Tabs>
            <motion.TabList
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap items-center justify-between gap-4 md:gap-8"
            >
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col gap-8 mt-8 md:flex-row"
              >
                <div className="p-12 bg-white rounded-lg md:w-1/2 font-secondary">
                  <h3 className="mb-4 text-3xl font-semibold text-primary">
                    Couple Counseling
                  </h3>
                  <p className="mb-8">
                    Relationships can be complex, and every couple faces
                    challenges. Our couple counseling sessions are designed to
                    create a safe space where you and your partner can openly
                    communicate, resolve conflicts, and strengthen your bond.
                    Whether you are navigating trust issues, communication
                    barriers, or major life transitions, we are here to help you
                    build a healthier, more fulfilling relationship.
                  </p>
                  <h4>Benefits</h4>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Improved Communication Skills</li>
                    <li>Rebuilding Trust and Intimacy</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg1}
                    alt="serviceImg1"
                    className="object-cover w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col gap-8 mt-8 md:flex-row"
              >
                <div className="p-12 bg-white rounded-lg md:w-1/2 font-secondary">
                  <h3 className="mb-4 text-3xl font-semibold text-primary">
                    Parenting Skills
                  </h3>
                  <p className="mb-8">
                    Parenting is a journey filled with both rewards and
                    challenges. Our parenting skills program is designed to
                    empower you with tools and techniques to nurture a healthy,
                    supportive, and loving environment for your child. Learn how
                    to navigate different stages of your child is development,
                    manage behavioral challenges, and strengthen your bond
                    through positive communication and understanding. Whether
                    you are a new parent or seeking guidance for specific
                    challenges, we are here to support you every step of the
                    way.
                  </p>
                  <h4>Benefits</h4>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Understanding Child Development</li>
                    <li>Positive Discipline Techniques</li>
                    <li>Stress Management for Parents</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg2}
                    alt="serviceImg2"
                    className="object-cover w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col gap-8 mt-8 md:flex-row"
              >
                <div className="p-12 bg-white rounded-lg md:w-1/2 font-secondary">
                  <h3 className="mb-4 text-3xl font-semibold text-primary">
                    Feeling Stuck
                  </h3>
                  <p className="mb-8">
                    Life can sometimes feel overwhelming, leaving you stuck in a
                    cycle of doubt, indecision, or lack of motivation. Whether
                    you are facing career challenges, personal struggles, or an
                    unclear sense of direction, our program can help you break
                    free from this stagnation. Through personalized guidance,
                    actionable strategies, and a supportive environment, we will
                    work together to rediscover your purpose, build confidence,
                    and take meaningful steps toward a brighter future.
                  </p>
                  <h4>Benefits</h4>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Clarity and Goal Setting</li>
                    <li>Improved Emotional Resilience</li>
                    <li>Enhanced Decision-Making Skills</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg3}
                    alt="serviceImg3"
                    className="object-cover w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col gap-8 mt-8 md:flex-row"
              >
                <div className="p-12 bg-white rounded-lg md:w-1/2 font-secondary">
                  <h3 className="mb-4 text-3xl font-semibold text-primary">
                    Self-Confidence
                  </h3>
                  <p className="mb-8">
                    Self-confidence is the foundation of personal and
                    professional success. It empowers you to embrace challenges,
                    take risks, and believe in your abilities. Our program is
                    designed to help you overcome self-doubt, build a positive
                    self-image, and unlock your true potential. With practical
                    strategies and personalized support, we will guide you on
                    the journey to becoming your most confident self.
                  </p>
                  <h4>Benefits</h4>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Building a Positive Self-Image</li>
                    <li>Strengthening Decision-Making Abilities</li>
                    <li>Overcoming Self-Doubt</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg4}
                    alt="serviceImg4"
                    className="object-cover w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
