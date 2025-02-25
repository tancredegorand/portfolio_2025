// import logo from './logo.svg';  // Commenté car non utilisé
// import './App.css';
import './styles/_global.scss';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { LanguageProvider, useLanguage } from './context/LanguageContext';

import Home from './component/Home';
import Mouse from './component/Mouse';
import Project_page from './component/Project_page';
import Categories_menu from './component/Categories_menu';

function AppRouter() {
  const { data, loading } = useLanguage();
  const [router, setRouter] = useState(null);

  useEffect(() => {
    if (!loading && data) {
      const dynamicRoutes = data.info.sections.map((section) => ({
        path: `/${section.path}`,
        element: <Project_page />,
      }));

      const newRouter = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
          errorElement: <div>404 Not Found</div>,
        },
        {
          path: "/categories_menu",
          element: <Categories_menu />,
        },
        ...dynamicRoutes,
      ]);

      setRouter(newRouter);
    }
  }, [data, loading]);

  if (loading || !router) {
    return <div>Chargement...</div>;
  }

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <LanguageProvider>
      <Mouse />
      <AppRouter />
    </LanguageProvider>
  );
}

export default App;