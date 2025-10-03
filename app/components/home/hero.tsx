



export default function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center  min-h-[250px] "
        style={{
          backgroundImage: "url('/images/home.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenu */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-10 py-20">
          {/* Colonne texte */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white mb-4 mt-14">
              Solutions de<br />paiement simples<br />pour l&apos;Afrique digitale
            </h1>
            <p className="text-xl text-white">
              Simplifiez vos transactions, développez votre entreprise
            </p>
            <p className="text-xl text-white mb-6">
              et participez à l&apos;inclusion<br />financière avec nos solutions de paiement omnicanal.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                className="bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:border hover:border-2 hover:border-orange-500 transition"
                style={{ color: "#F5560D" }}
              >
                Découvrir nos solutions
              </button>
              <button className="text-white px-6 py-3 rounded-lg font-semibold text-sm border border-white hover:bg-white hover:text-[#F5560D] transition">
                Contactez-nous
              </button>
            </div>
          </div>

          {/* Colonne image */}
          <div className="flex justify-center lg:justify-end flex-1">
            <img
              src="/images/container.png"
              alt="Description"
              className="w-full max-w-xl rounded-lg shadow-2xl mt-8"
            />
          </div>
        </div>

        {/* Cartes */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 pb-16">
          {/*carte 1 */}
          <div className=" bg-white/10 p-6 rounded-xl text-left">
            <div className="w-16 h-12 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#BFDBFE" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Sécurité Garantie</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Protection des données et transactions securisées conforme aux standards internationaux
            </p>
          </div>
         
  {/* Card 2 - Rapidité */}
          <div className="bg-white/10  rounded-xl p-6 text-left hover:bg-opacity-100 transition-all">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color:'#BFDBFE'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              Rapidité
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Transactions en temps réel pour une expérience fluide et efficace
            </p>
          </div>

          {/* Card 3 - Inclusion Financière */}
          <div className="bg-white/10  rounded-xl p-6 text-left hover:bg-opacity-100 transition-all">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color:'#BFDBFE'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              Inclusion Financière
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Accès aux services financiers pour tous, partout en Afrique
            </p>
          </div>

          {/* Card 4 - Omnicanal */}
          <div className="bg-white/10  rounded-xl p-6 text-left hover:bg-opacity-100 transition-all">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
                style={{color:'#BFDBFE'}}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3a9 9 0 100 18 9 9 0 000-18zM2.25 12h19.5M12 2.25c2.49 2.49 3.75 5.73 3.75 9.75s-1.26 7.26-3.75 9.75M12 2.25c-2.49 2.49-3.75 5.73-3.75 9.75s1.26 7.26 3.75 9.75"
                />
            </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              Omnicanal
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Une solution unifiée pour tous vos canaux de paiement
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
