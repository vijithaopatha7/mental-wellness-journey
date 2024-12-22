import "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";

const testimonials = [
  {
    name: "Jane Doe",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: review1,
  },
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    review:
      "I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#f7f8fc] py-12" id="testimonial">
      <div className="container pb-20 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold font-secondary">
            What Our Clients Say
          </h2>
          <p className="mx-auto mb-12 text-lg md:w-1/2">
            Our experience has been nothing short of exceptional! The team’s
            professionalism, attention to detail, and commitment to delivering
            high-quality results exceeded our expectations. We highly recommend
            their services to anyone looking for excellence.
          </p>
        </div>

        <div className="flex flex-col gap-8 mx-auto md:w-4/5 md:flex-row md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex-1 p-6 bg-white rounded-lg"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col mb-4 space-y-3">
                <p className="mb-2 text-lg">{testimonial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt="reviewer image"
                    className="object-cover mr-4 rounded-full size-16"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
