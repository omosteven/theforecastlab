const Pricing = ({ title }: { title: string }) => {
  return (
    <div
      className="pricing-table"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="pricing-table-inner is-revealing">
        <div className="pricing-table-main">
          <div className="pricing-table-header pb-24">
            {title === "Basic" ? (
              <div className="pricing-table-price">
                <span className="pricing-table-price-currency h4">$</span>
                <span className="pricing-table-price-amount h3">0</span>
                <span className="text-xs">/month</span>
              </div>
            ) : (
              <div className="pricing-table-price">
                <span className="pricing-table-price-currency h3">
                  To Be Announced
                </span>
                {/* <span className="pricing-table-price-amount h1">0</span> */}
                {/* <span className="text-xs">/month</span> */}
              </div>
            )}
          </div>
          <div className="pricing-table-features-title text-xs pt-24 pb-24">
            What you will get
          </div>
          <ul className="pricing-table-features list-reset text-xs">
            <li>
              <span>Lorem ipsum dolor sit nisi</span>
            </li>
            <li>
              <span>Lorem ipsum dolor sit nisi</span>
            </li>
            <li>
              <span>Lorem ipsum dolor sit nisi</span>
            </li>
            <li>
              <span>Lorem ipsum dolor sit nisi</span>
            </li>
          </ul>
        </div>
        <div className="pricing-table-cta mb-8">
          <a
            className="button button-primary button-shadow button-block"
            href="https;//c.com"
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
