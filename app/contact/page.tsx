import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Nous Contacter</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Pour toute question, suggestion ou demande d'information concernant notre comparateur de sites de paris
                sportifs, n'hésitez pas à nous contacter.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Informations de Contact</h2>
            <div className="text-slate-300 space-y-3">
              <p>
                <strong>Email général :</strong> contact@leparissportifs.com
              </p>
              <p>
                <strong>Questions techniques :</strong> support@leparissportifs.com
              </p>
              <p>
                <strong>Partenariats :</strong> partenaires@leparissportifs.com
              </p>
              <p>
                <strong>Confidentialité :</strong> privacy@leparissportifs.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Temps de Réponse</h2>
            <p className="text-slate-300 leading-relaxed">
              Nous nous efforçons de répondre à tous les messages dans un délai de 48 heures ouvrables. Pour les
              demandes urgentes, veuillez le préciser dans l'objet de votre message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Aide au Jeu Responsable</h2>
            <div className="text-slate-300 space-y-3 bg-red-900/20 border border-red-700/50 rounded-lg p-6">
              <p className="text-red-300 font-semibold">
                Si vous avez des problèmes liés au jeu, des ressources d'aide sont disponibles :
              </p>
              <p>
                <strong>Ligne d'écoute :</strong> 09 74 75 13 13 (appel non surtaxé)
              </p>
              <p>
                <strong>Site web :</strong> www.joueurs-info-service.fr
              </p>
              <p>
                <strong>Chat en ligne :</strong> Disponible sur le site Joueurs Info Service
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Avertissement</h2>
            <p className="text-slate-300 leading-relaxed">
              LeParisSportifs.com est un site d'information et de comparaison indépendant. Nous ne sommes pas un
              opérateur de jeux d'argent et ne proposons pas de services de paris. Tous les paris doivent être effectués
              directement auprès des opérateurs licenciés.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
