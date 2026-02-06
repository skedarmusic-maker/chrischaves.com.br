
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CopiaChaveMagneticaPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20cópia%20de%20chave%20magnética"

    const faqData = [
        {
            question: "Toda chave magnética pode ser copiada?",
            answer: "Depende do tipo de sistema (RFID, NFC, Contato) e das características de criptografia do dispositivo. A grande maioria das tags residenciais é copiável."
        },
        {
            question: "A cópia funciona igual à original?",
            answer: "Sim, quando feita corretamente, a cópia clone possui os mesmos códigos da original e funciona exatamente da mesma maneira."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim, é indispensável ter a tag ou cartão original em mãos para realizar a leitura e clonagem dos dados para a nova chave."
        },
        {
            question: "É seguro duplicar chave magnética?",
            answer: "O processo é seguro e apenas cria um backup do seu acesso existente. Não alteramos o sistema do condomínio, apenas copiamos o seu dispositivo."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-emerald-500/30 selection:text-emerald-500 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: RFID MATRIX */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Digital Chip Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.05)_75%)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/20 border border-emerald-500/30 rounded-md text-emerald-400 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></span>
                                Controle de Acesso
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400">
                                    MAGNÉTICA
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-emerald-500 font-mono mb-8 uppercase tracking-widest">
                                Duplicação para Sistemas de Acesso
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Chaves magnéticas são amplamente utilizadas em condomínios residenciais, empresas e sistemas de controle de acesso. A cópia de chave magnética em Porto Alegre permite criar duplicações para facilitar a entrada de moradores, colaboradores ou visitantes autorizados.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-emerald-500/30 pl-4 py-2 font-mono">
                                Esse tipo de chave pode incluir tags, cartões ou dispositivos eletrônicos utilizados para liberar portas, portões ou áreas restritas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                                >
                                    <span className="mr-2">Duplicar Tag</span>
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: CHIP VISUALIZER */}
                        <div className="w-full lg:w-96 bg-neutral-900 border border-neutral-800 p-8 relative rounded-xl overflow-hidden group">
                            {/* Scanning Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50 shadow-[0_0_20px_#10b981] animate-scanline z-20"></div>

                            <div className="flex justify-center items-center py-12 relative">
                                <div className="w-32 h-32 border-2 border-emerald-500/30 rounded-full flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping-slow"></div>
                                    <span className="text-5xl">🏷️</span>
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-xs">
                                <div className="flex justify-between text-neutral-400">
                                    <span>PROTOCOL</span>
                                    <span className="text-white">RFID 125kHz</span>
                                </div>
                                <div className="flex justify-between text-neutral-400">
                                    <span>STATUS</span>
                                    <span className="text-emerald-400">ACTIVE</span>
                                </div>
                                <div className="flex justify-between text-neutral-400">
                                    <span>ENCRYPTION</span>
                                    <span className="text-emerald-400">DETECTED</span>
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
                            Quando <span className="text-emerald-500">Duplicar?</span>
                        </h2>
                        <div className="h-px bg-neutral-800 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Cópia para Familiares",
                                desc: "Facilite a rotina garantindo que todos os moradores tenham sua própria tag de acesso.",
                                icon: "👨‍👩‍👧"
                            },
                            {
                                title: "Colaboradores",
                                desc: "Controle de acesso eficiente para funcionários em empresas e escritórios comerciais.",
                                icon: "👔"
                            },
                            {
                                title: "Chave Reserva",
                                desc: "Evite ficar trancado para fora caso sua tag principal pare de funcionar ou seja perdida.",
                                icon: "🗝️"
                            },
                            {
                                title: "Substituição",
                                desc: "Troca de tags antigas, quebradas ou que falham intermitentemente no leitor.",
                                icon: "🔄"
                            },
                            {
                                title: "Organização",
                                desc: "Gestão simplificada de acessos em ambientes compartilhados e condomínios.",
                                icon: "📂"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-emerald-500 transition-colors duration-300 group rounded-lg">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS, TYPES & CHECKLIST */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT: BENEFITS & TYPES */}
                        <div className="space-y-12">
                            {/* Benefits */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios da <span className="text-emerald-500">Cópia Profissional</span></h3>
                                <p className="text-neutral-400 text-lg">Realizar a duplicação com atendimento especializado oferece segurança e garantia.</p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Compatibilidade Total",
                                        "Funcionamento Garantido",
                                        "Processo Seguro",
                                        "Avaliação Prévia",
                                        "Rapidez no Serviço",
                                        "Custo-Benefício"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center text-neutral-300">
                                            <span className="text-emerald-500 text-xs">▉</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Types */}
                            <div className="bg-neutral-900/30 p-8 border border-neutral-800 rounded-lg">
                                <h4 className="text-xl font-bold text-white mb-4 uppercase">Tecnologias Compatíveis</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Tags 125kHz", "Cartões Mifare", "Chaveiros RFID", "Cartões de Proximidade", "Tags de Condomínio", "Controles de Portão"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-black border border-neutral-700 text-neutral-400 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-gradient-to-br from-emerald-900/10 to-black border border-emerald-500/20 p-10 relative rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase relative z-10 flex items-center gap-3">
                                <span className="text-emerald-500">⚡</span>
                                Checklist
                            </h3>
                            <p className="text-neutral-400 mb-6 text-sm">Considere duplicar se:</p>

                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Precisa compartilhar acesso com outra pessoa",
                                    "Possui apenas uma chave magnética",
                                    "Deseja criar uma chave reserva",
                                    "A chave atual apresenta desgaste",
                                    "Quer facilitar o controle de acesso"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center bg-black/40 p-3 rounded border border-transparent hover:border-emerald-500/30 transition-all">
                                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        </div>
                                        <span className="text-neutral-200 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href={whatsappLink} target="_blank" className="mt-8 block w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center uppercase tracking-wide transition-colors rounded shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                Solicitar Orçamento
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-3">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 rounded-lg overflow-hidden hover:border-emerald-500/30 transition-colors">
                            <details className="p-6 cursor-pointer bg-neutral-900/20">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-emerald-400 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <div className="relative w-4 h-4">
                                        <div className="absolute inset-0 bg-emerald-500 w-[2px] h-full left-1/2 -translate-x-1/2 group-open:rotate-90 transition-transform"></div>
                                        <div className="absolute inset-0 bg-emerald-500 h-[2px] w-full top-1/2 -translate-y-1/2"></div>
                                    </div>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm leading-relaxed">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-emerald-900/5 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE UMA <span className="text-emerald-500">CÓPIA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento rápido.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-white text-black hover:bg-emerald-500 hover:text-white font-bold text-xl uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-sm"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
