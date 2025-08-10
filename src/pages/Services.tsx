import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Sample images (these would be replaced with actual images)
const servicesHeroImage = "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80";
const guestImage = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const hostImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80";

export default function Services() {
  useEffect(() => {
    // Set up scroll animations
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check for elements already in viewport
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesHeroImage} 
            alt="Luxury Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 scroll-animate fade-up">
              Our <span className="text-gold-DEFAULT">Services</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 leading-relaxed scroll-animate fade-up delay-200">
              From furnishing and maintenance to bookings and customer care, 
              we handle every detail — delivering exceptional value and peace of mind.
            </p>
            <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury scroll-animate fade-up delay-300">
              <Link to="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl mb-6 scroll-animate fade-up">
              Comprehensive <span className="text-gold-DEFAULT">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 scroll-animate fade-up delay-200">
              At Valora, we provide tailored services for both guests seeking exceptional accommodations 
              and property owners looking for hassle-free management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* For Guests */}
            <div className="group relative overflow-hidden rounded-xl shadow-xl scroll-animate fade-up">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={guestImage} 
                  alt="Services for Guests" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl text-white">For Guests</h3>
                </div>
              </div>
              <div className="bg-white p-8">
                <p className="text-gray-600 mb-6">
                  Experience the perfect blend of hotel luxury and home comfort with our fully serviced apartments.
                </p>
                <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury">
                  <Link to="/apartments">Browse Apartments</Link>
                </Button>
              </div>
            </div>

            {/* For Hosts */}
            <div className="group relative overflow-hidden rounded-xl shadow-xl scroll-animate fade-up delay-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={hostImage} 
                  alt="Services for Hosts" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl text-white">For Hosts</h3>
                </div>
              </div>
              <div className="bg-white p-8">
                <p className="text-gray-600 mb-6">
                  Transform your property into a profitable investment with our comprehensive management services.
                </p>
                <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury">
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl mb-6 scroll-animate fade-up">
              Guest <span className="text-gold-DEFAULT">Services</span>
            </h2>
            <p className="text-lg text-gray-600 scroll-animate fade-up delay-200">
              Discover the exceptional amenities and services available to all Valora guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow scroll-animate fade-up">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gold-light/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <CardTitle className="font-serif text-2xl">Luxury Accommodations</CardTitle>
                <CardDescription className="text-gray-500">Premium living spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy meticulously designed and elegantly furnished apartments in Cairo's most prestigious locations, 
                  offering the perfect blend of comfort and luxury.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow scroll-animate fade-up delay-100">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gold-light/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <CardTitle className="font-serif text-2xl">24/7 Concierge</CardTitle>
                <CardDescription className="text-gray-500">Round-the-clock assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our dedicated concierge team is available 24/7 to assist with any requests, 
                  from restaurant reservations to local recommendations and transportation arrangements.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow scroll-animate fade-up delay-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gold-light/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <CardTitle className="font-serif text-2xl">Security Services</CardTitle>
                <CardDescription className="text-gray-500">Peace of mind, guaranteed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rest easy with our comprehensive security services, including 24/7 monitoring, 
                  secure access systems, and trained security personnel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-light/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-8 scroll-animate fade-up">
            Ready to Experience Valora Service?
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 scroll-animate fade-up delay-200">
            Whether you're looking for exceptional accommodations or seeking to maximize your property's potential,
            we invite you to connect with us today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 scroll-animate fade-up delay-300">
            <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury">
              <Link to="/apartments">Browse Apartments</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-light/10 btn-luxury">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}