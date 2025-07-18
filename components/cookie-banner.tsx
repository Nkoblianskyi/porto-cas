"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-green-700 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white text-sm">
            Este site utiliza cookies para melhorar a sua experiência de navegação e fornecer funcionalidades
            personalizadas. Ao continuar a usar o nosso site, concorda com a nossa{" "}
            <Link href="/politica-privacidade" className="text-yellow-400 hover:underline">
              Política de Privacidade
            </Link>{" "}
            e{" "}
            <Link href="/politica-cookies" className="text-yellow-400 hover:underline">
              Política de Cookies
            </Link>
            . Pode gerir as suas preferências a qualquer momento.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={rejectCookies}
            variant="outline"
            size="sm"
            className="border-green-600 text-white hover:bg-green-800 bg-transparent"
          >
            Recusar
          </Button>
          <Button onClick={acceptCookies} size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
