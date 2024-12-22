import "react";

const packages = [
  {
    name: "Bronze Package",
    price: "$99",
    description:
      "Ideal for individuals or small businesses looking to get started with mental wellness.",
    features: [
      "Access to basic wellness resources",
      "Weekly mental wellness tips",
      "Community support group access",
    ],
  },
  {
    name: "Silver Package",
    price: "$199",
    description:
      "A great choice for growing businesses with additional features and support for mental wellness.",
    features: [
      "All Bronze Package features",
      "Monthly guided meditation sessions",
      "Personalized wellness plan",
      "Access to expert webinars",
    ],
  },
  {
    name: "Gold Package",
    price: "$299",
    description:
      "Perfect for larger businesses needing advanced mental wellness features and premium support.",
    features: [
      "All Silver Package features",
      "Weekly one-on-one coaching sessions",
      "Advanced mental wellness tracking tools",
      "24/7 access to mental wellness experts",
    ],
  },
];

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#f7f8fc] pt-32" id="pricing">
      <div className="container px-8 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold font-secondary">
            Perfect for small & large brands
          </h2>
          <p className="mx-auto mb-12 text-lg md:w-2/3">
            Our pricing plans are tailored to meet the needs of businesses of
            all sizes. Whether you are a small startup or an established brand,
            we offer affordable and flexible solutions to help you grow and
            succeed.
          </p>
        </div>

        {/* packages */}
        <div className="flex flex-col gap-8 pb-12 mx-auto md:w-5/6 md:flex-row">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex-1 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semimix-blend-color-dodge">
                {pkg.name}
              </h3>
              <hr className="w-24 border text-primary border-primary" />
              <p className="mb-4 text-3xl font-bold">
                {pkg.price} <span className="text-lg font-normal">/mo</span>
              </p>
              <p className="mb-4 text-lg">{pkg.description}</p>
              <ul className="mb-6 space-y-2 list-disc list-inside">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button
                onClick={handleScrollToContact}
                className="px-4 py-2 text-white rounded bg-primary"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
