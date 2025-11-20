import React from 'react';
import FadeIn from '../components/UI/FadeIn';

const About: React.FC = () => {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-12 text-center">Om Oss</h1>
        </FadeIn>

        <div className="space-y-8 font-serif text-lg text-neutral-600 leading-relaxed">
          <FadeIn delay={0.2}>
            <p>
              BÆGG ble grunnlagt på en enkel idé: Avfall er ressurser på feil sted. I en verden hvor forbruket stadig øker, ønsket vi å ta et skritt tilbake og se på hva vi allerede har.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p>
              Vi ønsket å produsere en bag av kvalitet, som ikke skulle koste skjorta, og som ikke skulle være skadelig for miljøet. Da vi oppdaget store at norske bedrifter hadde rester av høykvalitets materialer som de ikke lenger hadde bruk for, var i ekstase. Dette var materialer som viste seg å tåle det meste– perfekt for å lage norges beste duffelbag.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p>
              Men vi ville mer enn bare kvalitet og bærekraft. Vi bor i et land med lange, mørke vintre. Trygghet langs veien er essensielt. Derfor utviklet vi et system for å bekjempe dette problemet. Vi integrerte reflekser i designet vårt, slik at kundene kunne føle seg skal være Stilig om dagen , og Sikker om Natten.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="font-bold text-neutral-900 mt-8">
              BÆGG - Stilig om Dagen. Sikker om Natten.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default About;