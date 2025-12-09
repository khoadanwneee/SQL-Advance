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

import CreateInvoicePage from './pages/create-invoice/cip'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />

        {/*Client*/}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<UserProfile />} />
        
        <Route path='/purchased-products' element={<PurchasedProductsPage />} />
        <Route path='/product/detail' element={<ProductDetailPage />} />
        
        <Route path='/my-pets' element={<MyPets />} />
        <Route path='/my-pets/detail' element={<PetDetailPage />} />
        
        <Route path='/medicine-history' element={<MedicalHistoryPage />} />
        <Route path='/vaccination-history' element={<VaccinationHistoryPage />} />
        <Route path='/vaccination/detail' element={<VaccinationDetail />} />

        {/*Cashier*/}
        <Route path='cashier/create-invoice' element={<CreateInvoicePage />} />


      </Routes>
    </>
  );
}

export default App
