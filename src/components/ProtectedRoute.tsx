import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

// https://www.geeksforgeeks.org/how-to-create-a-protected-route-with-react-router-dom/
// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
// https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
// https://api.reactrouter.com/v7/functions/react_router.useNavigate.html
// https://vitiya99.medium.com/navigating-the-react-typescript-landscape-with-react-router-0b08c5085cc2
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    // will add my real auth logic here when I get it going. this is just a setup! :)
    const isAuthenticated = !!localStorage.getItem('token');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
}

export default ProtectedRoute;