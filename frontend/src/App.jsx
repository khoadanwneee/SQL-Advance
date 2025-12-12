import HomePage from './pages/home/HomePage'
import { Routes, Route } from 'react-router'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import ProductDetailPage from './pages/client/product-detail/ProductDetail'
import MyPets from './pages/client/my-pets/MyPets'
import MedicalHistoryPage from './pages/client/med-history/MedicalHistoryPage'
import VaccinationHistoryPage from './pages/client/vaccine-history/VaccinationHistoryPage'
import UserProfile from './pages/client/user-profile/UserProfile'
import PurchasedProductsPage from './pages/client/purchased-products/PurchasedProductsPage'
import PetDetailPage from './pages/client/pet-detail/PetDetailPage'
import VaccinationDetail from './pages/client/vaccination-detail/vdp'

import CustomerLayout from './layouts/CustomerLayout'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'

import CreateInvoicePage from './pages/cashier/create-invoice/cip'
import InventoryManagement from './pages/cashier/inventory-manage/ims'
import AppointmentManagement from './pages/cashier/appointment-mangage/apm'

import VaccinationBooking from './pages/client/book-vaccination/vpb'
import BookingAppointment from './pages/client/book-apm/book-apm'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes - Auth */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin/login' element={<AdminLogin />} />   
        <Route path='/cashier/inventory-management' element={<InventoryManagement />} />
        <Route path='/cashier/appointment-management' element={<AppointmentManagement />} />


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

          <Route path='/book-appointment' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <BookingAppointment />
            </ProtectedRoute>
          } />

          <Route path='/book-vaccine' element={
            <ProtectedRoute allowedRoles={['customer']}>
              <VaccinationBooking />
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
