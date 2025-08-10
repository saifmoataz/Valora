import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Sample images (these would be replaced with actual images)
const heroImage1 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const heroImage2 = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const featureImage1 = "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";
const featureImage2 = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const featureImage3 = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

export default function Home() {
  // References for elements that will be animated
  const logoRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on page load
    setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.classList.add('animate');
      }
    }, 100);

    setTimeout(() => {
      if (image1Ref.current) {
        image1Ref.current.classList.add('animate');
      }
    }, 300);

    setTimeout(() => {
      if (image2Ref.current) {
        image2Ref.current.classList.add('animate');
      }
    }, 500);

    setTimeout(() => {
      if (introRef.current) {
        introRef.current.classList.add('animate');
      }
    }, 700);

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
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background with slight dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        
        {/* Logo Animation */}
        <div 
          ref={logoRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 fade-up text-center"
        >
          <img 
            src={`${import.meta.env.BASE_URL}images/Valora circle.png`} 
            alt="Valora" 
            className="mx-auto h-32 mb-6"
          />
          <h2 className="font-serif text-white text-xl md:text-2xl tracking-wider">
            LUXURY REDEFINED SERVICE APARTMENT
          </h2>
        </div>
        
        {/* Overlapping Images */}
        <div className="absolute inset-0 z-0">
          <img 
            ref={image1Ref}
            src={heroImage1} 
            alt="Luxury Apartment Exterior" 
            className="absolute w-[65%] h-full object-cover left-0 top-0 fade-up"
            style={{ objectPosition: 'center' }}
          />
          <img 
            ref={image2Ref}
            src={heroImage2} 
            alt="Luxury Apartment Interior" 
            className="absolute w-[50%] h-[70%] object-cover right-0 bottom-0 fade-up shadow-2xl"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div 
          ref={introRef}
          className="container mx-auto max-w-4xl text-center fade-up"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-gray-900">
            Welcome to <span className="text-gold-DEFAULT">Valora</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Valora offers a new benchmark in luxury living with high-quality branded apartments 
            located across Cairo's most prestigious neighborhoods. We provide fully serviced, 
            elegantly furnished apartments tailored for comfort, style, and convenience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury">
              <Link to="/apartments">Explore Our Apartments</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-light/10 btn-luxury">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-16 scroll-animate fade-up">
            Exceptional <span className="text-gold-DEFAULT">Experiences</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="scroll-animate fade-up delay-100">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 luxury-image">
                <img 
                  src={featureImage1} 
                  alt="Premium Locations" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-gray-900">Premium Locations</h3>
              <p className="text-gray-600">
                Our apartments are situated in the most prestigious neighborhoods of Cairo,
                providing easy access to key attractions and business districts.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="scroll-animate fade-up delay-300">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 luxury-image">
                <img 
                  src={featureImage2} 
                  alt="Elegant Furnishing" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-gray-900">Elegant Furnishing</h3>
              <p className="text-gray-600">
                Each apartment is meticulously furnished with high-end, luxurious pieces
                that blend comfort with sophisticated design.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="scroll-animate fade-up delay-500">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 luxury-image">
                <img 
                  src={featureImage3} 
                  alt="Full Service" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-gray-900">Full Service</h3>
              <p className="text-gray-600">
                From maintenance to bookings and customer care, we handle every detail,
                ensuring a seamless experience for both guests and hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-8 scroll-animate fade-up">
            Experience Luxury Living Today
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 scroll-animate fade-up delay-200">
            Whether you're seeking a comfortable stay or looking for hassle-free property management,
            Valora delivers exceptional value and peace of mind.
          </p>
          <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-white px-8 py-6 text-lg btn-luxury scroll-animate fade-up delay-300">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}