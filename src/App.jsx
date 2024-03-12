import '../src/routes/layout/layout.scss';
import HomePage from '../src/routes/homePage/HomePage';
import Layout from '../src/routes/layout/Layout';
import ListPage from '../src/routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        }
      ]
    },
  ]);
  return (  
      <RouterProvider router={router} />
  )
}

export default App