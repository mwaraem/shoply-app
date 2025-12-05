import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from './pages/Register'
import { fetchMe } from "./features/auth/userSlice";
import RequireAdmin from './components/RequireAdmin';
import AdminDashboard from './admin/AdminDashboard';
import AdminProducts from './admin/AdminProducts';
import AdminOrders from './admin/AdminOrders';
import AdminUsers from './admin/AdminUsers';
import { ThemeProvider } from './context/ThemeContext';
import AdminLayout from './admin/AdminLayout';

store.dispatch(fetchMe());

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { index: true, element: <Home /> },
      { path: 'product/:slug', element: <Product /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        element: <RequireAdmin />,
        children: [
          { path: 'admin', element: <AdminLayout /> },
          { path: 'admin/products', element: <AdminProducts /> },
          { path: 'admin/orders', element: <AdminOrders /> },
          { path: 'admin/users', element: <AdminUsers /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);

