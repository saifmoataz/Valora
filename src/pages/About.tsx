import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Sample images (these would be replaced with actual images)
const aboutHeroImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const teamImage1 = "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png";
const teamImage2 = "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png";
const teamImage3 = "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png";

export default function About() {
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
      <section className="relative py-20 md:py-32 overflow-hidden bg-gray-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate fade-up">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
                Our <span className="text-gold-DEFAULT">Story</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with a vision to redefine luxury living in Cairo, Valora emerged from the belief that modern accommodations should seamlessly blend elegance, comfort, and convenience.
              </p>
              <Button className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="scroll-animate fade-up delay-300">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={aboutHeroImage} 
                  alt="Valora Building" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-serif text-2xl">Established 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl mb-6 scroll-animate fade-up">
              Our Mission & <span className="text-gold-DEFAULT">Values</span>
            </h2>
            <p className="text-lg text-gray-600 scroll-animate fade-up delay-200">
              At Valora, we're committed to creating exceptional living experiences that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow scroll-animate fade-up">
              <div className="w-16 h-16 rounded-full bg-gold-light/30 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-4 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">
                We are dedicated to excellence in every detail, from design and furnishings to customer service and property management.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow scroll-animate fade-up delay-200">
              <div className="w-16 h-16 rounded-full bg-gold-light/30 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-4 text-center">Integrity</h3>
              <p className="text-gray-600 text-center">
                We operate with transparency, honesty, and fairness in all our dealings with clients, partners, and staff.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow scroll-animate fade-up delay-400">
              <div className="w-16 h-16 rounded-full bg-gold-light/30 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-4 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                We constantly seek innovative solutions to enhance living experiences and property management services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl mb-6 scroll-animate fade-up">
              Our <span className="text-gold-DEFAULT">Team</span>
            </h2>
            <p className="text-lg text-gray-600 scroll-animate fade-up delay-200">
              Meet the dedicated professionals behind Valora's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="scroll-animate fade-up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={teamImage1} 
                  alt="Mohamed Osam - CEO" 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">Mohamed Osam</h3>
                  <p className="text-gold-DEFAULT font-medium mb-4">CEO & Founder</p>
                  <p className="text-gray-600">
                    With over 10 years of experience in luxury real estate and hospitality,
                    Sarah leads Valora with vision and passion.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="scroll-animate fade-up delay-200">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={teamImage2} 
                  alt="Moataz Osam - COO" 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">Moataz Osam</h3>
                  <p className="text-gold-DEFAULT font-medium mb-4">Chief Operations Officer</p>
                  <p className="text-gray-600">
                    Moataz oversees all operational aspects of Valora, ensuring
                    seamless service delivery and exceptional guest experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="scroll-animate fade-up delay-400">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={teamImage3} 
                  alt="Baheej Mahros - Chief Financial Officer" 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">Baheej Mahros</h3>
                  <p className="text-gold-DEFAULT font-medium mb-4">Chief Financial Officer</p>
                  <p className="text-gray-600">
                    Baheej is the Chief Financial Officer, overseeing the company’s financial strategy, budgeting, and overall fiscal health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl mb-6 scroll-animate fade-up">
              Our <span className="text-gold-DEFAULT">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 scroll-animate fade-up delay-200">
              From vision to reality, the evolution of Valora.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-DEFAULT/30"></div>

            {/* Timeline Item 1 */}
            <div className="relative mb-16 scroll-animate fade-up">
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-gold-DEFAULT text-gold-DEFAULT">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="mt-4 text-xl font-serif text-gold-DEFAULT text-center">2020</div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="mt-2 bg-white p-6 shadow-lg rounded-lg">
                <h3 className="font-serif text-2xl mb-3">Foundation</h3>
                <p className="text-gray-600">
                  Valora was established with a vision to transform luxury living in Cairo,
                  starting with our first property in Zamalek.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative mb-16 scroll-animate fade-up delay-200">
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-gold-DEFAULT text-gold-DEFAULT">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="mt-4 text-xl font-serif text-gold-DEFAULT text-center">2022</div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="mt-2 bg-white p-6 shadow-lg rounded-lg">
                <h3 className="font-serif text-2xl mb-3">Expansion</h3>
                <p className="text-gray-600">
                  We expanded our portfolio to include properties in New Cairo and 
                  Maadi, establishing Valora as a premier luxury brand.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative mb-16 scroll-animate fade-up delay-400">
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-gold-DEFAULT text-gold-DEFAULT">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="mt-4 text-xl font-serif text-gold-DEFAULT text-center">2025</div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="mt-2 bg-white p-6 shadow-lg rounded-lg">
                <h3 className="font-serif text-2xl mb-3">Today</h3>
                <p className="text-gray-600">
                  Today, Valora manages a portfolio of 50+ luxury properties across
                  Cairo's most prestigious neighborhoods, with plans for further expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-light/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-8 scroll-animate fade-up">
            Join the Valora Family
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 scroll-animate fade-up delay-200">
            Whether you're seeking exceptional accommodations or looking to partner with us,
            we invite you to be part of the Valora experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 scroll-animate fade-up delay-300">
            <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-light/10 btn-luxury">
              <Link to="/apartments">View Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}