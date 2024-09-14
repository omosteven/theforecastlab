import "./RoadMap.scss";

const RoadMap = () => {
  return (
    <section
      className="pricing section roadmap"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="container-sm has-top-divider">
        <div className="pricing-inner section-inner ">
          <div className="pricing-header text-center">
            <h2 className="section-title mt-0">Our Road Map</h2>
            <p className="section-paragraph mb-0">
              See into our future milestones
            </p>
          </div>
          <section className="roadmap__map">
            <div className="roadmap__circle">
              <p>Q3 2024</p>
              <b>Brainstorming</b>
            </div>
            <div className="roadmap__circle-joint"></div>
            <div className="roadmap__circle active">
              <p>Q4 2024</p>
              <b>Development</b>
            </div>
            <div className="roadmap__circle-joint active"></div>
            <div className="roadmap__circle">
              <p>Q1 2025</p>
              <b>MVP Testing</b>
            </div>
            <div className="roadmap__circle-joint"></div>
            <div className="roadmap__circle">
              <p>Q2 2025</p>
              <b>MVP Launch</b>
            </div>
            <div className="roadmap__circle-joint"></div>
            <div className="roadmap__circle">
              <p>Q3 2025</p>
              <b>Beta Development</b>
            </div>
            <div className="roadmap__circle-joint"></div>
            <div className="roadmap__circle">
              <p>Q4 2025</p>
              <b>Beta Testing</b>
            </div>
            <div className="roadmap__circle">
              <p>Q1 2026</p>
              <b>Beta Launch</b>
            </div>
            {/* <div className="roadmap__circle-joint"></div>
            <div className="roadmap__circle">
              <p>Q4 2025</p>
              <b>MVP Launch</b>
            </div> */}
          </section>
        </div>

        {/* <div className="roadmap__vertical"></div>
        <div className="roadmap__horizontal"></div>
        <div className="roadmap__vertical right"></div>
        <div className="roadmap__horizontal"></div>
        <div className="roadmap__vertical"></div>
        <div className="roadmap__horizontal"></div>
        <div className="roadmap__vertical right"></div>
        <div className="roadmap__horizontal"></div> */}
      </div>
    </section>
  );
};

export default RoadMap;
