
import { Card, CardContent } from '@/components/ui/card';

const Dining = () => {
  const restaurants = [
    {
      name: 'The Crown Restaurant',
      description: 'Exquisite fine dining featuring contemporary Nigerian cuisine and international favorites.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      cuisine: 'Nigerian & Continental',
      hours: '6:00 AM - 11:00 PM'
    },
    {
      name: 'Royal Lounge & Bar',
      description: 'Sophisticated cocktails and light bites in an elegant atmosphere.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      cuisine: 'Cocktails & Light Meals',
      hours: '4:00 PM - 2:00 AM'
    }
  ];

  return (
    <section id="dining" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-hotel-navy mb-6">
            Culinary Excellence
          </h2>
          <p className="font-inter text-lg text-hotel-charcoal max-w-2xl mx-auto">
            Savor exceptional flavors and culinary artistry at our distinguished dining venues, 
            where every meal is a celebration of taste and tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="font-inter text-sm opacity-90">
                    {restaurant.cuisine} • {restaurant.hours}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-inter text-hotel-charcoal">
                  {restaurant.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dining;
