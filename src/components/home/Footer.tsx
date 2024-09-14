const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <span className="ml-2 brand-name">
              <span className="brand-name__first">Ramified</span>
              <span className="brand-name__second">AI</span>
            </span>
          </div>
          {/* <ul className="footer-links list-reset">
            <li>
              <a href="https://c.com">Contact</a>
            </li>
            <li>
              <a href="https://c.com">About us</a>
            </li>
            <li>
              <a href="https://c.com">FAQ's</a>
            </li>
            <li>
              <a href="https://c.com">Support</a>
            </li>
          </ul> */}
          <ul></ul>

          <div className="footer-copyright">
            © 2024
            <span className="ml-2 brand-name">
              <span className="brand-name__first">Ramified</span>
              <span className="brand-name__second">AI</span>{" "}
            </span>
            , all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
