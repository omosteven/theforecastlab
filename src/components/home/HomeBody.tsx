import { useState } from "react";
import assets from "../../assets";
import JoinWaitlist from "./JoinWaitlist";
import PricingModel from "./PricingModel/PricingModel";
import RoadMap from "./RoadMap/RoadMap";
import OurTechnologies from "./OurTechnologies/OurTechnologies";
// import Analytics from "./Analytics/Analytics";
import Briefcase from "./Briefcase/Briefcase";

// roadmap, how it works, analytics graph, our vision andmission
const HomeBody = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0 animated-text">
                AI For Demand Forecasting!
              </h1>
              <p className="hero-paragraph">
                Improve your business supply chain efficiency through our
                AI-powered demand forecasting solution
              </p>
              <div className="hero-cta">
                <span className="button button-secondary" onClick={toggleModal}>
                  Join Waitlist
                </span>
              </div>
            </div>
            <div className="hero-figure anime-elements animated-image">
              <img src={assets.images.heroImg} alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      <Briefcase />

      <section
        className="features section "
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        style={{ marginTop: "-60px" }}
      >
        <div className="container">
          <div className="features-inner section-inner has-bottom-divider">
            <div className="pricing-header text-center">
              <h2 className="section-title mt-0">Our Solution</h2>
            </div>
            <div className="features-wrap">
              <div
                className="feature text-center is-revealing"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={assets.images.feat1} alt="Feature 01" />
                  </div>
                  <h4 className="feature-title mt-24">Tailored Forecasting</h4>
                  <p className="text-sm mb-0">
                    Our AI models are customized for your business based on the
                    specific industry and geographical operating regions of your
                    business, thus enhancing its efficiency and accuracy in
                    demand forecasting.
                  </p>
                </div>
              </div>
              <div
                className="feature text-center is-revealing"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={assets.images.feat2} alt="Feature 02" />
                  </div>
                  <h4 className="feature-title mt-24">
                    Realtime Data Processing
                  </h4>
                  <p className="text-sm mb-0">
                    Our platform processes data in real-time, allowing it to
                    adapt swiftly to market fluctuations, supply chain
                    disruptions, and changes in consumer behaviour.
                  </p>
                </div>
              </div>
              <div
                className="feature text-center is-revealing"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={assets.images.feat3} alt="Feature 03" />
                  </div>
                  <h4 className="feature-title mt-24">Visualize At a Go</h4>
                  <p className="text-sm mb-0">
                    Our forecasting insights are presented through user-friendly
                    analysis and charts, making complex data accessible and
                    actionable for businesses.
                  </p>
                </div>
              </div>
              <div
                className="feature text-center is-revealing"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={assets.images.feat4} alt="Feature 04" />
                  </div>
                  <h4 className="feature-title mt-24">
                    Integration Made Easy.
                  </h4>
                  <p className="text-sm mb-0">
                    Businesses can integrate our platform into their existing
                    systems using Application Programming Interfaces (APIs).
                    With this APIs, a smooth and efficient connection with
                    current business operations is ensured
                  </p>
                </div>
              </div>
              <div
                className="feature text-center is-revealing"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src={assets.images.feat5} alt="Feature 05" />
                  </div>
                  <h4 className="feature-title mt-24">
                    Data Privacy Guaranteed
                  </h4>
                  <p className="text-sm mb-0">
                    Worried about your business data privacy? Our solution is
                    built on the principles of Responsible and Trustworthy AI by
                    ensuring data privacy and integrity through decentralized
                    data sharing and blockchain technology.
                  </p>
                </div>
              </div>
            </div>
            {/* <Analytics /> */}
          </div>
        </div>
      </section>

      <OurTechnologies />

      <PricingModel />

      <RoadMap />
      {openModal && (
        <JoinWaitlist
          onClose={() => setOpenModal(false)}
          openModal={openModal}
        />
      )}
    </main>
  );
};

export default HomeBody;
