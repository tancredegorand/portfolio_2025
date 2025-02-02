import logo from './logo.svg';
//import './App.css';
import './styles/_global.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 


import Home from './component/Home';
import Mouse from './component/Mouse';
import Project_page from './component/Project_page';
import Categories_menu from './component/Categories_menu';

import data from './data/data.json';


const dynamicRoutes = data.fr.sections.map((section) => ({
  path: `/${section.path}`,
  element: <Project_page/>,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/categories_menu",
    element: <Categories_menu/>
  },
  ...dynamicRoutes, 
]);

function App() {
  return (
  <html lang="en">
    <head>
    </head>
    <body>
      <Mouse/>
      <RouterProvider router={router} />
    </body>
  </html>
  );
}

export default App;
