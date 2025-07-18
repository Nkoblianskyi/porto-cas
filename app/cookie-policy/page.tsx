import { Header } from "@/components/header"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Politique des Cookies</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Qu'est-ce qu'un Cookie ?</h2>
            <p className="text-slate-300 leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web. Les
              cookies nous aident à mémoriser vos préférences et à améliorer votre expérience de navigation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Comment nous utilisons les Cookies</h2>
            <div className="text-slate-300 space-y-3">
              <p>
                <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site
              </p>
              <p>
                <strong>Cookies analytiques :</strong> Pour analyser le trafic et l'utilisation du site
              </p>
              <p>
                <strong>Cookies de personnalisation :</strong> Pour adapter le contenu à vos préférences
              </p>
              <p>
                <strong>Cookies de sécurité :</strong> Pour protéger votre navigation
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Types de Cookies utilisés</h2>
            <div className="text-slate-300 space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Cookies de session</h4>
                <p>Temporaires, supprimés à la fermeture du navigateur</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Cookies persistants</h4>
                <p>Restent sur votre appareil pendant une durée déterminée</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Gestion des Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              Vous pouvez contrôler et supprimer les cookies selon vos souhaits. Vous pouvez supprimer tous les cookies
              déjà présents sur votre ordinateur et configurer la plupart des navigateurs pour qu'ils les bloquent.
              Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cookies tiers</h2>
            <p className="text-slate-300 leading-relaxed">
              Nous pouvons utiliser des services tiers qui placent également des cookies sur votre appareil. Ces cookies
              sont régis par les politiques de confidentialité respectives de ces tiers.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
