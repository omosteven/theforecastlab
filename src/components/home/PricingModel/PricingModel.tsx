// Basic, Premium, Fully Customized

import Pricing from "./Pricing";

//fully customized works with clients requirements and specifications.
const PricingModel = () => {
  const pricingModels = [
    {
      title: "Basic",
    },
    {
      title: "Premium",
    },
    {
      title: "Fully Customized",
    },
  ];

  return (
    <section
      className="pricing section"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="container-sm">
        <div className="pricing-inner section-inner">
          <div className="pricing-header text-center">
            <h2 className="section-title mt-0">Our Pricing Model</h2>
            <p className="section-paragraph mb-0">
              We have three models; basic, premium, and fully customized plans.
            </p>
          </div>
          <div className="pricing-tables-wrap">
            {pricingModels?.map((pricing, key) => (
              <Pricing key={key} {...pricing} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingModel;