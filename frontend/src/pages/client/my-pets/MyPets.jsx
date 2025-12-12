import React from 'react';
import PetCard from '../../../components/pet/PetCard';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router';
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

  const navigate = useNavigate();

  const handleBack = () => {
    console.log("Quay lại trang trước");
    navigate(-1);
  };

  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    const token = localStorage.getItem('token');

    const preMyPets = async () => {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const id = payload.MaKhachHang;
      const petLists = await axios.get(`http://localhost:3000/pets?clientid=${id}`);
      setPets(petLists.data);
    };
    preMyPets();
  }, []);

  const handleAddPet = () => {
    // navigate('/add-pets?');
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
        {pets.map((pet) => (
          <PetCard key={pet.MaThuCung} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default MyPets;