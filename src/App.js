import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/recipes",
      element: <Recipes />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);
  return (
    <>
      <Navbar />
      <main className="container fr-main">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}

export default App;
