const Footer = () => {
  return (
    <footer className="py-5 px-5">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2" style={{ color: "#ffffff" }}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2  " style={{ color: "#ffffff" }}>
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2" style={{ color: "#ffffff" }}>
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2" style={{ color: "#ffffff" }}>
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 " style={{ color: "#ffffff" }}>
            About
          </a>
        </li>
      </ul>
      <p className="text-center " style={{ color: "#ffffff" }}>
        © 2024 Company, Inc
      </p>
    </footer>
  );
};

export default Footer;
