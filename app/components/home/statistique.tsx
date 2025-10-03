export default function Statistiques() {
  return (
    <section className="py-16" style={{ backgroundColor: '#F5560D' }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Grille des statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Stat 1 */}
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">10k+</div>
            <div className="text-sm">Entreprises Partenaires</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">5M+</div>
            <div className="text-sm">Transactions Mensuelles</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">15+</div>
            <div className="text-sm">Pays Africains</div>
          </div>

          {/* Stat 4 */}
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">99.9%</div>
            <div className="text-sm">Taux de Disponibilité</div>
          </div>

        </div>
      </div>
    </section>
  );
}