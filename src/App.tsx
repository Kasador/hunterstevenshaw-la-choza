import './App.css'
// >>> Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Layout from './components/_layout';
import ProtectedRoute from './components/ProtectedRoute'

// https://stackoverflow.com/questions/72234858/how-to-redirect-routes-in-netlify-using-vite-and-react
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="productos" element={<Products />} />
        <Route path="inventario" element={<Inventory />} />
        <Route path="ventas" element={<Sales />} />
        <Route path="usuarios" element={<Users />} />
        <Route path="ajustes" element={<Settings />} />
        <Route path="mensajes" element={<Chat />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
