
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PerdaDeChavesPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Emergência:%20Perdi%20minhas%20chaves%20e%20preciso%20de%20acesso"

    const faqData = [
        {
            question: "PROTOCOLO: Perdi minhas chaves, o que fazer?",
            answer: "Mantenha a calma. Verifique chaves reserva. Se não houver, não force a fechadura para evitar danos estruturais. Acione o suporte técnico."
        },
        {
            question: "TÉCNICA: Abrir a porta danifica a fechadura?",
            answer: "NEGATIVO. Nossos métodos de abertura técnica buscam preservar a integridade do cilindro e da porta em 95% dos casos."
        },
        {
            question: "LOCAL: O atendimento é in loco?",
            answer: "AFIRMATIVO. Deslocamento imediato até o local da ocorrência (residência, via pública ou comércio)."
        },
        {
            question: "SEGURANÇA: É necessário trocar o segredo?",
            answer: "AVALIAÇÃO NECESSÁRIA. Dependendo das circunstâncias da perda (furto/roubo), a troca do segredo é mandatória para garantir a segurança."
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

            {/* 1. HERO SECTION: RECOVERY OPERATION */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: COMMAND TEXT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/30 rounded-sm text-green-500 text-xs font-mono tracking-widest uppercase">
                                <span className="animate-pulse">●</span> Protocolo de Segurança Ativo
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                ASSISTÊNCIA PARA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
                                    PERDA DE CHAVES EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-green-500 font-mono mb-8 uppercase tracking-widest">
                                Suporte para Situações Urgentes
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed border-l-2 border-green-500/50 pl-6">
                                Perder as chaves de casa ou do carro gera um transtorno imediato. A assistência para perda de chaves em Porto Alegre oferece solução rápida e especializada para quem ficou trancado do lado de fora ou não encontra sua única cópia.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
                                >
                                    <span className="mr-2">Solicitar Abertura</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: ACTION PROTOCOL PANEL */}
                        <div className="w-full lg:w-96 bg-neutral-900/30 border border-neutral-800 p-6 backdrop-blur-sm relative">
                            <h3 className="font-mono text-neutral-500 text-sm mb-6 border-b border-neutral-800 pb-2">AÇÕES IMEDIATAS RECOMENDADAS</h3>

                            <ul className="space-y-4">
                                {[
                                    "Não forçar a fechadura",
                                    "Verificar outras entradas",
                                    "Isolar a área (se chave quebrada)",
                                    "Localizar documentos do imóvel/carro",
                                    "Aguardar suporte técnico"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-sm group cursor-default">
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                        <span className="text-green-500 text-xs font-mono">[OK]</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-neutral-800">
                                <div className="bg-green-900/20 border border-green-700/30 p-4 rounded text-xs text-green-500 leading-relaxed">
                                    ⚠ <strong>ALERTA DE SEGURANÇA:</strong> O uso de ferramentas improvisadas (grampos, facas) tem 85% de chance de causar danos permanentes ao mecanismo.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. DIAGNOSTIC GRID: SCENARIOS */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-end justify-between mb-16 border-b border-neutral-900 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Cenários de <span className="text-neutral-500">Operação</span>
                        </h2>
                        <span className="hidden md:block font-mono text-green-500 text-sm">SEC.L.002</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {[
                            {
                                title: "EXTRAVIO EM TRÂNSITO",
                                desc: "Perda de chaves durante deslocamento ou em locais públicos. Necessidade de acesso rápido.",
                                icon: "🚶",
                                code: "EXT-01"
                            },
                            {
                                title: "BLOQUEIO VEICULAR",
                                desc: "Chave perdida de carros ou motos. Atuamos com abertura técnica sem danos à lataria.",
                                icon: "🚙",
                                code: "AUTO-02"
                            },
                            {
                                title: "CONFINAMENTO RESIDENCIAL",
                                desc: "Chave esquecida no interior do imóvel. Abertura realizada via gazua ou técnica adequada.",
                                icon: "🏠",
                                code: "RES-03"
                            },
                            {
                                title: "VUNERABILIDADE PÓS-PERDA",
                                desc: "Avaliação de risco. Se a chave foi perdida com documentos, recomendamos troca imediata do segredo.",
                                icon: "🛡️",
                                code: "SEC-04"
                            }
                        ].map((card, i) => (
                            <div key={i} className="group relative bg-neutral-900/20 border border-neutral-800 hover:border-green-500/50 p-8 transition-colors duration-300">
                                <div className="absolute top-4 right-4 text-xs font-mono text-neutral-700 group-hover:text-green-500/50 transition-colors">
                                    {card.code}
                                </div>
                                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">{card.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{card.desc}</p>
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-500 ease-out" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SYSTEM CHECK: CHECKLIST & BENEFITS */}
            <section className="py-20 border-y border-neutral-900 bg-neutral-900/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white uppercase">Vantagens do Suporte Especializado</h3>
                            <ul className="space-y-0 divide-y divide-neutral-900 border-y border-neutral-900">
                                {[
                                    "Avaliação técnica do nível de segurança",
                                    "Métodos de abertura não-destrutivos",
                                    "Preservação da estrutura da porta",
                                    "Consultoria sobre troca de segredos"
                                ].map((item, i) => (
                                    <li key={i} className="py-4 flex gap-4 items-center group">
                                        <div className="w-6 h-6 rounded-sm border border-neutral-700 bg-neutral-900 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-900/20 transition-colors">
                                            <div className="w-2 h-2 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: CRITICAL CHECKLIST */}
                        <div className="bg-neutral-900/50 border border-neutral-800 p-8 relative">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="text-green-500">■</span> CHECKLIST DE ACIONAMENTO
                            </h3>
                            <p className="text-neutral-400 mb-6">Solicite suporte imediato se:</p>
                            <ul className="space-y-3 font-mono text-sm text-neutral-300">
                                <li className="flex gap-3">
                                    <span className="text-green-500">[✔]</span> Não possui cópias acessíveis
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-500">[✔]</span> Bloqueio total de acesso ao imóvel/carro
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-500">[✔]</span> Incerteza sobre onde a chave foi perdida
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-500">[✔]</span> Necessidade de acesso urgênte (crianças/pets)
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-500">[✔]</span> Horários atípicos (madrugada/feriados)
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ: DATA BANK */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h3 className="font-mono text-green-500 text-center mb-4">FAQ.DATABASE</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Dados Operacionais</h2>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-black hover:border-neutral-700 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none">
                                    {item.question}
                                    <span className="text-green-500 opacity-50 group-hover:opacity-100">+</span>
                                </summary>
                                <div className="mt-4 pt-4 border-t border-neutral-900 text-neutral-400 font-mono text-sm leading-relaxed">
                                    <span className="text-green-500 mr-2">{'>'}</span>
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA: FINAL ACTION */}
            <section className="py-32 bg-green-900/5 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">ACESSO <span className="text-green-500">BLOQUEADO?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Nossa equipe está pronta para restabelecer sua segurança e acesso.</p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-green-600 hover:bg-green-500 text-black font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
                    >
                        Solicitar Abertura
                    </a>
                </div>
            </section>

        </main>
    )
}
