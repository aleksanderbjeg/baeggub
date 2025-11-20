import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartPopup: React.FC = () => {
  const { isPopupOpen, closePopup } = useCart();

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-md p-8 shadow-2xl rounded-md"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-8">Produkt lagt til i handlekurven</h3>
              
              <div className="flex flex-col w-full space-y-3">
                <Link
                  to="/handlekurv"
                  onClick={closePopup}
                  className="w-full py-4 bg-neutral-900 text-white font-sans font-medium text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-md"
                >
                  Gå til handlekurven
                </Link>
                <button
                  onClick={closePopup}
                  className="w-full py-4 bg-transparent border border-neutral-200 text-neutral-900 font-sans font-medium text-sm uppercase tracking-widest hover:border-neutral-900 transition-colors rounded-md"
                >
                  Fortsett å handle
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartPopup;