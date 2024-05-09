import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

// outlet and navbar
function Layout() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <nav className="comp nav">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/stocks" className={({ isActive }) => isActive ? 'active' : ''}>Stocks</NavLink></li>
          {/* For comparison, this should ideally be a NavLink if you want SPA behavior */}
          <li><a href="/movies">Movies-Anchor</a></li>
        </ul>
      </nav>
      <main>
        {/* matched route's component will render here */}
        <Outlet />
      </main>
    </div>
  );
}


const router = createBrowserRouter([
  { 
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;