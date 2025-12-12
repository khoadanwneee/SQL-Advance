import HomePage from './pages/home/HomePage'
import { Routes, Route } from 'react-router'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import ProductDetailPage from './pages/product-detail/ProductDetail'
import MyPets from './pages/my-pets/MyPets'
import MedicalHistoryPage from './pages/med-history/MedicalHistoryPage'
import VaccinationHistoryPage from './pages/vaccine-history/VaccinationHistoryPage'
import UserProfile from './pages/user-profile/UserProfile'
import PurchasedProductsPage from './pages/purchased-products/PurchasedProductsPage'
import PetDetailPage from './pages/pet-detail/PetDetailPage'
import VaccinationDetail from './pages/vaccination-detail/vdp'

import CustomerLayout from './layouts/CustomerLayout'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'

import CreateInvoicePage from './pages/cashier/create-invoice/cip'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes - Auth */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin/login' element={<AdminLogin />} />

        {/* Customer Routes */}
        <Route element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/profile' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <UserProfile />
            </ProtectedRoute>
          } />
          
          <Route path='/purchased-products' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <PurchasedProductsPage />
            </ProtectedRoute>
          } />
          <Route path='/product/detail' element={<ProductDetailPage />} />
          
          <Route path='/my-pets' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <MyPets />
            </ProtectedRoute>
          } />
          <Route path='/my-pets/detail' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <PetDetailPage />
            </ProtectedRoute>
          } />
          
          <Route path='/medicine-history' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <MedicalHistoryPage />
            </ProtectedRoute>
          } />
          <Route path='/vaccination-history' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <VaccinationHistoryPage />
            </ProtectedRoute>
          } />
          <Route path='/vaccination/detail' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <VaccinationDetail />
            </ProtectedRoute>
          } />
        </Route>

        {/* Admin Routes */}
        <Route path='/admin' element={
          <ProtectedRoute allowedRoles={['admin', 'staff', 'doctor']}>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='create-invoice' element={<CreateInvoicePage />} />
          {/* Thêm các route admin khác ở đây */}
        </Route>
      </Routes>
    </>
  );
}

export default App
