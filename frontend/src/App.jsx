import { Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import ProductDetailPage from './pages/product-detail/ProductDetail'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/product/detail' element={<ProductDetailPage />} />

      </Routes>
    </>
  );
}

export default App
