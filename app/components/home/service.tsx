export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Services Complémentaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Au-delà des paiements, nous vous accompagnons dans le développement de votre<br/> activité.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 - Financement d'Entreprise */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
  <svg className="w-full h-full text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
</div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Financement d&apos;Entreprise
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Accédez à des fonds en moins de 24h pour développer votre activité.
            </p>
            <a href="#" className="text-orange-500 font-semibold text-sm inline-flex items-center hover:text-orange-600">
              En savoir plus
              <svg className="w-4 h-4 ml-2 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>
            </a>
          </div>

          {/* Card 2 - Programmes de Fidélité */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <svg className="w-full h-full text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Programmes de Fidélité
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Fidélisez vos clients avec des cartes cadeaux et programmes de points.
            </p>
            <a href="#" className="text-orange-500 font-semibold text-sm inline-flex items-center hover:text-orange-600">
              En savoir plus
              <svg className="w-4 h-4 ml-2 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>
            </a>
          </div>

          {/* Card 3 - Payouts & Incentives */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <svg className="w-full h-full text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Payouts & Incentives
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Gérez vos paiements sortants et motivez vos équipes commerciales.
            </p>
            <a href="#" className="text-orange-500 font-semibold text-sm inline-flex items-center hover:text-orange-600">
              En savoir plus
              <svg className="w-4 h-4 ml-2 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                </svg>
            </a>
          </div>

          {/* Card 4 - Parrainer & Gagner */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mb-4">
              <svg className="w-full h-full text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Parrainer & Gagner
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Développez votre réseau grâce à notre programme de parrainage.
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