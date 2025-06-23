
import Header from '../components/Header';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Dining from '../components/Dining';
import Events from '../components/Events';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Rooms />
      <Dining />
      <Events />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
