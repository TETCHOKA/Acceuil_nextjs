export default function Temoignages() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous aidons les entreprises à prospérer à travers le continent.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Témoignage 1 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/images/image1.png" 
                alt="Aminata Diop" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">Aminata Diop</h4>
                <p className="text-sm text-gray-600">Restaurant Teranga, Dakar</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              &quot;AfriPay a transformé la façon dont nous gérons les paiements. Nos clients peuvent maintenant payer comme ils le souhaitent, et nous recevons les fonds instantanément.&quot;
            </p>
          </div>

          {/* Témoignage 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/images/image.png" 
                alt="Kofi Mensah" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">Kofi Mensah</h4>
                <p className="text-sm text-gray-600">Boutique en ligne GhanaCraft</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              &quot;Le programme de financement d&apos;AfriPay nous a permis d&apos;agrandir notre boutique en ligne. Le processus était simple et les fonds disponibles en 24h.&quot;
            </p>
          </div>

          {/* Témoignage 3 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/images/image3.png" 
                alt="Fatou Ndiaye" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">Fatou Ndiaye</h4>
                <p className="text-sm text-gray-600">Pharmacie Moderne, Abidjan</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              &quot;Nos clients adorent notre programme de fidélité. C&apos;est simple à gérer pour nous et valorisant pour eux. Nos ventes ont augmenté de 30% depuis la mise en place.&quot;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}