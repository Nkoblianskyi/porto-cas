import { Star, Spade, Heart, Diamond, Club } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  // Отримуємо перший сайт з мок-даних (найкращий за рейтингом)
  const ourChoice = bettingSites[0]

  return (
    <section className="py-12 px-4 w-full bg-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="bg-gray-900 border border-gray-700 rounded-lg">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="portugal-accent-line w-32 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-yellow-500">A Nossa</span> <span className="text-red-600">Escolha</span>
              </h2>
              <p className="text-gray-300 text-xl">
                Após análise rigorosa, este é o nosso casino recomendado para jogadores portugueses
              </p>
            </div>

            {/* Cartão Principal */}
            <div className="border-2 border-yellow-500 rounded-lg p-8 mb-8 relative">
              {/* Portuguese flag accent */}
              <div className="portugal-accent-line mb-6 rounded-full"></div>

              {/* Casino Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none rounded-lg">
                <div className="absolute top-6 left-6">
                  <Spade className="w-10 h-10 text-red-600" />
                </div>
                <div className="absolute top-6 right-6">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <div className="absolute top-20 left-20">
                  <Diamond className="w-6 h-6 text-red-600" />
                </div>
                <div className="absolute top-20 right-20">
                  <Club className="w-9 h-9 text-white" />
                </div>
                <div className="absolute bottom-6 left-10">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <div className="absolute bottom-10 right-10">
                  <Spade className="w-7 h-7 text-white" />
                </div>
                <div className="absolute bottom-20 left-6">
                  <Club className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-6 right-24">
                  <Diamond className="w-8 h-8 text-red-600" />
                </div>
                <div className="absolute top-16 left-1/3 w-12 h-12 rounded-full border-2 border-yellow-500"></div>
                <div className="absolute top-24 right-1/3 w-8 h-8 rounded-full border-2 border-red-600"></div>
                <div className="absolute bottom-16 left-1/4 w-14 h-14 rounded-full border-2 border-green-600"></div>
                <div className="absolute bottom-24 right-1/4 w-10 h-10 rounded-full border-2 border-yellow-500"></div>
                <div className="absolute top-1/2 left-12 text-yellow-500 text-3xl">♠</div>
                <div className="absolute top-1/2 right-12 text-red-600 text-3xl">♥</div>
                <div className="absolute bottom-1/3 left-1/3 text-yellow-500 text-2xl">★</div>
                <div className="absolute bottom-1/3 right-1/3 text-green-500 text-2xl">♦</div>
                <div className="absolute top-1/4 left-1/4 text-green-500 text-xl">$</div>
                <div className="absolute top-1/4 right-1/4 text-yellow-500 text-xl">€</div>
              </div>

              <div className="text-center mb-6">
                <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-lg inline-block">
                  ESCOLHA DA REDAÇÃO
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Logo */}
                <div className="text-center">
                  <div className="p-6 rounded-lg border border-gray-600 mb-4 inline-block">
                    <img
                      src={ourChoice.logo || "/placeholder.svg"}
                      alt={ourChoice.name}
                      className="w-[200px] h-[120px] object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{ourChoice.name}</h3>
                </div>

                {/* Informações Principais */}
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-red-500 font-bold text-xl mb-3 uppercase">Bónus</div>
                    <p className="text-white font-bold text-2xl">{ourChoice.bonus}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < ourChoice.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-600 fill-none"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-3xl font-bold text-yellow-500">
                      {(ourChoice.rating * 2).toFixed(1)}
                      <span className="text-lg text-gray-400">/10</span>
                    </div>
                    <div className="text-gray-400 text-sm">({ourChoice.reviews} avaliações)</div>
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="text-center">
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-6 text-xl mb-4 uppercase tracking-wide"
                  >
                    <a href={ourChoice.url} target="_blank" rel="noopener noreferrer">
                      Jogar Agora
                    </a>
                  </Button>
                  <p className="text-gray-300 text-base">Registo em 2 minutos</p>
                  <p className="text-yellow-500 text-sm font-semibold">Licenciado SRIJ</p>
                </div>
              </div>
            </div>

            {/* Vantagens */}
            <div className="border border-gray-600 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                <span className="text-yellow-500">Porquê</span> <span className="text-red-600">a Nossa Escolha?</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Máxima Segurança</h4>
                    <p className="text-base">
                      Licença SRIJ válida, encriptação SSL 256-bit e fundos dos jogadores totalmente protegidos.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Melhor Seleção</h4>
                    <p className="text-base">
                      Mais de 1000 slots, jogos de mesa e casino ao vivo dos melhores fornecedores mundiais.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Pagamentos Rápidos</h4>
                    <p className="text-base">
                      MB WAY, Multibanco, cartões. Levantamentos processados em menos de 2 horas.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Suporte 24/7</h4>
                    <p className="text-base">
                      Atendimento em português por chat, email e telefone. Resposta em menos de 1 minuto.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">Melhores Bónus</h4>
                    <p className="text-base">Bónus generosos com requisitos justos e promoções semanais exclusivas.</p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 text-xl">100% Português</h4>
                    <p className="text-base">Interface em português, suporte local e métodos de pagamento nacionais.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 border-2 border-red-600 rounded-lg text-center">
                <p className="text-red-400 text-xl font-semibold mb-2">Jogue com responsabilidade</p>
                <p className="text-white text-base">
                  Apenas maiores de 18 anos. O jogo pode causar dependência. Defina sempre limites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
