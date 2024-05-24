


import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from './Components/About';
import News from './Components/News';
import Pages from './Components/Pages';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const router=createBrowserRouter([
    {path: '/',
      element:<><Pages  /></>,
      children:[
      { path: 'about', element:<About /> },
      { path: 'news', element: <News /> },
      
      
    ]},






  ])
  

  return (
    <>
    <RouterProvider router={router}></RouterProvider>

    

      
    </>
  )
}

export default App
