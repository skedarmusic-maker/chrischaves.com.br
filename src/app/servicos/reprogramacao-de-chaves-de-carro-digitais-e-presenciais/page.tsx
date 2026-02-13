import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reprogramação de Chaves em Porto Alegre | Chris Chaves',
    description: 'Especialista em reprogramação de chaves presenciais e digitais em Porto Alegre. Sincronização avançada entre chave e veículo para restaurar o acesso e funcionamento.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/reprogramacao-de-chaves-de-carro-digitais-e-presenciais/',
    },
}

export default function ReprogramacaoChavesPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20reprogramar%20minha%20chave%20automotiva"

    const faqData = [
        {
            question: "O que é uma chave presencial (keyless)?",
            answer: "É um sistema onde o veículo reconhece automaticamente a chave próxima, permitindo acesso sem inserção física."
        },
        {
            question: "Toda chave digital pode ser reprogramada?",
            answer: "Depende do modelo do veículo e do sistema eletrônico utilizado. Na maioria dos casos, sim."
        },
        {
            question: "A reprogramação resolve falhas eletrônicas?",
            answer: "Pode resolver problemas relacionados à sincronização entre chave e veículo, como falhas no travamento."
        },
        {
            question: "Precisa levar o carro até o atendimento?",
            answer: "Algumas situações podem exigir avaliação direta do veículo, mas nossa unidade móvel vai até você."
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
            <ServiceJsonLd
                name="Reprogramação de Chaves Digitais e Presenciais"
                description="Sincronização técnica de chaves automotivas em Porto Alegre. Atendimento para chaves digitais e presenciais keyless."
                url="https://chrischaves.com.br/servicos/reprogramacao-de-chaves-de-carro-digitais-e-presenciais/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/reprogramacao-de-chaves-de-carro-digitais-e-presenciais/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: DIGITAL SYNC LAB */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Digital Noise Background */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#000_1px,#000_2px)] opacity-20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-none text-cyan-400 text-xs font-mono tracking-widest uppercase">
                                <span className="animate-pulse">●</span>
                                Sincronização Digital
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                REPROGRAMAÇÃO DE CHAVES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                    DIGITAIS E PRESENCIAIS
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>

                            <h2 className="text-lg text-cyan-500 font-mono mb-8 uppercase tracking-widest">
                                Diagnóstico e Sincronização Automotiva
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Veículos modernos utilizam sistemas eletrônicos avançados que exigem sincronização entre a chave e o sistema do carro. Quando ocorre falha na comunicação, pode ser necessário realizar a reprogramação da chave automotiva para restaurar o funcionamento correto.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm font-mono border-l-2 border-cyan-500/30 pl-4">
                                Situações como troca de bateria, falhas eletrônicas ou substituição da chave podem exigir ajustes técnicos para que o veículo reconheça novamente o dispositivo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                >
                                    <span className="mr-2">Agendar Reprogramação</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: OSCILLOSCOPE PANEL */}
                        <div className="w-full lg:w-96 bg-black border border-neutral-800 p-6 relative shadow-2xl overflow-hidden">
                            {/* Animated Scanner Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-scanline z-20"></div>

                            <div className="grid grid-cols-4 gap-1 mb-6 opacity-20">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className="h-8 border border-cyan-500"></div>
                                ))}
                            </div>

                            <h3 className="font-mono text-cyan-500 text-sm mb-6 flex justify-between items-center border-b border-neutral-800 pb-2">
                                <span>SYSTEM STATUS</span>
                                <span className="text-xs bg-cyan-900/10 px-2 py-1 rounded">ONLINE</span>
                            </h3>

                            <ul className="space-y-4 font-mono text-xs text-neutral-400">
                                <li className="flex justify-between">
                                    <span>KEYLESS ENTRY...</span>
                                    <span className="text-cyan-400">DETECTED</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>TRANSPONDER...</span>
                                    <span className="text-cyan-400">ACTIVE</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>OBD2 PORT...</span>
                                    <span className="text-cyan-400">CONNECTING</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>SIGNAL SYNC...</span>
                                    <span className="text-cyan-400 animate-pulse">WAITING</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.2em] mb-2 block">Diagnóstico de Falhas</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Situações Comuns</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Chave não reconhecida",
                                desc: "O painel exibe mensagem de erro ou a chave presencial não libera a partida.",
                                icon: "🚫"
                            },
                            {
                                title: "Controle sem resposta",
                                desc: "Botões de travar/destravar não funcionam mesmo com bateria nova.",
                                icon: "📡"
                            },
                            {
                                title: "Pós-Troca de Bateria",
                                desc: "Falha de sincronização após a substituição da bateria do telecomando.",
                                icon: "🔋"
                            },
                            {
                                title: "Substituição de Chave",
                                desc: "Necessidade de programar uma nova chave em caso de perda ou dano.",
                                icon: "🔑"
                            },
                            {
                                title: "Falhas Intermitentes",
                                desc: "O sistema funciona apenas ocasionalmente, indicando sinal fraco ou desprogramação.",
                                icon: "⚡"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-cyan-500 transition-colors duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full group-hover:bg-cyan-500/10 transition-colors"></div>
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase">{card.title}</h3>
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
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios da <span className="text-cyan-400">Reprogramação</span></h3>
                            <p className="text-neutral-400 text-lg">A programação correta da chave automotiva ajuda a garantir a integridade do sistema.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Reconhecimento imediato pelo sistema",
                                    "Funcionamento correto do travamento",
                                    "Melhor resposta dos comandos",
                                    "Redução de falhas de sincronização"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-start border-t border-neutral-800 pt-4">
                                        <span className="text-cyan-500 mt-1">✓</span>
                                        <span className="text-neutral-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-neutral-900/50 border border-neutral-800 p-8 md:p-12 relative">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase flex items-center gap-2">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                Checklist de Sintomas
                            </h3>
                            <p className="text-neutral-500 mb-6 text-sm">Considere assistência especializada quando:</p>

                            <ul className="space-y-3 font-mono text-xs md:text-sm text-neutral-300">
                                {[
                                    "O veículo não reconhece a chave (Painel)",
                                    "Funções eletrônicas pararam de funcionar",
                                    "O controle remoto perdeu sincronização",
                                    "A chave foi substituída recentemente",
                                    "O sistema keyless não responde corretamente"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center bg-black/50 p-3 border border-neutral-800 rounded-sm">
                                        <span className="text-cyan-500">[ERROR]</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-neutral-900/20 hover:border-cyan-500/50 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none">
                                    {item.question}
                                    <svg className="w-5 h-5 text-cyan-500 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm font-mono leading-relaxed pl-4 border-l-2 border-cyan-500/30">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-cyan-900/5 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE <span className="text-cyan-400">REPROGRAMAÇÃO?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento técnico especializado.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-black font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.3)]"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
