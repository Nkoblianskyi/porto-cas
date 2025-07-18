import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PortugalMelhoresCasinos - Melhores Casinos Online Portugal 2025",
  description:
    "Classificação dos melhores casinos online em Portugal. Comparativo especializado com bónus, jogos e avaliações para escolher a melhor plataforma de casino.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <div className="min-h-screen w-full bg-black">
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
