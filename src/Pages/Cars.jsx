import CarCard from "../components/CarCard";

function Cars() {
  const cars = [
    {
      id: 1,
      name: "BMW M4",
      brand: "BMW",
      price: "₹1.53 Crore",
      year: 2025,
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
    },
    {
      id: 2,
      name: "Audi R8",
      brand: "Audi",
      price: "₹2.30 Crore",
      year: 2025,
      image:
        "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg"
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      brand: "Mercedes",
      price: "₹65 Lakh",
      year: 2025,
      image:
        "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg"
    },
    {
      id: 4,
      name: "Toyota Fortuner",
      brand: "Toyota",
      price: "₹52 Lakh",
      year: 2025,
      image:
        "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg"
    },
    {
      id: 5,
      name: "Tesla Model S",
      brand: "Tesla",
      price: "₹1.50 Crore",
      year: 2025,
      image:
        "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    },
    {
      id: 6,
      name: "Hyundai Creta",
      brand: "Hyundai",
      price: "₹20 Lakh",
      year: 2025,
      image:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    }
  ];

  return (
    <div className="cars-page">
      <h1>Our Premium Cars</h1>

      <div className="grid">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </div>
  );
}

export default Cars;