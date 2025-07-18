import { Star, Shield, CreditCard, Headphones, Spade, Heart, Diamond, Club } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"

export function BonusSection() {
  const topCasinos = bettingSites.slice(0, 3)

  return (
    <section className="py-16 px-4 w-full bg-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-12">
          <div className="portugal-accent-line w-32 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl font-bold text-white mb-6">
            <span className="text-yellow-500">Melhores</span> <span className="text-red-600">Bónus</span>{" "}
            <span className="text-white">de Casino</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Descubra os bónus mais generosos e vantajosos dos casinos online licenciados em Portugal
          </p>
        </div>

        {/* Top 3 Bónus Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {topCasinos.map((casino, index) => (
            <div
              key={casino.id}
              className={`rounded-lg p-6 border-2 relative ${
                index === 0 ? "border-yellow-500 bg-gray-900" : "border-gray-600 bg-gray-900"
              }`}
            >
              {/* Casino Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-4 left-4">
                  <Spade className="w-6 h-6 text-red-600" />
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-red-600" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Diamond className="w-5 h-5 text-red-600" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Club className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-yellow-500"></div>
                <div className="absolute top-1/3 right-1/3 text-yellow-500 text-lg">★</div>
                <div className="absolute bottom-1/3 left-1/3 text-green-500 text-sm">€</div>
              </div>

              <div className="relative z-10">
                {index === 0 && (
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm inline-block">
                      MELHOR BÓNUS
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className=" rounded-lg p-4 inline-block mb-4">
                    <img
                      src={casino.logo || "/placeholder.svg"}
                      alt={casino.name}
                      className="w-[140px] h-[84px] object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{casino.name}</h3>
                </div>

                <div className="text-center mb-6">
                  <div className="text-red-500 font-bold text-sm mb-2 uppercase">Bónus de Boas-Vindas</div>
                  <p className="text-white font-bold text-lg mb-4">{casino.bonus}</p>

                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < casino.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-600 fill-none"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-yellow-500 font-bold">{(casino.rating * 2).toFixed(1)}/10</div>
                </div>

                <Button asChild className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 uppercase">
                  <a href={casino.url} target="_blank" rel="noopener noreferrer">
                    Obter Bónus
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Vantagens dos Casinos Portugueses */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            <span className="text-yellow-500">Porquê Escolher</span>{" "}
            <span className="text-red-600">Casinos Portugueses?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-xl mb-3">Licenciados SRIJ</h4>
              <p className="text-gray-300">
                Todos os casinos são licenciados e regulamentados pelo Serviço de Regulação e Inspeção de Jogos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-white font-bold text-xl mb-3">Pagamentos Locais</h4>
              <p className="text-gray-300">
                MB WAY, Multibanco e outros métodos de pagamento portugueses para máxima conveniência
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-xl mb-3">Suporte em Português</h4>
              <p className="text-gray-300">Atendimento ao cliente 24/7 em português por chat, email e telefone</p>
            </div>
          </div>
        </div>

        {/* Dicas para Maximizar Bónus */}
        <div className="border border-yellow-500 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-yellow-500 text-center mb-8">Dicas para Maximizar os Seus Bónus</h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold mb-2">Leia os Termos e Condições</h4>
                <p className="text-sm">
                  Sempre verifique os requisitos de apostas, jogos elegíveis e prazos antes de aceitar qualquer bónus.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">Gerencie o Seu Bankroll</h4>
                <p className="text-sm">
                  Defina limites claros e nunca aposte mais do que pode permitir-se perder, mesmo com bónus.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">Aproveite Promoções Regulares</h4>
                <p className="text-sm">
                  Além do bónus de boas-vindas, muitos casinos oferecem promoções semanais e mensais.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold mb-2">Escolha Jogos com RTP Alto</h4>
                <p className="text-sm">
                  Prefira jogos com Return to Player (RTP) superior a 96% para maximizar as suas hipóteses.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">Verifique a Conta Rapidamente</h4>
                <p className="text-sm">
                  Complete a verificação da conta o mais cedo possível para evitar atrasos nos levantamentos.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">Contacte o Suporte</h4>
                <p className="text-sm">Em caso de dúvidas sobre bónus, não hesite em contactar o suporte ao cliente.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-900/20 border border-red-600 rounded-lg text-center">
            <p className="text-red-400 font-bold text-lg mb-2">Lembre-se: Jogue com Responsabilidade</p>
            <p className="text-white">
              Os bónus são uma forma de entretenimento. Defina sempre limites e jogue apenas o que pode permitir-se
              perder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
