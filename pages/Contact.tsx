import React from 'react';
import FadeIn from '../components/UI/FadeIn';
import { Copy, Mail, ExternalLink, User } from 'lucide-react';

const Contact: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast here, but simplicity is key
    alert(`E-postadresse kopiert: ${text}`);
  };

  const ContactOption: React.FC<{ 
    role?: string; 
    name?: string; 
    email: string; 
  }> = ({ role, name, email }) => (
    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100 hover:border-neutral-300 transition-colors mb-4">
      {(role || name) && (
        <div className="mb-2">
          {role && <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{role}</p>}
          {name && <p className="font-serif text-lg text-neutral-900">{name}</p>}
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-neutral-900 font-medium">
          <Mail size={18} className="text-neutral-400" />
          <span>{email}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => copyToClipboard(email)}
            className="flex items-center space-x-1 px-3 py-2 bg-white border border-neutral-200 rounded text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
            title="Kopier e-post"
          >
            <Copy size={14} />
            <span className="hidden sm:inline">Kopier</span>
          </button>
          
          <a 
            href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-2 bg-white border border-neutral-200 rounded text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
            title="Send i Gmail"
          >
            <ExternalLink size={14} />
            <span className="hidden sm:inline">Gmail</span>
          </a>

          <a 
            href="https://www.icloud.com/mail/"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-2 bg-white border border-neutral-200 rounded text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
            title="Send i iCloud"
          >
            <ExternalLink size={14} />
            <span className="hidden sm:inline">iCloud</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-16 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h1 className="font-serif text-5xl text-neutral-900 mb-6">Kontakt Oss</h1>
          <p className="font-sans text-neutral-600 text-lg">
            Vi er her for å hjelpe deg. Velg hvem du ønsker å kontakte nedenfor.
          </p>
        </FadeIn>

        <div className="space-y-12">
          {/* General Section */}
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-2xl text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Generelle spørsmål?</h2>
            <ContactOption email="baegg1ub@gmail.com" />
          </FadeIn>

          {/* Staff Section */}
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-2xl text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Spørsmål til en av de ansatte?</h2>
            
            <ContactOption 
              role="Daglig Leder"
              name="Hekmat Jazmati"
              email="muhammadhj@bfk.no"
            />

            <ContactOption 
              role="Økonomiansvarlig"
              name="Henriette Rauland"
              email="henrietra@bfk.no"
            />

            <ContactOption 
              role="Bærekraftsansvarlig"
              name="Emma Sørensen Endrerud"
              email="emmaend@bfk.no"
            />

            <ContactOption 
              role="Markedsansvarlig"
              name="Aleksander Bjeglerud"
              email="aleksanbje@bfk.no"
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;