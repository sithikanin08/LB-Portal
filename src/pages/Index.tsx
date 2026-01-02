import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ApplyLBSection from '@/components/ApplyLBSection';
import Guidelines from '@/components/Guidelines';
import DepartmentGrid from '@/components/DepartmentGrid';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background zigzag-bg">
      <ScrollProgress />
      <Navbar />
      <main>
        <div id="hero-section">
          <Hero />
          <ApplyLBSection />
        </div>
        <Guidelines />
        <div id="roles-section">
          <DepartmentGrid />
        </div>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
