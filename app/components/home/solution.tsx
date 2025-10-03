export default function Solutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Solutions de Paiement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées à tous les besoins, pour simplifier vos transactions et<br/> développer votre activité.
          </p>
        </div>

        {/* Grille des solutions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 - Terminal de Paiement */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-6">
              <svg className="w-full h-full text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Terminal de Paiement
            </h3>
            <p className="text-gray-600 text-sm mb-2 leading-relaxed">
              Acceptez les paiements par carte en toute simplicité avec nos terminaux POS modernes et fiables.
            </p>
            <a href="#" className="text-orange-500 font-semibold text-sm inline-flex items-center hover:text-orange-600">
              En savoir plus
                <svg className="w-4 h-4 ml-2 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>

            </a>
          </div>

          {/* Card 2 - Paiements Intégrés */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            strokeWidth={1}
                stroke="currentColor"
                className="w-full h-full text-orange-500"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5L3 12l5.25 7.5M15.75 4.5L21 12l-5.25 7.5"
                />
            </svg>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Paiements Intégrés
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Intégrez nos API et passerelles de paiement à votre système existant.
            </p>
            <a href="#" className="text-orange-500 font-semibold text-sm inline-flex items-center hover:text-orange-600">
              En savoir plus
              <svg className="w-4 h-4 ml-2 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>
            </a>
          </div>

          {/* Card 3 - Paiements en Ligne */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
           <div className="w-12 h-12 mb-6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-full h-full text-orange-500"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3a9 9 0 100 18 9 9 0 000-18zM2.25 12h19.5M12 2.25c2.49 2.49 3.75 5.73 3.75 9.75s-1.26 7.26-3.75 9.75M12 2.25c-2.49 2.49-3.75 5.73-3.75 9.75s1.26 7.26 3.75 9.75"
                />
            </svg>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Paiements en Ligne
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Offrez à vos clients une expérience d'achat en ligne simple et sécurisée.
            </p>
            <a href="#" className="text-orange-500 font-semibold text-sm inline-flex items-center hover:text-orange-600">
              En savoir plus
              <svg className="w-4 h-4 ml-2 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>
            </a>
          </div>

          {/* Card 4 - Paiements Alternatifs */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-6">
              <svg className="w-full h-full text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Paiements Alternatifs
            </h3>
            <p className="text-gray-600 text-sm mb-2 leading-relaxed">
              QR Code, paiements différés, et solutions innovantes pour plus de flexibilité.
            </p>
            <a href="#" className="text-orange-500 font-semibold text-sm inline-flex items-center hover:text-orange-600">
              En savoir plus
              <svg className="w-4 h-4 ml-2 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}