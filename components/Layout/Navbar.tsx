import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Hjem', path: '/' },
    { name: 'Om Oss', path: '/om-oss' },
    { name: 'Produkter', path: '/produkter' },
    { name: 'Kontakt Oss', path: '/kontakt-oss' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-neutral-900 font-medium' : 'text-neutral-500 hover:text-neutral-900';
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-neutral-900 hover:opacity-80 transition-opacity">
          BÆGG
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 font-sans ${isActive(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Cart & Mobile Menu Toggle */}
        <div className="flex items-center space-x-6">
          <Link to="/handlekurv" className="relative group">
            <ShoppingBag className="w-6 h-6 text-neutral-900 group-hover:text-neutral-600 transition-colors" strokeWidth={1.5} />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-neutral-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>
          
          <button 
            className="md:hidden text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg uppercase tracking-widest font-sans ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
