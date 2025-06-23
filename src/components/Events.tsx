
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Events = () => {
  const venues = [
    {
      name: 'Grand Ballroom',
      capacity: 'Up to 300 guests',
      description: 'Elegant ballroom perfect for weddings, galas, and corporate events.',
      features: ['State-of-the-art AV equipment', 'Customizable lighting', 'Dance floor', 'Dedicated bar area']
    },
    {
      name: 'Executive Conference Room',
      capacity: 'Up to 50 guests',
      description: 'Professional meeting space equipped with modern technology.',
      features: ['Video conferencing', 'Projector & screen', 'High-speed WiFi', 'Catering services']
    },
    {
      name: 'Garden Pavilion',
      capacity: 'Up to 150 guests',
      description: 'Beautiful outdoor venue surrounded by lush gardens.',
      features: ['Natural lighting', 'Garden views', 'Weather protection', 'Outdoor bar setup']
    }
  ];

  return (
    <section id="events" className="py-20 bg-hotel-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Exceptional Event Venues
          </h2>
          <p className="font-inter text-lg max-w-2xl mx-auto opacity-90">
            Host unforgettable events in our versatile venues, each designed to accommodate 
            your specific needs with elegance and sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {venues.map((venue, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-2 text-hotel-gold">
                  {venue.name}
                </h3>
                <p className="font-inter text-sm mb-4 opacity-80">
                  {venue.capacity}
                </p>
                <p className="font-inter mb-6">
                  {venue.description}
                </p>
                <ul className="space-y-2">
                  {venue.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-inter text-sm flex items-center">
                      <span className="w-2 h-2 bg-hotel-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-hotel-gold hover:bg-hotel-gold-dark text-hotel-navy font-inter font-semibold px-8 py-4"
          >
            Plan Your Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
