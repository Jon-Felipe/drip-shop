import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

function ProtectedRouteLayout() {
  const { user } = useAppSelector((store) => store.user);

  return user ? <Outlet /> : <Navigate to='/login' replace />;
}

export default ProtectedRouteLayout;
