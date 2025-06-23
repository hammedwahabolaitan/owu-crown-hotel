
const About = () => {
  return (
    <section id="about" className="py-20 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-hotel-navy mb-6">
              About Owucrown Hotel
            </h2>
            <p className="font-inter text-lg text-hotel-charcoal mb-6">
              Since our establishment, Owucrown Hotel has been synonymous with luxury, 
              elegance, and exceptional hospitality in the heart of Abeokuta. We pride 
              ourselves on creating memorable experiences that exceed our guests' expectations.
            </p>
            <p className="font-inter text-lg text-hotel-charcoal mb-6">
              Our commitment to excellence is reflected in every aspect of our service, 
              from our meticulously designed accommodations to our world-class dining 
              and event facilities. At Owucrown Hotel, we believe that true luxury lies 
              in the perfect blend of comfort, style, and personalized attention.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-hotel-gold mb-2">150+</div>
                <div className="font-inter text-hotel-charcoal">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-hotel-gold mb-2">5★</div>
                <div className="font-inter text-hotel-charcoal">Service Rating</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-hotel-gold mb-2">24/7</div>
                <div className="font-inter text-hotel-charcoal">Concierge Service</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-hotel-gold mb-2">10+</div>
                <div className="font-inter text-hotel-charcoal">Years Excellence</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Owucrown Hotel Architecture"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-hotel-gold/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-hotel-navy/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
