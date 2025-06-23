
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Map-pin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-hotel-navy mb-6">
            Get In Touch
          </h2>
          <p className="font-inter text-lg text-hotel-charcoal max-w-2xl mx-auto">
            Ready to experience luxury at Owucrown Hotel? Contact us today to make your reservation 
            or inquire about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-hotel-navy mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-hotel-gold rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-hotel-navy" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-hotel-navy">Phone</h4>
                    <p className="font-inter text-hotel-charcoal">+234 803 XXX XXXX</p>
                    <p className="font-inter text-hotel-charcoal">+234 809 XXX XXXX</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-hotel-gold rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-hotel-navy" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-hotel-navy">Email</h4>
                    <p className="font-inter text-hotel-charcoal">info@owucrownhotel.com</p>
                    <p className="font-inter text-hotel-charcoal">reservations@owucrownhotel.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-hotel-gold rounded-full flex items-center justify-center mr-4">
                    <Map-pin className="w-6 h-6 text-hotel-navy" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-hotel-navy">Location</h4>
                    <p className="font-inter text-hotel-charcoal">Abeokuta, Ogun State</p>
                    <p className="font-inter text-hotel-charcoal">Nigeria</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Contact */}
            <div className="mt-8">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-inter">
                Contact us on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-hotel-navy mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter text-sm font-medium text-hotel-charcoal mb-2">
                        First Name
                      </label>
                      <Input className="border-gray-300 focus:border-hotel-gold" />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium text-hotel-charcoal mb-2">
                        Last Name
                      </label>
                      <Input className="border-gray-300 focus:border-hotel-gold" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-hotel-charcoal mb-2">
                      Email Address
                    </label>
                    <Input type="email" className="border-gray-300 focus:border-hotel-gold" />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-hotel-charcoal mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" className="border-gray-300 focus:border-hotel-gold" />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-hotel-charcoal mb-2">
                      Subject
                    </label>
                    <Input className="border-gray-300 focus:border-hotel-gold" />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-hotel-charcoal mb-2">
                      Message
                    </label>
                    <Textarea 
                      rows={5} 
                      className="border-gray-300 focus:border-hotel-gold resize-none" 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-hotel-navy hover:bg-hotel-navy-light text-white font-inter font-semibold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
