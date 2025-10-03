export default function Commencer() {

    module.exports = {
  theme: {
    extend: {
      colors: {
        brandOrange: '#F5560D',
      },
    },
  },
};

  return (
    <section className="py-20 "style={{ backgroundColor: '#F5560D' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-3xl font-bold text-white mb-6">
          Prêt à révolutionner vos paiements ?
        </h2>
        
        {/* Description */}
        <p className="text-xl text-white mb-10 leading-relaxed">
          Rejoignez des milliers d&apos;entreprises qui font confiance à AfriPay pour leurs solutions de<br/> paiement et de financement.
        </p>
        
        {/* Bouton CTA */}
        <button className="bg-white px-10 py-4 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg" style={{ color: '#F5560D' }}>
          Commencer maintenant
        </button>
        
      </div>
    </section>
  );
}