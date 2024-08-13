import "./OurTechnologies.scss";

const OurTechnologies = () => {
  return (
    <section
      className="pricing section ourtechnologies"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="container-sm has-top-divider">
        <div className="pricing-inner section-inner ">
          <div className="pricing-header text-center">
            <h2 className="section-title mt-0">Our Technologies</h2>
            <p className="section-paragraph mb-0">
              Our solution is built on four key technologies:
            </p>
          </div>
          {/* <div className="ourtechnologies__draw"></div> */}

          <div className="container">
            <div className="technologies__grid">
              <div
                className="technology-card"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="technology-card__inner">
                  <div className="technology-card__front">
                    <img
                      src="https://img.icons8.com/?size=100&id=FzKGtkyzVIdH&format=png&color=FFFFFF"
                      alt="AI"
                      className="technology-card__icon"
                    />
                    <h3 className="technology-card__name">
                      Artificial Intelligence
                    </h3>
                  </div>
                  <div className="technology-card__back">
                    <p>
                      AI is our go-to solution for building tailored demand
                      forecast
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="technology-card"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="technology-card__inner">
                  <div className="technology-card__front">
                    <img
                      src="https://img.icons8.com/?size=100&id=77003&format=png&color=FFFFFF"
                      alt="Blockchain"
                      className="technology-card__icon"
                    />
                    <h3 className="technology-card__name">Blockchain</h3>
                  </div>
                  <div className="technology-card__back">
                    <p>
                      With Blockchain, we achieve data security and privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="technology-card"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="technology-card__inner">
                  <div className="technology-card__front">
                    <img
                      src="https://img.icons8.com/ios/50/FFFFFF/database.png"
                      alt="Database"
                      className="technology-card__icon"
                    />
                    <h3 className="technology-card__name">Secure Database</h3>
                  </div>
                  <div className="technology-card__back">
                    <p>
                      Our detabase system is built to ensure secure and
                      efficient data storage.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="technology-card"
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="technology-card__inner">
                  <div className="technology-card__front">
                    <img
                      src="https://img.icons8.com/?size=100&id=1340&format=png&color=FFFFFF"
                      alt="GPU"
                      className="technology-card__icon"
                    />
                    <h3 className="technology-card__name">
                      Efficient GPU Service
                    </h3>
                  </div>
                  <div className="technology-card__back">
                    <p> We utilize GPU for high-performance data processing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTechnologies;
