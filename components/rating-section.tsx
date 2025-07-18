import { CasinoSiteCard } from "./casino-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section className="py-8 px-4 w-full bg-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-yellow-500">TOP</span> <span className="text-red-500">RANKING</span>{" "}
            <span className="text-white">CASINOS</span>
          </h2>
          <p className="text-gray-300 text-lg">Classificação dos melhores casinos online licenciados em Portugal</p>
        </div>

        <div className="space-y-6">
          {bettingSites.map((site, index) => (
            <CasinoSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
