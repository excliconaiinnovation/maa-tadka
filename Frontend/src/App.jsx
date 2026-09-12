import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import WhyChooseUs from "./pages/WhyChooseUs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";


function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F7F3E7] px-5">

      <div className="text-center">

        <div className="font-serif text-8xl font-bold text-[#103F2C]">
          404
        </div>

        <h1 className="mt-3 font-serif text-3xl font-bold text-[#103F2C]">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-7 inline-block bg-[#103F2C] px-7 py-3 text-xs font-bold uppercase text-white"
        >
          Back To Home
        </a>

      </div>

    </main>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/why-us"
          element={<WhyChooseUs />}
        />

        <Route
          path="/recipes"
          element={<Recipes />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;