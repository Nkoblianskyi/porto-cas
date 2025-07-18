import { Star, Trophy, Medal, Award, Dice6, Spade, Heart, Diamond, Club, Crown, TrendingUp, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  // Função para determinar qual badge mostrar (apenas uma)
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
  const isFirstItem = rank === 1

  // Elementos decorativos de casino baseados no rank
  const getCasinoIcon = () => {
    switch (rank) {
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
    <div className="relative">
      {/* Badge - новий дизайн */}
      {primaryBadge && (
        <div className="absolute -top-3 left-6 z-30">
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

      <a href={site.url} target="_blank" rel="noopener noreferrer" className="block group">
        <div
          className={`relative rounded-lg p-6 transition-all duration-300 group-hover:scale-[1.01] ${isFirstItem
              ? "bg-gray-900 border-2 border-yellow-500 hover:border-yellow-400"
              : "bg-gray-900 border-2 border-red-600 hover:border-red-500"
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

            {/* Dice dots pattern */}
            <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/3 left-1/2 translate-x-3 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/3 left-1/2 translate-x-6 w-2 h-2 bg-white rounded-full"></div>

            <div className="absolute top-1/3 left-1/2 translate-y-3 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/3 left-1/2 translate-x-6 translate-y-3 w-2 h-2 bg-white rounded-full"></div>

            <div className="absolute top-1/3 left-1/2 translate-y-6 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/3 left-1/2 translate-x-3 translate-y-6 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/3 left-1/2 translate-x-6 translate-y-6 w-2 h-2 bg-white rounded-full"></div>

            {/* Roulette wheel segments */}
            <div className="absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full border-4 border-red-600">
              <div className="absolute inset-2 rounded-full border-2 border-white"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Card corner numbers */}
            <div className="absolute top-8 left-8 text-red-600 font-bold text-lg">A</div>
            <div className="absolute top-8 right-12 text-white font-bold text-lg">K</div>
            <div className="absolute bottom-8 left-12 text-red-600 font-bold text-lg">Q</div>
            <div className="absolute bottom-8 right-8 text-white font-bold text-lg">J</div>

            {/* Additional casino elements */}
            <div className="absolute top-1/2 left-8 text-yellow-500 text-2xl">♠</div>
            <div className="absolute top-1/2 right-8 text-red-600 text-2xl">♥</div>
            <div className="absolute bottom-1/3 left-1/3 text-yellow-500 text-xl">★</div>
            <div className="absolute bottom-1/3 right-1/3 text-green-500 text-xl">♦</div>

            {/* Money symbols */}
            <div className="absolute top-1/4 left-1/4 text-green-500 text-lg">$</div>
            <div className="absolute top-1/4 right-1/4 text-yellow-500 text-lg">€</div>
          </div>

          {/* Portuguese flag accent line */}
          {isFirstItem && <div className="portugal-accent-line absolute top-0 left-0 right-0 rounded-t-lg"></div>}

          {/* Ícone de casino baseado no rank */}
          {getCasinoIcon()}

          <div className="relative z-10">
            {/* Desktop and Tablet Layout */}
            <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8 pt-4">
              {/* Rank Number */}
              <div
                className={`w-14 h-14 font-bold rounded-lg flex items-center justify-center text-xl flex-shrink-0 ${isFirstItem
                    ? "bg-yellow-500 text-black border-2 border-yellow-400"
                    : "bg-gray-800 text-white border border-gray-600"
                  }`}
              >
                {rank}
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 rounded-lg p-3 border border-gray-700">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[84px] lg:w-[160px] lg:h-[96px] object-contain"
                />
              </div>

              {/* Bonus */}
              <div className="flex-1 text-center">
                <div className="text-red-500 font-bold mb-2 text-lg uppercase tracking-wide">Bónus</div>
                <p className="text-white font-semibold leading-tight text-xl">{site.bonus}</p>
              </div>

              {/* Rating */}
              <div className="text-center flex-shrink-0">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  {(site.rating * 2).toFixed(1)}
                  <span className="text-sm text-gray-400">/10</span>
                </div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < site.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-600 fill-none"
                        }`}
                    />
                  ))}
                </div>
                <div className="text-gray-400 text-xs">({site.reviews})</div>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <Button className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 text-base uppercase tracking-wide border-0">
                  Jogar Agora
                </Button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-4">
              {/* Top row: Rank and Logo */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div
                  className={`hidden w-12 h-12 font-bold rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${isFirstItem ? "bg-yellow-500 text-black" : "bg-gray-800 text-white border border-gray-600"
                    }`}
                >
                  {rank}
                </div>
                <div className="flex-shrink- rounded-lg p-2">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="w-[180px] h-[72px] object-contain"
                  />
                </div>
              </div>

              {/* Bonus */}
              <div className="text-center mb-4">
                <div className="text-red-500 font-bold text-lg mb-1 uppercase">Bónus</div>
                <p className="text-white font-semibold leading-tight text-xl">{site.bonus}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-yellow-500 font-bold text-xl mb-1">
                    {(site.rating * 2).toFixed(1)}
                    <span className="text-sm text-gray-400">/10</span>
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < site.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-600 fill-none"
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-gray-400 text-sm">({site.reviews})</div>
              </div>

              {/* Button */}
              <Button className="bg-green-600 hover:bg-green-500 text-white font-bold w-full py-3 uppercase tracking-wide">
                Jogar Agora
              </Button>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
