
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Chaveiro24HorasPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20chaveiro%2024%20horas"

    const faqData = [
        {
            question: "O que significa chaveiro 24 horas?",
            answer: "É um serviço disponível para atendimento em diferentes horários, inclusive durante a noite, finais de semana e feriados, focado em situações que não podem esperar."
        },
        {
            question: "O atendimento é apenas residencial?",
            answer: "Não, nosso atendimento 24h abrange situações residenciais (casas, apartamentos), comerciais e também automotivas (abertura de carros, perda de chaves)."
        },
        {
            question: "O chaveiro vai até o local?",
            answer: "Sim, somos uma unidade móvel. O atendimento é realizado diretamente onde ocorreu o problema para sua maior comodidade e segurança."
        },
        {
            question: "Posso solicitar atendimento durante a madrugada?",
            answer: "Sim, serviços 24h são estruturados justamente para atender horários alternativos. Entre em contato para verificar a disponibilidade imediata da equipe."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    }

    return (
        <main className="min-h-screen bg-black text-gray-200 selection:bg-green-500/30 selection:text-green-500 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: NIGHTWATCH MODE */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Night City Abstract Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Plantão Ativo
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                                    EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-green-500 font-mono mb-8 uppercase tracking-widest">
                                Atendimento para Situações Urgentes
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Imprevistos com chaves e fechaduras podem acontecer em qualquer momento do dia ou da noite. O serviço de chaveiro 24 horas em Porto Alegre oferece suporte para situações urgentes, ajudando a recuperar acesso a residências, veículos ou estabelecimentos quando não é possível esperar.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-green-500/30 pl-4 py-2">
                                Muitas pessoas procuram um chaveiro próximo fora do horário comercial após esquecer as chaves, enfrentar travamento de fechadura ou perder acesso ao carro.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                >
                                    <span className="mr-2">Chamar Agora</span>
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: TIME STATUS PANEL */}
                        <div className="w-full lg:w-96 bg-neutral-900 border border-neutral-800 p-8 relative overflow-hidden">
                            <div className="absolute top-4 right-4 animate-pulse">
                                <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                            </div>

                            <h3 className="font-mono text-white text-xl mb-8 flex flex-col">
                                <span className="text-xs text-neutral-500 mb-1">STATUS DO SISTEMA</span>
                                <span className="text-green-500 font-bold">DISPONÍVEL AGORA</span>
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <span className="text-2xl">🌙</span>
                                    <div>
                                        <div className="text-white font-bold text-sm">MADRUGADA</div>
                                        <div className="text-xs">Plantão Ativo</div>
                                    </div>
                                    <div className="ml-auto text-green-500 text-xs font-mono">ON</div>
                                </div>
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <span className="text-2xl">🚗</span>
                                    <div>
                                        <div className="text-white font-bold text-sm">AUTOMOTIVO</div>
                                        <div className="text-xs">Unidade Móvel</div>
                                    </div>
                                    <div className="ml-auto text-green-500 text-xs font-mono">ON</div>
                                </div>
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <span className="text-2xl">🏠</span>
                                    <div>
                                        <div className="text-white font-bold text-sm">RESIDENCIAL</div>
                                        <div className="text-xs">Aberturas/Trocas</div>
                                    </div>
                                    <div className="ml-auto text-green-500 text-xs font-mono">ON</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-neutral-800">
                                <div className="text-xs font-mono text-center text-neutral-500">
                                    TEMPO MÉDIO DE RESPOSTA: <span className="text-white">IMEDIATO</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-[0.2em] mb-2 block">Casos de Emergência</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Situações Comuns</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Trancado p/ Fora",
                                desc: "Porta bateu ou a fechadura travou com a chave lá dentro? Realizamos abertura sem danos.",
                                icon: "🚪"
                            },
                            {
                                title: "Chaves Perdidas",
                                desc: "Perdeu as chaves de casa ou do carro na rua? Resolvemos com abertura e confecção de nova chave.",
                                icon: "🤷"
                            },
                            {
                                title: "chave Quebrada",
                                desc: "A chave quebrou dentro do cilindro da ignição ou da porta? Extração profissional disponível.",
                                icon: "💔"
                            },
                            {
                                title: "Carro Trancado",
                                desc: "Esqueceu a chave na ignição ou no banco? Abertura automotiva rápida e segura.",
                                icon: "🚘"
                            },
                            {
                                title: "Falha no Controle",
                                desc: "O controle do alarme ou portão parou de funcionar e você não consegue entrar? Damos suporte.",
                                icon: "📡"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-green-500/50 transition-colors duration-300 group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-500 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & CHECKLIST */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-8 order-2 lg:order-1">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Vantagens do <span className="text-green-500">24 Horas</span></h3>
                            <p className="text-neutral-400 text-lg">Contar com um chaveiro disponível a qualquer hora traz segurança e tranquilidade.</p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-green-500 text-2xl rounded-sm">🕒</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Horários Alternativos</h4>
                                        <p className="text-neutral-500 text-sm">Suporte inclusive de madrugada, feriados e finais de semana.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-green-500 text-2xl rounded-sm">📍</div>
                                    <div>
                                        <div className="text-white font-bold text-lg">Atendimento no Local</div>
                                        <p className="text-neutral-500 text-sm">Vamos até onde o problema ocorreu, seja na rua ou em casa.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-green-500 text-2xl rounded-sm">🛠</div>
                                    <div>
                                        <div className="text-white font-bold text-lg">Solução Profissional</div>
                                        <p className="text-neutral-500 text-sm">Evite danos tentando abrir sozinho. Técnicas corretas e ferramentas adequadas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 p-10 relative order-1 lg:order-2">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-bl-full"></div>

                            <h3 className="text-2xl font-bold text-white mb-8 uppercase relative z-10 flex items-center gap-3">
                                <span className="inline-block w-3 h-3 bg-green-500 animate-pulse rounded-full"></span>
                                Quando Chamar?
                            </h3>

                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Ficou trancado fora de casa",
                                    "Perdeu as chaves e não possui reserva",
                                    "A fechadura parou de funcionar do nada",
                                    "O veículo está trancado sem acesso",
                                    "O problema ocorreu fora do horário comercial"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center border-b border-neutral-800 pb-3 last:border-0">
                                        <span className="text-green-500 text-lg">⚠️</span>
                                        <span className="text-neutral-300 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <p className="text-xs text-center text-neutral-500 mb-2">CLIQUE PARA CHAMAR</p>
                                <a href={whatsappLink} target="_blank" className="block w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-center uppercase tracking-wide transition-colors rounded-sm shadow-lg shadow-green-900/20">
                                    Emergência (WhatsApp)
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900 transition-colors rounded-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-200 group-hover:text-green-500 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <svg className="w-5 h-5 text-neutral-500 group-hover:text-green-500 transform group-open:rotate-180 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800 pt-4">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-green-500/5 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE AJUDA <span className="text-green-500">AGORA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento imediato.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-green-600 hover:bg-green-500 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(34,197,94,0.4)] rounded-sm"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
