function About() {
  return (
    <div className="page">
      <h1>About Our Showroom</h1>

      <br />

      <p>
        Our showroom offers premium
        vehicles from leading brands
        such as BMW, Audi, Mercedes,
        Tesla and Toyota.
      </p>

      <br />

      <p>
        We provide:
      </p>

      <ul
        style={{
          listStyle: "none",
          marginTop: "15px"
        }}
      >
        <li>Luxury Cars</li>
        <li>Sports Cars</li>
        <li>Electric Vehicles</li>
        <li>Vehicle Financing</li>
        <li>Maintenance Services</li>
      </ul>
    </div>
  );
}

export default About;