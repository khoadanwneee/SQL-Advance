import HeroSection from "../../components/introduction/HeroSection";
import HeaderBar from "../../components/header/HeaderBar";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts";
import ServicesSection from "../../components/services-section/ServicesSection";
import CustomerReviews from "../../components/customer-reviews/CustomerReviews";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div className="app-container">
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <ServicesSection />
        <CustomerReviews />
      </main>
    </div>
  );
};

export default HomePage;