const Pricing = ({
  title,
  type,
  features,
}: {
  title: string;
  type: string;
  features: string[];
}) => {
  const renderPriceBasedOnTile = () => {
    switch (type) {
      case "FREMIUM":
        return (
          <div className="pricing-table-price">
            <span className="pricing-table-price-currency h3">Free</span>
            {/* <span className="pricing-table-price-amount h1">0</span> */}
            {/* <span className="text-xs">/month</span> */}
          </div>
        );
      case "PREMIUM":
        return (
          <div className="pricing-table-price">
            <span className="pricing-table-price-currency h4">£</span>
            <span className="pricing-table-price-amount h3">49</span>
            <span className="text-xs">/month</span>
          </div>
        );
      case "CUSTOMIZED":
        return (
          <div className="pricing-table-price">
            {/* <span className="pricing-table-price-currency h4">$</span> */}
            <span className="pricing-table-price-amount h3">RFQ</span>
            <span className="text-xs">/month</span>
          </div>
        );
      default:
        return "";
    }
  };

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
            {renderPriceBasedOnTile()}
          </div>
          <div className="pricing-table-features-title text-xs pt-24 pb-24">
            What you will get
          </div>
          <ul className="pricing-table-features list-reset text-xs">
            {features?.map((text, key) => (
              <li key={key}>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-table-cta mb-8">
          <button className="button button-primary button-shadow button-block">
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
