import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Restaurant from "./components/Restaurant";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
// import Groceries from "./components/Groceries";

const Groceries = lazy(()=>import("./components/Groceries"))

const App = () => {

  return (
    <React.Fragment>
      <Header />
      {/* <h1 style={{textAlign:"center"}}>Top Restaurants</h1> */}
     <Outlet/>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
      children:[
        {
          path: "/",
          element: <Body/>
        },
        {
          path:"/contact",
          element: <Contact/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/restaurant/:resId",
          element: <Restaurant/>
        },
        {
          path:"/grocery",
          element: <Suspense fallback={<Shimmer/>}><Groceries/></Suspense>
        }
      ],
      errorElement: <Error/>
    },
   {
    path: "/login",
    element: <Login/>
   }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
