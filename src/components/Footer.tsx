import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white text-lg font-extrabold mb-3">
            Teranga<span className="text-brand-light">Mode</span>
          </h3>
          <p className="leading-relaxed">
            La mode tendance au meilleur prix, livrée partout au Sénégal. Qualité, style et
            teranga : notre promesse depuis Dakar.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wide">Boutique</h4>
          <ul className="space-y-2">
            <li><Link to="/boutique?categorie=femme" className="hover:text-brand-light">Femme</Link></li>
            <li><Link to="/boutique?categorie=homme" className="hover:text-brand-light">Homme</Link></li>
            <li><Link to="/boutique?categorie=enfant" className="hover:text-brand-light">Enfant</Link></li>
            <li><Link to="/boutique?promo=1" className="hover:text-brand-light">Promotions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wide">Aide</h4>
          <ul className="space-y-2">
            <li>Livraison &amp; retours</li>
            <li>Guide des tailles</li>
            <li>Paiement sécurisé</li>
            <li>Nous contacter</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2">
            <li>📍 Dakar, Sénégal</li>
            <li>📞 +221 77 000 00 00</li>
            <li>✉️ contact@terangamode.sn</li>
            <li className="pt-2 text-lg space-x-3">
              <span title="Wave">💙</span>
              <span title="Orange Money">🧡</span>
              <span title="Carte bancaire">💳</span>
              <span title="Paiement à la livraison">💵</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-xs py-4 px-4">
        © {new Date().getFullYear()} Teranga Mode — Tous droits réservés.
      </div>
    </footer>
  )
}
