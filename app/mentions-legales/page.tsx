import { Header } from "@/components/header"

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Mentions Légales</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Éditeur du Site</h2>
            <div className="text-slate-300 space-y-2">
              <p>
                <strong>Nom du site :</strong> LeParisSportifs.com
              </p>
              <p>
                <strong>Activité :</strong> Comparateur de sites de paris sportifs
              </p>
              <p>
                <strong>Statut :</strong> Site d'information et de comparaison
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Hébergement</h2>
            <div className="text-slate-300 space-y-2">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Propriété Intellectuelle</h2>
            <p className="text-slate-300 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute
              reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Responsabilité</h2>
            <p className="text-slate-300 leading-relaxed">
              Les informations présentes sur ce site sont fournies à titre informatif. Nous nous efforçons de maintenir
              ces informations à jour, mais ne pouvons garantir leur exactitude absolue. Les utilisateurs sont invités à
              vérifier les conditions directement auprès des opérateurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Jeu Responsable</h2>
            <div className="text-slate-300 space-y-3">
              <p className="text-red-300 font-semibold">
                Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction.
              </p>
              <p>
                <strong>Interdiction aux mineurs :</strong> Les jeux d'argent sont strictement interdits aux moins de 18
                ans.
              </p>
              <p>
                <strong>Aide :</strong> 09 74 75 13 13 (appel non surtaxé) - www.joueurs-info-service.fr
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Droit Applicable</h2>
            <p className="text-slate-300 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. Tout litige sera soumis aux tribunaux
              compétents français.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
