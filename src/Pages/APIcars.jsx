import useFetchCars from "../hooks/useFetchCars";

function APICars() {

  const {
    data,
    loading,
    error
  } = useFetchCars(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <h2
        style={{
          textAlign:
            "center",
          marginTop:
            "50px"
        }}
      >
        Loading...
      </h2>
    );
  }

  if (error) {
    return (
      <h2
        style={{
          textAlign:
            "center",
          color: "red"
        }}
      >
        {error}
      </h2>
    );
  }

  return (
    <div className="page">

      <h1>
        API Cars Page
      </h1>

      <br />

      <div className="grid">

        {data.map(
          (user) => (

            <div
              key={user.id}
              className="card"
            >

              <h2>
                {user.name}
              </h2>

              <p>
                <strong>
                  Username:
                </strong>{" "}
                {user.username}
              </p>

              <p>
                <strong>
                  Email:
                </strong>{" "}
                {user.email}
              </p>

              <p>
                <strong>
                  Phone:
                </strong>{" "}
                {user.phone}
              </p>

              <p>
                <strong>
                  Website:
                </strong>{" "}
                {user.website}
              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default APICars;