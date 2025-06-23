
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Owucrown Hotel Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Experience Luxury
          <span className="block text-hotel-gold">& Elegance</span>
        </h1>
        <p className="font-inter text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
          Discover unparalleled comfort and sophistication at Owucrown Hotel, 
          where every moment becomes a cherished memory in the heart of Abeokuta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-hotel-gold hover:bg-hotel-gold-dark text-hotel-navy font-inter font-semibold px-8 py-6 text-lg"
          >
            Reserve Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-hotel-navy font-inter font-semibold px-8 py-6 text-lg"
          >
            Explore Rooms
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
