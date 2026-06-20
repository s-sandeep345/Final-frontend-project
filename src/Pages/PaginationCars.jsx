import {
  useSearchParams
} from "react-router-dom";

function PaginationCars() {

  const [
    searchParams,
    setSearchParams
  ] = useSearchParams();

  const page =
    Number(
      searchParams.get("page")
    ) || 1;

  const cars = [

    "BMW M4",
    "Audi R8",
    "Mercedes C-Class",
    "Tesla Model S",
    "Toyota Fortuner",

    "Hyundai Creta",
    "Honda City",
    "Kia Seltos",
    "MG Hector",
    "Ford Endeavour",

    "Skoda Slavia",
    "Volkswagen Virtus",
    "Mahindra XUV700",
    "Tata Safari",
    "Nissan Magnite"

  ];

  const recordsPerPage = 5;

  const startIndex =
    (page - 1) *
    recordsPerPage;

  const visibleCars =
    cars.slice(
      startIndex,
      startIndex +
      recordsPerPage
    );

  return (
    <div className="page">

      <h1>
        Car Pagination
      </h1>

      <br />

      {visibleCars.map(
        (car, index) => (

          <div
            key={index}
            className="pagination-card"
          >

            {car}

          </div>

        )
      )}

      <br />

      <button
        disabled={page === 1}
        onClick={() =>
          setSearchParams({
            page: page - 1
          })
        }
      >
        Previous
      </button>

      <span
        style={{
          margin:
            "0 15px"
        }}
      >
        Page {page}
      </span>

      <button
        disabled={
          page >=
          Math.ceil(
            cars.length /
            recordsPerPage
          )
        }
        onClick={() =>
          setSearchParams({
            page: page + 1
          })
        }
      >
        Next
      </button>

    </div>
  );
}

export default PaginationCars;