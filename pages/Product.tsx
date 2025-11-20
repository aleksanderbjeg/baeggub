import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import DuffelBagModel from '../components/3D/DuffelBag';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import FadeIn from '../components/UI/FadeIn';

const ProductPage: React.FC = () => {
  const product = PRODUCTS[0];
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Product Visual (3D) */}
          <FadeIn direction="right" className="w-full h-[500px] bg-neutral-50 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
              <Stage environment="city" intensity={0.6}>
                <DuffelBagModel />
              </Stage>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </FadeIn>

          {/* Product Details */}
          <div className="flex flex-col h-full justify-center">
            <FadeIn delay={0.2}>
              <span className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-2">NYHET</span>
              <h1 className="font-serif text-5xl text-neutral-900 mb-6">{product.name}</h1>
              <p className="text-3xl font-sans font-light text-neutral-900 mb-8">
                {product.price},- NOK
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-serif text-neutral-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <ul className="mb-10 space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-600 font-sans">
                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.5}>
              <button
                onClick={() => addToCart(product)}
                className="w-full md:w-auto px-12 py-5 bg-neutral-900 text-white font-sans text-sm font-bold uppercase tracking-widest rounded-md hover:bg-neutral-800 transition-transform active:scale-95 shadow-lg hover:shadow-xl"
              >
                Legg til i handlekurven
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;