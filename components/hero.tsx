export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="w-full">
      <div
        className="w-full min-h-[300px] flex items-center relative"
        style={{
          backgroundImage: "url(/ac392d0dad6b555d2b4818c90ed9d2d3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Clean dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="container mx-auto px-4 text-center relative z-10 w-full py-8">
          {/* Portuguese flag accent line */}
          <div className="portugal-accent-line w-24 mx-auto mb-6 rounded-full"></div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-yellow-500">MELHORES</span>
            <br />
            <span className="text-white">CASINOS</span> <span className="text-red-600">ONLINE</span>
            <br />
            <span className="text-yellow-500">PORTUGAL</span>
          </h1>

          <div className="text-yellow-400 mb-4 text-base font-semibold">Última atualização: {formattedDate}</div>

          <p className="text-base text-white max-w-3xl mx-auto leading-relaxed mb-6">
            Descubra os melhores casinos online licenciados em Portugal. Análise completa de bónus, jogos, segurança e
            métodos de pagamento para escolher a melhor plataforma de casino online.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <img src="/flag.png" alt="Portugal" className="w-6 h-4 rounded" />
              <span className="text-green-400 font-bold uppercase">Licenciado</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-white font-bold uppercase">Seguro</span>
            </div>

            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center border-2 border-red-500">
              <span className="text-white font-bold text-sm">18+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
