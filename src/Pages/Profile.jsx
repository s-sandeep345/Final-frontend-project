import { useState } from "react";

function Profile() {

  const [isLoggedIn,
    setIsLoggedIn] =
    useState(false);

  return (
    <div className="page">

      <h1>User Profile</h1>

      <br />

      {isLoggedIn ? (

        <div className="profile-card">

          <h2>
            Sandeep
          </h2>

          <p>
            Frontend Developer
          </p>

          <p>
            Hyderabad
          </p>

          <button
            onClick={() =>
              setIsLoggedIn(false)
            }
          >
            Logout
          </button>

        </div>

      ) : (

        <div>

          <h3>
            Please Login
          </h3>

          <br />

          <button
            onClick={() =>
              setIsLoggedIn(true)
            }
          >
            Login
          </button>

        </div>

      )}

    </div>
  );
}

export default Profile;