
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Suite',
      description: 'Spacious and elegantly appointed suite with panoramic city views, perfect for discerning guests.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      price: 'From ₦45,000',
      features: ['King Size Bed', 'City View', 'Mini Bar', 'Free WiFi', 'Room Service']
    },
    {
      id: 2,
      name: 'Executive Room',
      description: 'Modern comfort meets sophisticated design in our executive accommodations.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      price: 'From ₦35,000',
      features: ['Queen Size Bed', 'Work Desk', 'Complimentary Breakfast', 'Free WiFi', 'Air Conditioning']
    },
    {
      id: 3,
      name: 'Premium Suite',
      description: 'Ultimate luxury with separate living area and premium amenities for an exceptional stay.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      price: 'From ₦65,000',
      features: ['Separate Living Area', 'Premium Amenities', 'Balcony', 'Butler Service', 'Luxury Bathroom']
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-hotel-navy mb-6">
            Luxury Accommodations
          </h2>
          <p className="font-inter text-lg text-hotel-charcoal max-w-2xl mx-auto">
            Choose from our carefully curated selection of rooms and suites, 
            each designed to provide the ultimate in comfort and sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-hotel-gold text-hotel-navy px-3 py-1 rounded-full font-inter font-semibold text-sm">
                  {room.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-hotel-navy mb-3">
                  {room.name}
                </h3>
                <p className="font-inter text-hotel-charcoal mb-4">
                  {room.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, index) => (
                    <li key={index} className="font-inter text-sm text-hotel-charcoal flex items-center">
                      <span className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-hotel-navy hover:bg-hotel-navy-light text-white font-inter">
                  View Details & Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
