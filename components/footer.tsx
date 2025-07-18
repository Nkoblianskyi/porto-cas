import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-red-600 py-8 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Portuguese flag accent line */}
        <div className="portugal-accent-line mb-8 rounded-full"></div>

        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          {/* Logo e Nome do Site */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center border border-yellow-400">
                <Image src="/logo2.png" alt="Logo" width={24} height={24} />
              </div>
              <h2 className="text-white font-bold text-xl">PortugalMelhoresCasinos</h2>
            </div>
          </div>

          {/* 18+ Badge Mobile */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-500">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
            <div className="text-gray-300 text-sm text-center">
              <p className="text-red-400 font-bold">Jogo responsável</p>
              <p>Proibido a menores</p>
            </div>
          </div>

          {/* Navigation Mobile */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm">
              <Link href="/politica-privacidade" className="hover:text-yellow-500">
                Privacidade
              </Link>
              <Link href="/politica-cookies" className="hover:text-yellow-500">
                Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          {/* Logo e Nome do Site */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center border border-yellow-400">
                <Image src="/logo2.png" alt="Logo" width={24} height={24} />
              </div>
              <h2 className="text-white font-bold text-xl">PortugalMelhoresCasinos</h2>
            </div>
          </div>

          {/* Navigation Desktop */}
          <div className="flex items-center gap-6 text-gray-300 text-sm">
            <Link href="/politica-privacidade" className="hover:text-yellow-500">
              Política de Privacidade
            </Link>
            <Link href="/politica-cookies" className="hover:text-yellow-500">
              Política de Cookies
            </Link>
          </div>

          {/* 18+ Badge Desktop */}
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-500">
            <span className="text-white font-bold text-sm">18+</span>
          </div>
        </div>

        {/* Section Organizações */}
        <div className="mt-8 pt-6 border-t border-red-600">
          <h4 className="text-white font-bold mb-6 text-center text-base">
            <span className="text-green-400">Organizações</span> <span className="text-red-400">de</span>{" "}
            <span className="text-yellow-500">Apoio</span>
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/srij.svg"
                alt="SRIJ"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.sicad.pt"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/icad.png"
                alt="SICAD"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-3 flex items-center justify-center transition-colors"
            >
              <img
                src="/jogo2.png"
                alt="Jogo Responsável"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-red-600 mt-8 pt-6 text-center text-gray-400 text-sm">
          <div className="portugal-accent-line w-32 mx-auto mb-4 rounded-full"></div>
          <p className="text-white font-semibold">&copy; 2025 PortugalMelhoresCasinos.com</p>
          <p className="mt-2">Comparador independente de casinos online licenciados em Portugal</p>
          <p className="mt-2 text-red-400 font-bold">
            🔞 Apenas para maiores de 18 anos - O jogo pode causar dependência
          </p>
        </div>
      </div>
    </footer>
  )
}
