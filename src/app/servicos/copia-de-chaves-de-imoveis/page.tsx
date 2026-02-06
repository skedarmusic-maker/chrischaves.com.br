
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CopiaChavesImoveisPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20gostaria%20de%20fazer%20uma%20cópia%20de%20chave"

    const faqData = [
        {
            question: "COMPATIBILIDADE: Quais chaves podem ser copiadas?",
            answer: "98% dos modelos residenciais, incluindo chaves Yale, Tetra, Multiponto e Pantográficas. Avaliação técnica prévia recomendada para modelos de alta segurança."
        },
        {
            question: "PRECISÃO: A cópia funciona perfeitamente?",
            answer: "AFIRMATIVO. Utilizamos máquinas calibradas micrometricamente. A chave é testada para garantir giro suave e sem travamentos no cilindro."
        },
        {
            question: "REQUISITOS: Preciso da chave original?",
            answer: "SIM. A original serve como matriz base. Cópias de cópias podem apresentar desvios de 0.05mm, reduzindo a eficácia. Traga sempre a melhor chave disponível."
        },
        {
            question: "PREVENÇÃO: Fazer cópia ajuda na segurança?",
            answer: "POSITIVO. Ter uma chave reserva acessível evita acionamentos emergenciais de arrombamento, preservando a integridade da fechadura."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-500 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: REPLICATION UNIT */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Blueprint Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Measuring Lines Decoration */}
                <div className="absolute top-20 right-0 w-64 h-px bg-cyan-900/50"></div>
                <div className="absolute top-20 right-0 w-px h-20 bg-cyan-900/50"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: TECHNICAL SPECS */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/10 border border-cyan-500/30 rounded-sm text-cyan-500 text-xs font-mono tracking-widest uppercase">
                                <span className="inline-block w-2 H-2 bg-cyan-500 rounded-full animate-pulse"></span>
                                Calibração de Precisão Ativa
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CÓPIA DE CHAVES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                    DE IMÓVEIS EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-cyan-500 font-mono mb-8 uppercase tracking-widest">
                                Duplicação Residencial
                            </h2>

                            <div className="flex gap-4 text-sm font-mono text-neutral-500 border-l border-cyan-500/30 pl-4 my-6">
                                <div>
                                    <span className="block text-white font-bold">TOLERÂNCIA</span>
                                    0.01mm
                                </div>
                                <div>
                                    <span className="block text-white font-bold">MATRIZ</span>
                                    ORIGINAL
                                </div>
                                <div>
                                    <span className="block text-white font-bold">TEMPO</span>
                                    IMEDIATO
                                </div>
                            </div>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Ter uma chave reserva é uma das formas mais simples de evitar imprevistos no dia a dia. O serviço de cópia de chaves de imóveis em Porto Alegre é ideal para quem precisa duplicar chaves residenciais ou comerciais com precisão.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                                >
                                    <span className="mr-2">Solicitar Orçamento</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: CALIBRATION PANEL */}
                        <div className="w-full lg:w-96 bg-neutral-900/30 border border-neutral-800 p-6 backdrop-blur-sm relative">
                            {/* Ruler graphics */}
                            <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #06b6d4 1px, transparent 1px)', backgroundSize: '10px 100%' }}></div>

                            <h3 className="font-mono text-cyan-500 text-sm mb-6 border-b border-neutral-800 pb-2 flex justify-between">
                                <span>DIAGNÓSTICO DA MATRIZ</span>
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-neutral-400 font-mono">
                                        <span>DESGASTE</span>
                                        <span>BAIXO</span>
                                    </div>
                                    <div className="w-full bg-neutral-800 h-1">
                                        <div className="bg-green-500 h-full w-[10%]"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-neutral-400 font-mono">
                                        <span>FISURAS/TRINCAS</span>
                                        <span>NENHUMA</span>
                                    </div>
                                    <div className="w-full bg-neutral-800 h-1">
                                        <div className="bg-green-500 h-full w-[0%]"></div>
                                    </div>
                                </div>

                                <div className="p-4 bg-cyan-900/10 border border-cyan-500/20 rounded text-xs text-cyan-400 font-mono leading-relaxed">
                                    NOTA TÉCNICA: Chaves desgastadas produzem cópias imperfeitas. Recomendamos substituir o segredo se a matriz estiver comprometida.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. KEY TYPES GRID */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center mb-16 gap-4">
                        <div className="w-8 h-8 rounded border border-neutral-700 flex items-center justify-center text-neutral-500 font-mono text-xs">01</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Arquitetura de <span className="text-cyan-500">Duplicação</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "CHAVES YALE",
                                desc: "Padrão residencial comum. Cortes serrilhados de precisão.",
                                icon: "🗝️",
                                tech: "SERRA"
                            },
                            {
                                title: "CHAVES TETRA",
                                desc: "Quatro lados de segredo. Alta segurança mecânica.",
                                icon: "❌",
                                tech: "CRUZ"
                            },
                            {
                                title: "MULTIPONTO",
                                desc: "Sistema de pontos perfurados. Máxima precisão requerida.",
                                icon: "💠",
                                tech: "PONTO"
                            },
                            {
                                title: "PANTOGRÁFICA",
                                desc: "Corte em baixo relevo nas laterais. Comum em veículos e portas modernas.",
                                icon: "〰️",
                                tech: "LASER"
                            },
                            {
                                title: "PORTÃO",
                                desc: "Chaves longas para fechaduras de sobrepor.",
                                icon: "🚪",
                                tech: "LONGA"
                            },
                            {
                                title: "CADEADOS",
                                desc: "Chaves pequenas de precisão para cadeados de latão ou aço.",
                                icon: "🔒",
                                tech: "CURTA"
                            }
                        ].map((card, i) => (
                            <div key={i} className="group border border-neutral-800 bg-neutral-900/20 p-8 hover:bg-neutral-900/40 hover:border-cyan-500/50 transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-4xl grayscale group-hover:grayscale-0 transition-all">{card.icon}</div>
                                    <span className="text-[10px] font-mono border border-neutral-700 px-2 py-0.5 rounded text-neutral-500 group-hover:text-cyan-500 group-hover:border-cyan-500/30 transition-colors">
                                        TYPE: {card.tech}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{card.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PRECISION CHECKLIST */}
            <section className="py-20 border-y border-neutral-900 bg-neutral-900/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT: WHEN TO COPY */}
                        <div className="relative">
                            <h3 className="text-2xl font-bold text-white uppercase mb-8">Protocolo de Duplicação</h3>
                            {/* Connector line */}
                            <div className="absolute left-[11px] top-12 bottom-0 w-px bg-neutral-800"></div>

                            <div className="space-y-8">
                                {[
                                    { label: "Chave Única (Sem Reserva)", status: "CRÍTICO" },
                                    { label: "Mudança Recente de Imóvel", status: "RECOMENDADO" },
                                    { label: "Compartilhamento de Acesso", status: "PADRÃO" },
                                    { label: "Desgaste Visível na Matriz", status: "ALERTA" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 relative group">
                                        <div className="w-6 h-6 rounded-full bg-black border border-neutral-700 flex items-center justify-center z-10 group-hover:border-cyan-500 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-cyan-500 transition-colors"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">{item.label}</h4>
                                            <span className={`text-xs font-mono px-2 py-0.5 rounded ${item.status === 'CRÍTICO' ? 'bg-red-900/30 text-red-500' : 'bg-neutral-800 text-neutral-500'}`}>
                                                STATUS: {item.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: BENEFITS TABLE */}
                        <div className="bg-black border border-neutral-800 p-8">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase">
                                Vantagens da <span className="text-cyan-500">Precisão Profissional</span>
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-neutral-500 uppercase bg-neutral-900/50">
                                        <tr>
                                            <th className="px-4 py-3">Parâmetro</th>
                                            <th className="px-4 py-3 text-cyan-500">Profissional</th>
                                            <th className="px-4 py-3 text-neutral-600">Amador</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-800">
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-white">Calibração</td>
                                            <td className="px-4 py-3 text-cyan-400">Micrométrica</td>
                                            <td className="px-4 py-3 text-neutral-600">Visual</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-white">Acabamento</td>
                                            <td className="px-4 py-3 text-cyan-400">Lixamento Fino</td>
                                            <td className="px-4 py-3 text-neutral-600">Rebarbas</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-white">Encaixe</td>
                                            <td className="px-4 py-3 text-cyan-400">Perfeito</td>
                                            <td className="px-4 py-3 text-neutral-600">Forçado</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-white">Desgaste Cilindro</td>
                                            <td className="px-4 py-3 text-cyan-400">Nulo</td>
                                            <td className="px-4 py-3 text-neutral-600">Alto Risco</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ: DATA BANK */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h3 className="font-mono text-cyan-500 text-center mb-4">FAQ.KNOWLEDGE_BASE</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Especificações Técnicas</h2>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-black hover:border-cyan-900 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none">
                                    {item.question}
                                    <span className="text-cyan-500 opacity-50 group-hover:opacity-100">+</span>
                                </summary>
                                <div className="mt-4 pt-4 border-t border-neutral-900 text-neutral-400 font-mono text-sm leading-relaxed">
                                    <span className="text-cyan-500 mr-2">{'>'}</span>
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA: FINAL ACTION */}
            <section className="py-32 bg-cyan-900/5 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE UMA <span className="text-cyan-500">CÓPIA PERFEITA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Não arrisque sua segurança com cópias mal feitas. Solicite qualidade profissional.</p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.3)]"
                    >
                        Solicitar Cópia
                    </a>
                </div>
            </section>

        </main>
    )
}
