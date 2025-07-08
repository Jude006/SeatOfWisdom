import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import RootLayout from './Layout/RootLayout';
import EnrollmentPage from './pages/EnrollmentPage';
import SchoolPortal from './pages/SchoolPortal';
import Moderator from './pages/Moderator';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, 
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/gallery', element: <Gallery /> },
        { path: '/contact', element: <Contact /> },
        { path: '/portal', element: <SchoolPortal /> },
        { path: '/signIn', element: <Moderator /> },
        { path: '/enrol', element: <EnrollmentPage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
