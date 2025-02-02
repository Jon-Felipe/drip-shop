import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { store } from './store.tsx';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages & components
import Home from './pages//Home/Home.tsx';
import Products from './pages/Products.tsx';
import SingleProduct from './pages/SingleProduct.tsx';
import Cart from './pages/Cart.tsx';
import Department from './pages/Department/Department.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';
import Profile from './pages/Profile.tsx';
import ProfileLayout from './components/profile/ProfileLayout.tsx';
import UpdatePassword from './pages/UpdatePassword.tsx';
import ProtectedRouteLayout from './components/ProtectedRouteLayout.tsx';
import Checkout from './pages/Checkout.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='department/:department' element={<Department />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route element={<ProtectedRouteLayout />}>
          <Route
            path='profile'
            element={<ProfileLayout />}
            children={
              <Route>
                <Route path='' element={<Profile />} />
                <Route path='update-password' element={<UpdatePassword />} />
              </Route>
            }
          />
        </Route>
      </Route>
      <Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
