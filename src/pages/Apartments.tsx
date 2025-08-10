import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lightbox } from '@/components/ui/lightbox';

// Sample apartment data - this would typically come from an API or CMS
const apartments = [
  {
    id: 1,
    name: "Zamalek Penthouse",
    location: "Zamalek, Cairo",
    bedrooms: 3,
    bathrooms: 2,
    size: "210",
    price: "350",
    description: "Luxurious penthouse apartment with panoramic views of the Nile. Features include a spacious terrace, gourmet kitchen, and premium furnishings throughout.",
    features: ["Nile View", "Terrace", "Smart Home", "24/7 Security", "Gym Access"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
    ]
  },
  {
    id: 2,
    name: "Maadi Garden Suite",
    location: "Maadi, Cairo",
    bedrooms: 2,
    bathrooms: 2,
    size: "175",
    price: "275",
    description: "Elegant garden-level apartment in a quiet residential area of Maadi. Featuring a private garden, open-concept living space, and modern amenities.",
    features: ["Private Garden", "High Ceilings", "Fully Furnished", "Housekeeping", "Concierge"],
    images: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600563438938-a9a27215d440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ]
  },
  {
    id: 3,
    name: "New Cairo Executive",
    location: "New Cairo, Cairo",
    bedrooms: 4,
    bathrooms: 3,
    size: "250",
    price: "400",
    description: "Spacious and modern apartment in New Cairo's business district. Perfect for executives and families seeking comfort and convenience.",
    features: ["Pool Access", "Business Center", "Family-friendly", "Parking", "Balcony"],
    images: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600566752734-2a0e4dcfa2f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ]
  },
  {
    id: 4,
    name: "Garden City Classic",
    location: "Garden City, Cairo",
    bedrooms: 3,
    bathrooms: 2,
    size: "190",
    price: "320",
    description: "Charming apartment in a historic building in Garden City. Features high ceilings, ornate details, and modern updates throughout.",
    features: ["Historic Building", "Renovated", "City Views", "Doorman", "Elevator"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1599327286062-66dedb91ebbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ]
  }
];

export default function Apartments() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

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

  const openLightbox = (apartment, imageIndex = 0) => {
    setLightboxImages(apartment.images);
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 scroll-animate fade-up">
              Our <span className="text-gold-DEFAULT">Apartments</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed scroll-animate fade-up delay-200">
              Explore our collection of meticulously furnished luxury apartments
              located in Cairo's most prestigious neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {apartments.map((apartment, index) => (
              <div 
                key={apartment.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow scroll-animate fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Apartment Image */}
                <div 
                  className="relative h-80 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(apartment)}
                >
                  <img 
                    src={apartment.images[0]} 
                    alt={apartment.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="bg-gold-DEFAULT text-black px-3 py-1 rounded-full text-sm font-medium">
                      ${apartment.price} / night
                    </span>
                  </div>
                </div>

                {/* Apartment Details */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">{apartment.name}</h3>
                  <p className="text-gray-600 flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {apartment.location}
                  </p>

                  <div className="flex justify-between mb-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1 text-gold-DEFAULT">
                        <path d="M3 22v-7"></path>
                        <path d="M19 22v-7"></path>
                        <path d="M5 11v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"></path>
                        <path d="M9 11v0"></path>
                        <path d="M15 11v0"></path>
                        <rect width="18" height="4" x="3" y="11" rx="1"></rect>
                      </svg>
                      <span className="text-gray-700">{apartment.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1 text-gold-DEFAULT">
                        <path d="M9 6 4 7l5 1"></path>
                        <path d="M4 7v4a2 2 0 0 0 2 2h2"></path>
                        <path d="M20 17a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2Z"></path>
                        <path d="m20 17-2-5"></path>
                        <path d="M15 17v-1.5A1.5 1.5 0 0 0 13.5 14H12"></path>
                      </svg>
                      <span className="text-gray-700">{apartment.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1 text-gold-DEFAULT">
                        <rect width="20" height="20" x="2" y="2" rx="2"></rect>
                        <rect width="8" height="8" x="8" y="8" rx="1"></rect>
                      </svg>
                      <span className="text-gray-700">{apartment.size} m²</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2">{apartment.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {apartment.features.slice(0, 3).map((feature, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {apartment.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        +{apartment.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <Button 
                      onClick={() => openLightbox(apartment)}
                      variant="outline"
                      className="border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-light/10 btn-luxury"
                    >
                      View Gallery
                    </Button>
                    <Button 
                      asChild
                      className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury"
                    >
                      <a href="/contact">Book Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-8 scroll-animate fade-up">
            Find Your Perfect Stay
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 scroll-animate fade-up delay-200">
            Don't see what you're looking for? Contact us for personalized assistance
            in finding an apartment that meets your specific needs and preferences.
          </p>
          <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-white px-8 py-6 text-lg btn-luxury scroll-animate fade-up delay-300">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        open={lightboxOpen}
        setOpen={setLightboxOpen}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
}