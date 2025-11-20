import React from 'react';
import { useCart } from '../context/CartContext';
import FadeIn from '../components/UI/FadeIn';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-3xl text-neutral-900 mb-6">Din handlekurv er tom</h1>
        <Link to="/produkter" className="px-8 py-4 bg-neutral-900 text-white rounded-md font-sans uppercase tracking-widest text-sm hover:bg-neutral-800 transition-colors">
          Gå til butikken
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl mb-12 text-neutral-900">Handlekurv</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <FadeIn key={item.id} className="flex flex-col sm:flex-row items-center gap-6 border-b border-neutral-100 pb-8">
                {/* Thumbnail - Using a static image for cart as rendering 3D here is heavy */}
                <div className="w-24 h-24 bg-neutral-100 rounded-md overflow-hidden flex-shrink-0">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                </div>

                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-serif text-xl text-neutral-900">{item.name}</h3>
                  <p className="text-neutral-500 text-sm font-sans">{item.price},- NOK</p>
                </div>

                <div className="flex items-center border border-neutral-200 rounded-md">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 text-neutral-500 hover:text-neutral-900"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-sans text-sm font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 text-neutral-500 hover:text-neutral-900"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-neutral-400 hover:text-red-500 transition-colors p-2"
                >
                  <Trash2 size={20} />
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Summary / Checkout */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.2} className="bg-neutral-50 p-8 rounded-lg sticky top-24">
              <h3 className="font-serif text-xl mb-6">Oversikt</h3>
              
              <div className="flex justify-between mb-4 font-sans text-neutral-600">
                <span>Frakt</span>
                <span>Gratis</span>
              </div>
              
              <div className="flex justify-between mb-8 font-sans font-bold text-lg text-neutral-900 border-t border-neutral-200 pt-4">
                <span>Totalt</span>
                <span>{cartTotal},- NOK</span>
              </div>

              <button className="w-full py-4 bg-neutral-900 text-white font-sans font-bold uppercase tracking-widest rounded-md hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2">
                <span>Gå til betaling</span>
                <ArrowRight size={16} />
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
