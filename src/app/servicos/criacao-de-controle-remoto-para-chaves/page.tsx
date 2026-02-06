
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CriacaoControleRemotoPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20criação%20de%20controle%20remoto"

    const faqData = [
        {
            question: "É possível criar novo controle para qualquer carro?",
            answer: "Depende do sistema eletrônico e modelo do veículo. A maioria dos carros nacionais e importados aceita a gravação de novos controles, desde que o chaveiro possua o equipamento compatível."
        },
        {
            question: "O controle novo funciona igual ao original?",
            answer: "Sim. Quando compatível e configurado corretamente, ele executa todas as funções originais como travar, destravar, abrir porta-malas e ativar o alarme."
        },
        {
            question: "Preciso levar o veículo?",
            answer: "Sim. Para adicionar um novo controle ao sistema imobilizador ou de conforto, é necessário conectar o scanner na porta OBD do carro para o procedimento de 'apresentação'."
        },
        {
            question: "Criar controle reserva é recomendado?",
            answer: "Sim, ajuda a evitar imprevistos. Se você perder o único controle que tem, pode ficar sem acesso ao veículo ou ter que usar a chave mecânica, disparando o alarme."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-green-500/30 selection:text-green-400 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: RADIO FREQUENCY */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Sine Wave Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.2),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/30 border border-green-500/30 rounded-full text-green-400 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                                Wireless Connection
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CRIAÇÃO DE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                                    CONTROLE REMOTO
                                </span> <br />
                                PARA CHAVES
                            </h1>
                            <h2 className="text-lg text-green-400 font-mono mb-8 uppercase tracking-widest">
                                Assistência Automotiva em POA
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Os controles remotos automotivos facilitam o acesso ao veículo por meio de funções como travamento e destravamento à distância. O serviço de criação de controle remoto em Porto Alegre envolve avaliação do sistema automotivo para garantir compatibilidade.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-green-500/30 pl-4 py-2 font-mono">
                                Quando ocorre perda, desgaste ou falha eletrônica, realizamos a codificação de um novo dispositivo para restaurar o conforto e segurança.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                                >
                                    <span className="mr-2">Configurar Controle</span>
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: SIGNAL ANALYZER */}
                        <div className="w-full lg:w-96 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative shadow-2xl overflow-hidden">
                            {/* Frequencies */}
                            <div className="absolute top-0 right-0 p-4">
                                <span className="text-xs font-mono text-green-500 animate-pulse">433.92 MHz</span>
                            </div>

                            <div className="flex justify-center items-center h-48 relative mb-8">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-40 h-40 border border-green-500/20 rounded-full animate-ping-slow"></div>
                                    <div className="w-32 h-32 border border-green-500/40 rounded-full animate-ping-slower"></div>
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full backdrop-blur-sm flex items-center justify-center border border-green-400/50 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-black/50 p-3 rounded border border-neutral-800 flex justify-between items-center">
                                    <span className="text-neutral-400 text-xs font-bold">SINAL</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-3 bg-green-500 rounded-sm"></div>)}
                                    </div>
                                </div>
                                <div className="bg-black/50 p-3 rounded border border-neutral-800 flex justify-between items-center">
                                    <span className="text-neutral-400 text-xs font-bold">BATERIA</span>
                                    <span className="text-white text-xs font-mono">100%</span>
                                </div>
                                <div className="bg-black/50 p-3 rounded border border-neutral-800 flex justify-between items-center">
                                    <span className="text-neutral-400 text-xs font-bold">STATUS</span>
                                    <span className="text-green-400 text-xs font-mono animate-pulse">PAREADO</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-left mb-16 max-w-2xl">
                        <span className="text-green-500 font-bold text-xs uppercase tracking-widest mb-2 block">Diagnóstico</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Quando Criar um <span className="text-neutral-600">Novo?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Controle Perdido",
                                desc: "Não corra riscos. Removemos o controle perdido da memória do carro e adicionamos um novo.",
                                icon: "🕵️"
                            },
                            {
                                title: "Botões Falhando",
                                desc: "Desgaste na borracha ou microchaves quebradas impedem o acionamento correto.",
                                icon: "🔘"
                            },
                            {
                                title: "Danos Físicos",
                                desc: "Quedas, água ou esmagamento podem destruir a placa eletrônica do controle.",
                                icon: "💥"
                            },
                            {
                                title: "Cópia Reserva",
                                desc: "Essencial para não ficar trancado fora do carro em viagens ou emergências.",
                                icon: "🗝️"
                            },
                            {
                                title: "Falha de Sinal",
                                desc: "Quando o controle perde a sincronia e precisa ser regravado ou substituído.",
                                icon: "📡"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black p-8 border-t-2 border-neutral-800 hover:border-green-500 transition-colors duration-300 group relative">
                                <div className="absolute top-4 right-4 text-neutral-800 group-hover:text-green-500/20 transition-colors font-black text-4xl select-none">{i + 1}</div>
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & TYPES */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Vantagens <span className="text-green-500">Técnicas</span></h3>
                            <p className="text-neutral-400 text-lg">Serviço profissional garante que todas as funções (mala, alarme, vidros) funcionem.</p>

                            <div className="space-y-6">
                                {[
                                    { title: "Compatibilidade OEM", desc: "Trabalhamos com controles originais e paralelos de alta qualidade." },
                                    { title: "Multimarcas", desc: "Atendemos Chevrolet, VW, Ford, Fiat, Toyota, Honda, Hyundai, etc." },
                                    { title: "Programação OBD", desc: "Equipamento profissional para adicionar o controle no módulo." },
                                    { title: "Garantia", desc: "Asseguramos o funcionamento e alcance do sinal." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center group">
                                        <div className="w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center group-hover:border-green-500 transition-colors">
                                            <span className="text-green-500 font-bold text-xs">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase">{item.title}</h4>
                                            <p className="text-neutral-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: TYPES GRID */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent blur-2xl"></div>

                            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl relative z-10">
                                <h3 className="text-xl font-bold text-white mb-6 uppercase flex items-center gap-2">
                                    <span className="text-green-500">📱</span>
                                    Tipos Atendidos
                                </h3>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Chave Canivete",
                                        "Controle Presença (Keyless)",
                                        "Controle de Alarme",
                                        "Chave com Telecomando",
                                        "Controle de Portão",
                                        "Smart Keys"
                                    ].map((type, i) => (
                                        <div key={i} className="bg-black p-4 rounded text-center border border-neutral-800 hover:border-green-500/50 transition-colors">
                                            <span className="block text-white font-bold text-xs uppercase mb-1">{type}</span>
                                            <span className="block w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                                                <span className="block h-full bg-green-500 w-[70%]"></span>
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-neutral-500 text-xs mb-4">CONFIRME SEU MODELO PELO WHATSAPP</p>
                                    <a href={whatsappLink} target="_blank" className="inline-block px-6 py-3 bg-green-900/50 text-green-300 font-bold rounded border border-green-500/30 hover:bg-green-800/50 transition-colors uppercase text-sm">
                                        Enviar Foto do Controle
                                    </a>
                                </div>
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
                        <div key={index} className="group border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800 transition-colors rounded">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-green-400 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <div className="w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center group-open:bg-green-600 group-open:border-green-600 transition-all">
                                        <span className="text-xs group-open:text-white">▼</span>
                                    </div>
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
            <section className="py-32 bg-green-950/20 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">CONTROLE <span className="text-green-500">NOVO?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar a criação do seu controle automotivo.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-white text-green-900 hover:bg-green-50 font-bold text-xl uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
