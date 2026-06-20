import {
  Link,
  Outlet
} from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>

      <br />

      <div className="service-links">

        <Link to="service1">
          Insurance
        </Link>

        <Link to="service2">
          Finance
        </Link>

        <Link to="service3">
          Maintenance
        </Link>

      </div>

      <br />

      <Outlet />
    </div>
  );
}

export default Services;