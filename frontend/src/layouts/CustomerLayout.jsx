import { Outlet } from 'react-router';
import HeaderBar from '../components/header/HeaderBar';
import Footer from '../components/footer/Footer';

const CustomerLayout = () => {
  return (
    <div>
      <HeaderBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
