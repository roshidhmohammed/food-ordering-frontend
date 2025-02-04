import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import LandingPage from "./components/LandingPage.js";
import Footer from "./components/Footer.js";


const Groceries = lazy(() => import("./components/Groceries"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const value = "Mohammed Roshidh s";
    setUserName(value);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userName, setUserName, designation:"Founder"}}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Footer/> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/food",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
     
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
