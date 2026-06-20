import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ThemeProvider
from "./context/ThemeContext";

import Navbar
from "./components/Navbar";

import Home
from "./pages/Home";

import About
from "./pages/About";

import Cars
from "./pages/Cars";

import Contact
from "./pages/Contact";

import Profile
from "./pages/Profile";

import Services
from "./pages/Services";

import Service1
from "./pages/Service1";

import Service2
from "./pages/Service2";

import Service3
from "./pages/Service3";

import PaginationCars
from "./pages/PaginationCars";

import APICars
from "./pages/APICars";

import AdminPanel
from "./components/AdminPanel";

import CarDetails
from "./components/CarDetails";

function App() {

  return (

    <ThemeProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/cars"
            element={<Cars />}
          />

          <Route
            path="/api-cars"
            element={<APICars />}
          />

          <Route
            path="/car/:id"
            element={<CarDetails />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/pagination"
            element={<PaginationCars />}
          />

          <Route
            path="/admin"
            element={<AdminPanel />}
          />

          <Route
            path="/services"
            element={<Services />}
          >

            <Route
              path="service1"
              element={<Service1 />}
            />

            <Route
              path="service2"
              element={<Service2 />}
            />

            <Route
              path="service3"
              element={<Service3 />}
            />

          </Route>

        </Routes>

      </BrowserRouter>

    </ThemeProvider>

  );
}

export default App;