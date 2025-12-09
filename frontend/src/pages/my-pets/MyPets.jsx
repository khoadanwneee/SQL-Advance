import React from 'react';
import PetCard from '../../components/pet/PetCard';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import './MyPets.css'

const MyPets = () => {
  // Dữ liệu giả lập giống trong hình ảnh bạn gửi
  const petsData = [
    {
      id: 1,
      name: 'Bobby',
      age: 3,
      species: 'Chó',
      breed: 'Golden Retriever',
      gender: 'Đực',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' // Thay bằng ảnh thật
    },
    {
      id: 2,
      name: 'Miu Miu',
      age: 2,
      species: 'Mèo',
      breed: 'British Shorthair',
      gender: 'Cái',
      image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' // Thay bằng ảnh thật
    },
    {
      id: 3,
      name: 'Lucky',
      age: 1,
      species: 'Chó',
      breed: 'Poodle',
      gender: 'Đực',
      image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' // Thay bằng ảnh thật
    }
  ];

  const handleBack = () => {
    console.log("Quay lại trang trước");
    // Thêm logic điều hướng tại đây (ví dụ: navigate(-1))
  };

  const handleAddPet = () => {
    console.log("Thêm thú cưng mới");
  };

  return (
    <div className="my-pets-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-left">
          <button className="back-button" onClick={handleBack}>
            <FaArrowLeft />
          </button>
          <h1 className="page-title">Thú cưng của tôi</h1>
        </div>
        
        <button className="add-pet-btn" onClick={handleAddPet}>
          <FaPlus /> Thêm thú cưng
        </button>
      </div>

      {/* Grid danh sách */}
      <div className="pets-grid">
        {petsData.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default MyPets;