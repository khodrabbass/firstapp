
export default function Services() {

  // 1. Create an array of services
  const services = [
    "Routine Maintenance and Oil Changes",
    "Brake Inspection and Repair",
    "Engine Diagnostics and Repair",
    "Tire Sales and Installation",
    "Battery Testing and Replacement",
    "Car Washing and Detailing",
    "Air Conditioning Repair"
  ];

  // 2. Display the services using map()
  return (
    <main className="services-container">

      <h1>Our Services</h1>

      <p className="intro">
        At AutoWorld, we provide high-quality automotive services
        to keep your vehicle safe, reliable, and in excellent
        condition. Our experienced team is ready to help you
        with all your car needs.
      </p>

      <h2>Our Services Include:</h2>

      <ul>
        {services.map((elt, index) => (
          <li key={index}>{elt}</li>
        ))}
      </ul>

    </main>
  );
}
