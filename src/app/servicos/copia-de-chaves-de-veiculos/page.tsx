
'use client'

import { motion } from 'framer-motion'
import { ServiceJsonLd } from '@/components/JsonLd'

export default function CopiaChavesVeiculosPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20uma%20cópia%20da%20chave%20do%20meu%20carro"

    const faqData = [
        {
            question: "COMPATIBILIDADE: Fazem cópia de chaves presenciais?",
            answer: "AFIRMATIVO. Atendemos 95% da frota nacional e importada, incluindo sistemas Keyless (Start/Stop) e chaves Canivete codificadas."
        },
        {
            question: "PROTOCOLO: Preciso levar o carro até a loja?",
            answer: "RECOMENDADO. A codificação exige conexão via porta OBD2 del veículo para pareamento do chip transponder com a central eletrônica."
        },
        {
            question: "TEMPO: Quanto tempo demora a codificação?",
            answer: "IMEDIATO. O processo de corte e programação leva entre 30 a 60 minutos na maioria dos modelos, realizado enquanto você aguarda."
        },
        {
            question: "SEGURANÇA: A chave nova funciona igual a original?",
            answer: "TOTAL. Utilizamos chips originais ou OEM de alta fidelidade. Todas as funções (trava, destrava, mala, alarme) são preservadas."
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
            <ServiceJsonLd
                name="Cópia de Chaves de Veículos em Porto Alegre"
                description="Serviço especializado de cópia de chaves automotivas em Porto Alegre. Atendemos chaves comuns, canivete, codificadas e de presença (Keyless)."
                url="https://chrischaves.com.br/servicos/copia-de-chaves-de-veiculos"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: CODING SYSTEM */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Data Stream Background */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_26%,transparent_27%,transparent_74%,rgba(16,185,129,0.05)_75%,rgba(16,185,129,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_26%,transparent_27%,transparent_74%,rgba(16,185,129,0.05)_75%,rgba(16,185,129,0.05)_76%,transparent_77%,transparent)] bg-[size:50px_50px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: DATA INPUT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/10 border border-emerald-500/30 rounded text-emerald-500 text-xs font-mono tracking-widest uppercase">
                                <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                                Sistema de Codificação Online
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CÓPIA DE CHAVES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
                                    DE VEÍCULOS EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-emerald-500 font-mono mb-8 uppercase tracking-widest">
                                Duplicação Automotiva Especializada
                            </h2>

                            <div className="grid grid-cols-2 gap-4 border-l border-emerald-500/30 pl-6 my-6 max-w-lg">
                                <div>
                                    <div className="text-xs text-neutral-500 font-mono mb-1">PROTOCOLO DE SINAL</div>
                                    <div className="text-white font-bold">TRANSPONDER ID48</div>
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500 font-mono mb-1">CONEXÃO</div>
                                    <div className="text-emerald-500 font-bold">PORTA OBD2</div>
                                </div>
                            </div>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                A tecnologia automotiva avançou, e hoje a maioria dos carros exige chaves codificadas. O serviço de cópia de chaves de veículos em Porto Alegre garante a duplicação correta de chaves com chip, presença ou canivete.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                >
                                    <span className="mr-2">Iniciar Codificação</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: SIGNAL ANALYSIS */}
                        <div className="w-full lg:w-96 bg-black border border-neutral-800 p-6 relative overflow-hidden">
                            {/* Signal aesthetic */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-pulse"></div>

                            <h3 className="font-mono text-emerald-500 text-sm mb-6 pb-2 flex justify-between items-center">
                                <span>FREQUÊNCIA DE SINAL</span>
                                <span className="text-[10px] bg-emerald-900/30 px-2 py-0.5 rounded">433MHz</span>
                            </h3>

                            <div className="space-y-6 relative z-10">
                                {/* Simulated Waveform */}
                                <div className="h-24 flex items-end justify-between gap-px opacity-50">
                                    {[40, 60, 30, 80, 50, 90, 20, 40, 70, 50, 30, 60, 40, 80, 20, 50, 30, 70, 40, 60].map((h, i) => (
                                        <div key={i} className="w-full bg-emerald-500 transition-all duration-500" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                                    <div className="bg-neutral-900/50 p-3 border border-neutral-800">
                                        <span className="text-neutral-500 block mb-1">CHIP</span>
                                        <span className="text-white">DETECTADO</span>
                                    </div>
                                    <div className="bg-neutral-900/50 p-3 border border-neutral-800">
                                        <span className="text-neutral-500 block mb-1">CRIPTOGRAFIA</span>
                                        <span className="text-white">ROLLING CODE</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. TECHNOLOGY GRID */}
            <section className="py-24 bg-neutral-900/10 relative border-t border-neutral-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>

                <div className="container mx-auto px-4 mt-8">
                    <div className="text-center mb-16">
                        <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 block">Hardware Compatível</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Tecnologias <span className="text-emerald-500">Suportadas</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "CHAVES CODIFICADAS",
                                desc: "Duplicação de chips transponder (Code) para ignição.",
                                icon: "💾",
                                id: "T-01"
                            },
                            {
                                title: "SISTEMA KEYLESS",
                                desc: "Chaves de presença (Smart Key) com pareamento de proximidade.",
                                icon: "📡",
                                id: "K-02"
                            },
                            {
                                title: "TELECOMANDOS",
                                desc: "Controles integrados na chave ou chave canivete.",
                                icon: "📶",
                                id: "R-03"
                            },
                            {
                                title: "CHAVES CANIVETE",
                                desc: "Conversão de chave comum para modelo canivete retrátil.",
                                icon: "🗡️",
                                id: "F-04"
                            },
                            {
                                title: "CORTE A LASER",
                                desc: "Fresagem pantográfica de alta precisão para segredo.",
                                icon: "🔦",
                                id: "L-05"
                            },
                            {
                                title: "TROCA DE CARCAÇA",
                                desc: "Substituição de botões gastos e capas danificadas.",
                                icon: "🔄",
                                id: "S-06"
                            }
                        ].map((card, i) => (
                            <div key={i} className="group relative bg-black border border-neutral-800 p-8 overflow-hidden hover:border-emerald-500/50 transition-colors duration-300">
                                <div className="absolute -right-4 -bottom-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">{card.icon}</div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center bg-neutral-900">
                                        <span className="text-2xl">{card.icon}</span>
                                    </div>
                                    <span className="font-mono text-xs text-emerald-500 bg-emerald-900/10 px-2 py-1 rounded">{card.id}</span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CHECKLIST CODING */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-neutral-900/20 border border-neutral-800 p-8 md:p-12 relative">
                        {/* Connection lines */}
                        <div className="absolute top-1/2 left-0 w-4 h-px bg-emerald-500/30 hidden lg:block"></div>
                        <div className="absolute top-1/2 right-0 w-4 h-px bg-emerald-500/30 hidden lg:block"></div>

                        {/* LEFT: WHEN TO DUPLICATE */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 bg-emerald-500 rounded-sm"></span>
                                QUANDO DUPLICAR
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { txt: "Apenas 1 chave disponível", alert: true },
                                    { txt: "Aquisição de veículo usado", alert: true },
                                    { txt: "Botões do controle falhando", alert: false },
                                    { txt: "Compartilhamento familiar", alert: false },
                                    { txt: "Viagens longas programadas", alert: false }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center group">
                                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${item.alert ? 'border-amber-500/50 bg-amber-900/10 text-amber-500' : 'border-neutral-700 bg-neutral-900 text-neutral-500'}`}>
                                            {item.alert ? '!' : '•'}
                                        </div>
                                        <span className={`text-sm ${item.alert ? 'text-white font-medium' : 'text-neutral-400'}`}>{item.txt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: BENEFITS */}
                        <div className="lg:border-l lg:border-neutral-800 lg:pl-12">
                            <h3 className="text-xl font-bold text-white mb-6">BENEFÍCIOS TÉCNICOS</h3>
                            <div className="space-y-6">
                                <div className="group">
                                    <h4 className="text-emerald-400 text-sm font-bold uppercase mb-1 flex justify-between">
                                        Chip Original
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">100%</span>
                                    </h4>
                                    <p className="text-neutral-500 text-xs leading-relaxed">Garantia de comunicação estável com o imobilizador, sem falhas de partida.</p>
                                    <div className="w-full bg-neutral-800 h-px mt-3 group-hover:bg-emerald-500/50 transition-colors"></div>
                                </div>
                                <div className="group">
                                    <h4 className="text-emerald-400 text-sm font-bold uppercase mb-1 flex justify-between">
                                        Acabamento OEM
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">100%</span>
                                    </h4>
                                    <p className="text-neutral-500 text-xs leading-relaxed">Materiais idênticos aos de fábrica, com mesma durabilidade e textura.</p>
                                    <div className="w-full bg-neutral-800 h-px mt-3 group-hover:bg-emerald-500/50 transition-colors"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ: DATA BANK */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h3 className="font-mono text-emerald-500 text-center mb-4">FAQ.CODING_DATA</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Dados de Programação</h2>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-black hover:border-emerald-900 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none">
                                    {item.question}
                                    <span className="text-emerald-500 opacity-50 group-hover:opacity-100">+</span>
                                </summary>
                                <div className="mt-4 pt-4 border-t border-neutral-900 text-neutral-400 font-mono text-sm leading-relaxed">
                                    <span className="text-emerald-500 mr-2">{'>'}</span>
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA: FINAL ACTION */}
            <section className="py-32 bg-emerald-900/5 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">DUPLIQUE SUA <span className="text-emerald-500">SEGURANÇA</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Evite o transtorno da perda total. Garanta sua chave cópia codificada hoje.</p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                    >
                        Agendar Duplicação
                    </a>
                </div>
            </section>

        </main>
    )
}
