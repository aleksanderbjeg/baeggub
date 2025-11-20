import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-neutral-900 block mb-6">
              BÆGG
            </Link>
            <p className="text-neutral-500 font-sans max-w-xs">
              Stilig om Dagen. Sikker om Natten.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6">Utforsk</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-neutral-500 hover:text-neutral-900 transition-colors">Hjem</Link></li>
              <li><Link to="/produkter" className="text-neutral-500 hover:text-neutral-900 transition-colors">Produkter</Link></li>
              <li><Link to="/om-oss" className="text-neutral-500 hover:text-neutral-900 transition-colors">Om Oss</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6">Kundeservice</h4>
            <ul className="space-y-4">
              <li><Link to="/kontakt-oss" className="text-neutral-500 hover:text-neutral-900 transition-colors">Kontakt Oss</Link></li>
              <li><Link to="/handlekurv" className="text-neutral-500 hover:text-neutral-900 transition-colors">Handlekurv</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 font-sans">
          <p>&copy; {new Date().getFullYear()} BÆGG. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;