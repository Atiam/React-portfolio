
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import App from './App';
// import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact.jsx';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
// import Blog from './pages/Blog';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/portfolio',
         element: <Portfolio />,     }
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
