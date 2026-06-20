import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const {
    darkMode,
    toggleTheme
  } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "home dark"
          : "home"
      }
    >
      <img
        className="hero-image"
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
        alt="Car Showroom"
      />

      <h1>
        Welcome To Premium Car Showroom
      </h1>

      <p>
        Find luxury, sports and family
        cars from the world's top brands.
      </p>

      <br />

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Home;