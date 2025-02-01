import logo from './logo.svg';
//import './App.css';
import './styles/_global.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 


import Home from './component/Home';
import Mouse from './component/Mouse';
import Project_page from './component/Project_page';

import data from './data/data.json';

const generateSlug = (title) => {
  return title
    .normalize("NFD") // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/[^a-zA-Z0-9\s]/g, "") // Supprime les caractères spéciaux
    .replace(/\s+/g, "_") // Remplace les espaces par "_"
    .toLowerCase(); // Convertit en minuscules
};

const dynamicRoutes = data.fr.sections.map((section) => ({
  path: `/${generateSlug(section.titre)}`,
  element: <Project_page/>,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
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
