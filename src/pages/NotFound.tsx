import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
      <div className="space-y-8 max-w-md">
        <div className="space-y-2">
          <h1 className="font-serif text-6xl font-bold bg-gradient-to-r from-gold-DEFAULT to-gold-light bg-clip-text text-transparent">404</h1>
          <h2 className="text-3xl font-serif text-gray-900">Page Not Found</h2>
        </div>
        
        <p className="text-lg text-gray-600">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black btn-luxury">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-light/10 btn-luxury">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}