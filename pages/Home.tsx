import React from 'react';
import HeroScene from '../components/3D/HeroScene';
import FadeIn from '../components/UI/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Leaf, RefreshCw } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 z-0 bg-neutral-50">
          <HeroScene />
        </div>
        
        <div className="relative z-10 flex-grow flex flex-col justify-end pb-24 px-6 max-w-7xl mx-auto w-full pointer-events-none">
          <div className="pointer-events-auto md:w-1/2">
            <FadeIn delay={0.2}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-neutral-900 mb-6 leading-tight">
                Stilig om Dagen. <br/><span className="italic text-neutral-400">Sikker om Natten.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="font-sans text-lg text-neutral-600 mb-10 max-w-md">
                DØFFELBÆGG er utviklet for å være både stilig og praktisk-perfekt for hverdagen.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <Link 
                to="/produkter" 
                className="inline-flex items-center space-x-2 bg-neutral-900 text-white px-8 py-4 rounded-md font-sans font-medium uppercase tracking-widest hover:bg-neutral-800 transition-all hover:space-x-4"
              >
                <span>Se Produktet</span>
                <ArrowRight size={18} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hva Driver Vi Med Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-12">HVA DRIVER VI MED</h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="font-serif text-xl md:text-2xl text-neutral-600 leading-relaxed">
              "Vi i BÆGG skaper duffelbagger laget av restematerialer som bedrifter ikke lenger har bruk for. Materialet vi bruker er ekstremt slitesterkt og av høy kvalitet – en bag som er bygget for å vare. I tillegg har vi innebygd refleks som en del av designet, som man ikke legger merke til når det er dagslys ute. Men når mørket faller, kan det utgjøre forskjellen mellom liv og død. Målet vårt er å kombinere stil, bærekraft og trygghet i ett og samme produkt."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn delay={0.1} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <Leaf className="w-8 h-8 text-neutral-900" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-4">Bærekraftig</h3>
            <p className="text-neutral-500 font-sans">Laget av restemateriale – gammelt materiale får nytt liv.</p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <ShieldCheck className="w-8 h-8 text-neutral-900" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-4">Trygghet</h3>
            <p className="text-neutral-500 font-sans">Integrert refleks, som holder deg sikker om natten.</p>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <RefreshCw className="w-8 h-8 text-neutral-900" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-4">Varighet</h3>
            <p className="text-neutral-500 font-sans">Materialer av høy kvalitet bygget for å vare livet ut.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;