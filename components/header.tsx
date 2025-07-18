import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black border-b-2 border-red-600 relative z-50 w-full">
      <div className="container mx-auto max-w-[1220px] px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center border-2 border-yellow-400">
              <Image src="/logo2.png" alt="Logo" width={24} height={24} />
            </div>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
              <span className="text-red-600">Portugal</span>
              <span className="text-yellow-500">Melhores</span>
              <span className="text-white">Casinos</span>
            </h1>
          </Link>

          {/* Badges de Segurança */}
          <div className="flex items-center gap-3">
            {/* Badge Portugal - hidden on mobile */}
            <div className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 px-4 py-2 rounded-full border-2 border-green-500 shadow-lg">
              <span className="text-white text-sm font-bold uppercase tracking-wide">Top Brands</span>
            </div>

            {/* Badge 18+ */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-red-500 shadow-lg">
              <span className="text-white font-bold text-sm sm:text-base">18+</span>
            </div>
          </div>
        </div>

        {/* Portuguese flag accent line */}
        <div className="portugal-accent-line mt-3 sm:mt-4 rounded-full"></div>
      </div>
    </header>
  )
}
