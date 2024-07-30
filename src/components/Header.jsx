import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container-fluid">
        <h5 className="navbar-brand" style={{ color: "#ffffff" }}>
          TaskMaster
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "#ffffff" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link
                to={"/pending_task"}
                className="nav-link"
                style={{ color: "#ffffff" }}
              >
                Pending
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                style={{ color: "#ffffff" }}
              >
                Settings
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className="btn button-outline"
              type="submit"
              style={{ color: "#ffffff" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
