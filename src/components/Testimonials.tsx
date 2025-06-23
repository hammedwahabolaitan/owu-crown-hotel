
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      role: 'Business Executive',
      content: 'Exceptional service and luxurious accommodations. The staff went above and beyond to ensure our corporate event was a complete success.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Wedding Planner',
      content: 'Owucrown Hotel provided the perfect venue for our clients\' dream wedding. The attention to detail and professional service was outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'International Traveler',
      content: 'A hidden gem in Abeokuta! The combination of Nigerian hospitality and international standards makes this hotel truly special.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-hotel-navy mb-6">
            Guest Testimonials
          </h2>
          <p className="font-inter text-lg text-hotel-charcoal max-w-2xl mx-auto">
            Discover what our valued guests say about their experiences at Owucrown Hotel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-hotel-gold text-xl">★</span>
                  ))}
                </div>
                <p className="font-inter text-hotel-charcoal mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-playfair font-bold text-hotel-navy">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-hotel-charcoal opacity-70">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
