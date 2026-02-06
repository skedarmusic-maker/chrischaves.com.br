
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CopiaChavePantograficaPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20cópia%20de%20chave%20pantográfica"

    const faqData = [
        {
            question: "Qual a diferença da chave pantográfica para chave comum?",
            answer: "A chave pantográfica possui canais e depressões usinados nas laterais da lâmina em vez de dentes serrilhados. Isso oferece maior dificuldade para cópia não autorizada e funcionamento mais suave."
        },
        {
            question: "Toda chave pantográfica pode ser copiada?",
            answer: "A grande maioria sim, mas exige máquinas duplicadoras específicas chamadas pantógrafos, que rastreiam o desenho original e o replicam com precisão milimétrica."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim. A cópia é feita por rastreamento físico da chave original. Em caso de perda total, é necessário desmontar o cilindro para decodificar o segredo."
        },
        {
            question: "Fazer chave reserva é importante?",
            answer: "Fundamental. Perder uma chave pantográfica sem ter reserva pode exigir a troca do kit de ignição e portas, o que é muito mais caro que uma cópia preventiva."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-white/30 selection:text-white font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: LASER PRECISION */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Grind/Laser Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%)] bg-[size:50px_100%] pointer-events-none" />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-none text-white text-xs font-mono tracking-widest uppercase">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                                Laser Cut Precision
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                                    PANTOGRÁFICA
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-gray-400 font-mono mb-8 uppercase tracking-widest">
                                Duplicação de Alta Precisão
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                A chave pantográfica possui um formato diferenciado, com cortes realizados em ambos os lados da lâmina, oferecendo maior precisão e segurança em comparação com chaves tradicionais. Esse tipo de chave é comum em veículos modernos e em alguns sistemas de fechadura de alta segurança.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-white/20 pl-4 py-2 font-mono">
                                A cópia de chave pantográfica em Porto Alegre exige equipamentos específicos (pantógrafos) e atenção técnica para garantir compatibilidade e funcionamento adequado.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-neutral-200 font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                                >
                                    <span className="mr-2">Solicitar Serviço</span>
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: LASER CUT VISUALIZER */}
                        <div className="w-full lg:w-96 p-8 relative isolate">
                            {/* Animated Laser Beam */}
                            <div className="absolute inset-0 bg-neutral-900/50 border border-neutral-800 transform skew-y-3 z-0"></div>
                            <div className="absolute top-10 left-0 w-full h-[1px] bg-red-500 blur-[2px] animate-pulse z-20"></div>

                            <div className="relative z-10 space-y-6">
                                <h3 className="font-bold text-white uppercase text-right tracking-tight text-xl">
                                    CNC <br /> SYSTEM
                                </h3>

                                <div className="space-y-3 font-mono text-xs text-neutral-400">
                                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                                        <span>AXIS X</span>
                                        <span className="text-white">CALIBRATED</span>
                                    </div>
                                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                                        <span>AXIS Y</span>
                                        <span className="text-white">CALIBRATED</span>
                                    </div>
                                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                                        <span>AXIS Z</span>
                                        <span className="text-white">CALIBRATED</span>
                                    </div>
                                    <div className="flex justify-between pt-2">
                                        <span>PRECISION</span>
                                        <span className="text-green-500">0.01mm</span>
                                    </div>
                                </div>

                                <div className="h-32 border border-dashed border-neutral-700 rounded flex items-center justify-center relative overflow-hidden">
                                    <div className="w-[1px] h-full bg-red-500 absolute left-1/2 animate-scan-vertical"></div>
                                    <span className="text-xs text-neutral-600 font-mono">SCANNING KEY PROFILE...</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px bg-neutral-800 flex-1"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                            Aplicações <span className="text-gray-500">Comuns</span>
                        </h2>
                        <div className="h-px bg-neutral-800 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Automotivas",
                                desc: "Padrão na maioria dos veículos modernos (VW, Fiat, Ford, GM) devido à alta segurança.",
                                icon: "🚗"
                            },
                            {
                                title: "Chaves Canivete",
                                desc: "Duplicação de lâminas pantográficas para adaptação em telecomandos tipo canivete.",
                                icon: "🗡️"
                            },
                            {
                                title: "Segurança Residencial",
                                desc: "Fechaduras multiponto de alta segurança que utilizam o sistema de canais pantográficos.",
                                icon: "🏠"
                            },
                            {
                                title: "Cópia Reserva",
                                desc: "Evite o custo elevado de decodificação criando uma cópia enquanto possui a original.",
                                icon: "🔑"
                            },
                            {
                                title: "Restauração",
                                desc: "Recuperação do segredo original de chaves muito desgastadas através de leitura técnica.",
                                icon: "✨"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:bg-neutral-900 transition-colors duration-300 group rounded-sm">
                                <div className="text-4xl mb-4 group-hover:text-white transition-colors text-neutral-500">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:underline decoration-neutral-500 underline-offset-4 transition-all uppercase">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & CHECKLIST */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios <span className="text-gray-500">Técnicos</span></h3>
                            <p className="text-neutral-400 text-lg">A cópia feita por chaveiro especializado em pantografia oferece vantagens cruciais.</p>

                            <ul className="space-y-4">
                                {[
                                    { title: "Corte Preciso", desc: "Máquinas calibradas para replicar os canais exatos." },
                                    { title: "Encaixe Perfeito", desc: "Sem travamentos ou dificuldade ao girar na ignição." },
                                    { title: "Preservação do Miolo", desc: "Chaves mal copiadas danificam as palhetas internas." },
                                    { title: "Compatibilidade", desc: "Atendemos todas as montadoras nacionais e importadas." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start border-l-2 border-neutral-800 pl-4 hover:border-white transition-colors duration-300">
                                        <span className="text-xs font-bold text-neutral-500 uppercase mt-1">Benefit {i + 1}</span>
                                        <div>
                                            <h4 className="text-white font-bold">{item.title}</h4>
                                            <p className="text-neutral-500 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-neutral-900 border border-neutral-800 p-10 relative">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase relative z-10 flex items-center gap-3">
                                <span className="w-6 h-1 bg-white"></span>
                                Checklist
                            </h3>
                            <p className="text-neutral-500 mb-6 text-sm">Considere duplicar quando:</p>

                            <ul className="space-y-3 relative z-10 font-mono text-sm">
                                {[
                                    "Possui apenas uma chave pantográfica",
                                    "Deseja criar chave reserva preventiva",
                                    "A chave apresenta desgaste visível",
                                    "Compartilha o veículo com outra pessoa",
                                    "Quer evitar situações emergenciais"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center text-neutral-300">
                                        <span className="text-neutral-600">[X]</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a href={whatsappLink} target="_blank" className="mt-8 block w-full py-4 bg-white hover:bg-neutral-200 text-black font-bold text-center uppercase tracking-wide transition-colors">
                                Solicitar Cópia
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-neutral-800 hover:bg-neutral-900 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="opacity-50 group-open:opacity-100 transition-opacity">▼</span>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm leading-relaxed pl-4 border-l border-white/20">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-neutral-900/20 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE ALTA <span className="text-gray-500">PRECISÃO?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento para chave pantográfica.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold text-xl uppercase tracking-widest transition-all duration-300"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
