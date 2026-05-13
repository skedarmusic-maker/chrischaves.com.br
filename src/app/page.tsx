import { Hero } from '@/components/Hero'
import { WorkShowcase } from '@/components/WorkShowcase'
import { Services } from '@/components/Services'
import { Location } from '@/components/Location'
import { FAQ } from '@/components/FAQ'
import { Testimonials } from '@/components/Testimonials'

import { businessInfo } from '@/data/businessInfo'
import Link from 'next/link'
import { LocalBusinessJsonLd } from '@/components/JsonLd'

export default function Home() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            {/* Semantic SEO Content - Visible to bots and users */}
            <div className="sr-only">
                <p>
                    Chris Chaves é a sua referência em serviços de chaveiro 24 horas em Porto Alegre e região metropolitana.
                    Especialistas em abertura de carros, cópias de chaves codificadas, abertura de cofres e fechaduras eletrônicas.
                    Atendimento emergencial rápido para perda de chaves automotivas e residenciais.
                </p>
            </div>
            <LocalBusinessJsonLd />

            <Hero />
            <Services />
            <Location />
            <WorkShowcase />
            <Testimonials />
            <FAQ />

            {/* Floating Contact Buttons for Mobile/Desktop persistence */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
                {/* Phone Button - Emergency Style */}
                <a
                    id="btn-phone-float"
                    href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                    className="bg-neutral-900/80 backdrop-blur-md border border-green-500/50 text-green-500 p-4 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all hover:scale-110 hover:bg-green-500 hover:text-black flex items-center justify-center group"
                    aria-label="Ligar Agora"
                >
                    <svg className="w-7 h-7 pointer-events-none transition-colors group-hover:stroke-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </a>

                {/* WhatsApp Button */}
                <a
                    id="btn-whatsapp-float"
                    href={`https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}`}
                    className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
                    aria-label="Chamar no WhatsApp"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 pointer-events-none">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </a>
            </div>

            {/* Mobile-only button for viewing all services */}
            <div className="fixed bottom-6 left-6 z-50 md:hidden opacity-70">
                <Link
                    href="/servicos"
                    className="inline-flex items-center font-bold text-neutral-400 hover:text-white transition-colors border border-neutral-800 bg-black/50 px-4 py-2 rounded-full shadow-lg text-xs"
                >
                    Serviços
                </Link>
            </div>
        </main>
    )
}
