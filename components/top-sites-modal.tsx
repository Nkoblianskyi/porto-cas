"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Crown, TrendingUp, Flame, Spade, Heart, Diamond, Club, Dice6, Medal, Award } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [isMobile])

  if (isMobile) return null

  const topThreeSites = bettingSites.slice(0, 3)

  // Reordenar os sites para o layout desejado (1º no centro, 2º à esquerda, 3º à direita)
  const orderedSites = [
    topThreeSites[1], // 2º lugar (esquerda)
    topThreeSites[0], // 1º lugar (centro)
    topThreeSites[2], // 3º lugar (direita)
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-black border-2 border-yellow-500 text-white max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-yellow-500 mb-2">TOP RANKING CASINOS</DialogTitle>
          <div className="portugal-accent-line w-32 mx-auto rounded-full"></div>
        </DialogHeader>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
          {orderedSites.map((site, index) => {
            // Determinar o rank real (não o índice do array reordenado)
            const realRank = index === 0 ? 2 : index === 1 ? 1 : 3

            // Determinar se é o primeiro lugar (posição central)
            const isFirstPlace = realRank === 1

            // Função para determinar qual badge mostrar
            const getPrimaryBadge = () => {
              if (site.isTopRating)
                return {
                  text: "MELHOR AVALIAÇÃO",
                  color: "bg-gradient-to-r from-yellow-500 to-yellow-400 text-black border-2 border-yellow-300",
                  icon: <Crown className="w-4 h-4" />,
                }
              if (site.isTopLine)
                return {
                  text: "LINHA SUPERIOR",
                  color: "bg-gradient-to-r from-red-600 to-red-500 text-white border-2 border-red-400",
                  icon: <Trophy className="w-4 h-4" />,
                }
              if (site.isPopular)
                return {
                  text: "POPULAR",
                  color: "bg-gradient-to-r from-red-600 to-red-500 text-white border-2 border-red-400",
                  icon: <Flame className="w-4 h-4" />,
                }
              if (site.isTrending)
                return {
                  text: "TENDÊNCIA",
                  color: "bg-gradient-to-r from-red-600 to-red-500 text-white border-2 border-red-400",
                  icon: <TrendingUp className="w-4 h-4" />,
                }
              return null
            }

            const primaryBadge = getPrimaryBadge()

            // Elementos decorativos de casino baseados no rank
            const getCasinoIcon = () => {
              switch (realRank) {
                case 1:
                  return <Trophy className="absolute top-6 right-6 w-8 h-8 text-yellow-500 opacity-20" />
                case 2:
                  return <Medal className="absolute top-6 right-6 w-8 h-8 text-yellow-500 opacity-20" />
                case 3:
                  return <Award className="absolute top-6 right-6 w-8 h-8 text-yellow-500 opacity-20" />
                default:
                  return <Dice6 className="absolute top-6 right-6 w-8 h-8 text-gray-600 opacity-10" />
              }
            }

            return (
              <div key={site.id} className="relative w-full md:w-[30%]">
                {/* Badge - центрований по верхньому бордеру */}
                {primaryBadge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-30">
                    <div
                      className={`${primaryBadge.color} px-4 py-2 rounded-full shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300`}
                    >
                      <div className="flex items-center gap-2">
                        {primaryBadge.icon}
                        <span className="text-xs font-bold uppercase tracking-wider">{primaryBadge.text}</span>
                      </div>
                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                    </div>

                    {/* Badge shadow */}
                    <div className="absolute top-1 left-1 w-full h-full bg-black/20 rounded-full -z-10 transform -rotate-2"></div>
                  </div>
                )}

                <div
                  className={`bg-gray-900 rounded-lg p-6 text-center relative ${
                    isFirstPlace ? "border-2 border-yellow-500" : "border-2 border-red-600"
                  }`}
                >
                  {/* Casino Background Pattern */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    {/* Playing card suits pattern */}
                    <div className="absolute top-4 left-4">
                      <Spade className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="absolute top-4 right-16">
                      <Heart className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="absolute top-16 left-16">
                      <Diamond className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="absolute top-16 right-4">
                      <Club className="w-7 h-7 text-white" />
                    </div>

                    {/* Bottom pattern */}
                    <div className="absolute bottom-4 left-8">
                      <Heart className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="absolute bottom-8 right-8">
                      <Spade className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-16 left-4">
                      <Club className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-16">
                      <Diamond className="w-6 h-6 text-red-600" />
                    </div>

                    {/* Casino chips circles */}
                    <div className="absolute top-12 left-1/3 w-8 h-8 rounded-full border-2 border-yellow-500"></div>
                    <div className="absolute top-20 right-1/3 w-6 h-6 rounded-full border-2 border-red-600"></div>
                    <div className="absolute bottom-12 left-1/4 w-10 h-10 rounded-full border-2 border-green-600"></div>
                    <div className="absolute bottom-20 right-1/4 w-7 h-7 rounded-full border-2 border-yellow-500"></div>

                    {/* Additional casino elements */}
                    <div className="absolute top-1/2 left-8 text-yellow-500 text-2xl">♠</div>
                    <div className="absolute top-1/2 right-8 text-red-600 text-2xl">♥</div>
                    <div className="absolute bottom-1/3 left-1/3 text-yellow-500 text-xl">★</div>
                    <div className="absolute bottom-1/3 right-1/3 text-green-500 text-xl">♦</div>

                    {/* Money symbols */}
                    <div className="absolute top-1/4 left-1/4 text-green-500 text-lg">$</div>
                    <div className="absolute top-1/4 right-1/4 text-yellow-500 text-lg">€</div>
                  </div>

                  {/* Portuguese flag accent for winner */}
                  {isFirstPlace && (
                    <div className="portugal-accent-line absolute top-0 left-0 right-0 rounded-t-lg"></div>
                  )}

                  {/* Ícone de casino baseado no rank */}
                  {getCasinoIcon()}

                  {/* Badge de posição - центрований по лівому бордеру */}
                  <div
                    className={`absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full flex items-center justify-center ${
                      isFirstPlace ? "w-12 h-12 bg-yellow-500 text-black" : "w-10 h-10 bg-gray-700 text-white"
                    }`}
                  >
                    <span className="font-bold text-lg">{realRank}</span>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 pt-2">
                      <div className=" rounded-lg p-3 inline-block border border-gray-700">
                        <img
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          className={`${isFirstPlace ? "w-[220px] h-[132px]" : "w-[180px] h-[108px]"} object-contain mx-auto`}
                        />
                      </div>
                    </div>

                    <h4 className="font-bold text-xl text-white mb-4">{site.name}</h4>

                    <div className="mb-6">
                      <div className="text-red-500 font-bold text-sm mb-2 uppercase">Bónus</div>
                      <p className="text-white font-semibold text-base">{site.bonus}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < site.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-600 fill-none"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-2xl font-bold text-yellow-500">
                        {(site.rating * 2).toFixed(1)}
                        <span className="text-sm text-gray-400">/10</span>
                      </div>
                      <div className="text-gray-400 text-sm">({site.reviews})</div>
                    </div>

                    <Button
                      asChild
                      className="bg-green-600 hover:bg-green-500 text-white font-bold w-full py-3 uppercase tracking-wide"
                    >
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        Jogar Agora
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center pt-4">
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="border-red-600 text-white hover:bg-red-600 hover:text-white bg-transparent"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
