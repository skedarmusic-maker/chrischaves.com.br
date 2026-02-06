
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ChaveMotocicletaPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20ajuda%20com%20chave%20de%20moto"

    const faqData = [
        {
            question: "É possível fazer cópia de chave de motocicleta?",
            answer: "Depende do modelo e tipo de chave (comum, magnética ou codificada), mas a grande maioria pode ser avaliada para duplicação técnica especializada."
        },
        {
            question: "A chave pode parar de funcionar com o tempo?",
            answer: "Sim, desgaste natural do metal, oxidação ou falhas mecânicas no segredo podem afetar o funcionamento e dificultar o giro na ignição."
        },
        {
            question: "Preciso levar a motocicleta?",
            answer: "Em alguns casos, especialmente para confecção de chave perdida ou codificação, pode ser necessário avaliar diretamente o veículo."
        },
        {
            question: "Fazer chave reserva é recomendado?",
            answer: "Sim, absolutamente. Ter uma segunda chave ajuda a evitar imprevistos e custos elevados com atendimentos emergenciais em caso de perda da única via."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-red-600/30 selection:text-red-500 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: REDLINE RPM */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Speed Lines Background */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(220,38,38,0.05)_50%,transparent_100%)] bg-[size:200px_100%] animate-scanline-slow pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent skew-x-12 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/20 border border-red-500/30 rounded-sm text-red-500 text-xs font-mono tracking-widest uppercase transform -skew-x-12">
                                <span className="font-bold">MOTO DIVISION</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6 italic">
                                CHAVE DE MOTOCICLETA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 not-italic">
                                    EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-red-500 font-mono mb-8 uppercase tracking-widest border-l-4 border-red-600 pl-4">
                                Serviços para Chaves de Moto
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Problemas com chave de motocicleta podem acontecer tanto por desgaste natural quanto por perda ou necessidade de duplicação. O serviço especializado em chave de motocicleta em Porto Alegre atende diferentes situações relacionadas ao acesso e funcionamento da moto, considerando características específicas desse tipo de veículo.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm">
                                Seja para criar uma chave reserva, avaliar falhas ou restaurar o acesso após imprevistos, contar com assistência adequada ajuda a evitar danos e garante maior praticidade.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button skew-x-[-10deg] hover:skew-x-0 shadow-[5px_5px_0px_rgba(100,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    <span className="skew-x-[10deg] group-hover:skew-x-0 mr-2">Solicitar Serviço</span>
                                    <svg className="w-5 h-5 skew-x-[10deg] group-hover:skew-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: TACHOMETER PANEL */}
                        <div className="w-full lg:w-96 bg-neutral-900 border-2 border-neutral-800 p-6 relative rounded-3xl rounded-tr-none rounded-bl-none">
                            <div className="absolute top-0 right-0 p-2 bg-red-600 text-black font-bold text-xs uppercase rounded-bl-xl">Ignition On</div>

                            <div className="mt-8 flex justify-center mb-6 relative">
                                <svg viewBox="0 0 200 100" className="w-full h-auto">
                                    <path d="M 20 100 A 80 80 0 0 1 180 100" stroke="#333" strokeWidth="20" fill="none" />
                                    <path d="M 20 100 A 80 80 0 0 1 140 30" stroke="#DC2626" strokeWidth="20" fill="none" strokeDasharray="250" strokeDashoffset="0" className="animate-gauge" />
                                </svg>
                                <div className="absolute bottom-0 text-center">
                                    <span className="text-4xl font-bold text-white block">100%</span>
                                    <span className="text-xs text-neutral-500 uppercase">PRECISÃO</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                                    <span className="text-xs text-neutral-400 font-bold uppercase">IGNIÇÃO</span>
                                    <span className="text-red-500 font-mono">OK</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                                    <span className="text-xs text-neutral-400 font-bold uppercase">TANQUE</span>
                                    <span className="text-red-500 font-mono">OK</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                                    <span className="text-xs text-neutral-400 font-bold uppercase">BAÚ/CAPACETE</span>
                                    <span className="text-red-500 font-mono">OK</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-left mb-16 border-l-4 border-red-600 pl-6">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-2 block">Diagnóstico Rápido</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase italic">Situações <span className="text-neutral-500">Comuns</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Chave Perdida",
                                desc: "Perdeu a única chave da moto? Confeccionamos uma nova a partir do segredo da ignição.",
                                icon: "🏍️"
                            },
                            {
                                title: "Cópia Reserva",
                                desc: "Evite dores de cabeça. Tenha sempre uma cópia guardada para emergências.",
                                icon: "🔑"
                            },
                            {
                                title: "Desgaste Natural",
                                desc: "Chaves tortas ou gastas podem quebrar dentro do miolo. Substitua antes que aconteça.",
                                icon: "📉"
                            },
                            {
                                title: "Falha na Ignição",
                                desc: "Dificuldade para girar a chave ou travar o guidão? Pode ser problema na chave ou no cilindro.",
                                icon: "⚙️"
                            },
                            {
                                title: "Magnetismo",
                                desc: "Problemas com a trava magnética (shutter) da ignição de scooters e motos modernas.",
                                icon: "🧲"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border-l-2 border-t border-r border-b border-neutral-800 border-l-red-600 p-8 hover:bg-neutral-900 transition-all duration-300 group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-500 transition-colors uppercase italic">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
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
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight italic">Benefícios <span className="text-red-600">Especializados</span></h3>
                            <p className="text-neutral-400 text-lg">O atendimento voltado para chaves de moto oferece vantagens técnicas importantes.</p>

                            <div className="space-y-4">
                                {[
                                    { title: "Avaliação do Sistema", desc: "Verificação completa da ignição e travas." },
                                    { title: "Corte de Precisão", desc: "Evita travamentos e desgaste prematuro do miolo." },
                                    { title: "Proteção do Cilindro", desc: "Técnicas que preservam a originalidade da moto." },
                                    { title: "Compatibilidade", desc: "Atendemos Honda, Yamaha, BMW, Kawasaki e outras." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center bg-neutral-900/50 p-4 border border-neutral-800 hover:border-red-600/50 transition-colors">
                                        <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase">{item.title}</h4>
                                            <p className="text-neutral-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600 transform skew-y-2 translate-x-2 translate-y-2 opacity-20"></div>
                            <div className="bg-neutral-900 border border-neutral-800 p-10 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-8 uppercase flex items-center gap-2">
                                    <span className="text-red-600">⚡</span>
                                    Quando Procurar?
                                </h3>

                                <ul className="space-y-2">
                                    {[
                                        "Perdeu a chave da motocicleta",
                                        "Possui apenas uma chave funcional",
                                        "A chave apresenta desgaste visível",
                                        "O sistema de ignição está difícil de usar",
                                        "Deseja criar uma chave reserva"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-neutral-300 py-3 border-b border-neutral-800 last:border-0 hover:pl-2 transition-all cursor-default">
                                            <span className="text-red-600 font-bold">»</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase italic">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-black hover:border-red-600 transition-colors duration-300">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none">
                                    {item.question}
                                    <span className="text-red-600 text-xl font-light transform group-open:rotate-90 transition-transform">|</span>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800 pt-4 group-open:animate-fadeIn">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter italic">PROBLEMAS COM A <span className="text-red-600">MOTO?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento especializado para sua motocicleta.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-white text-black hover:bg-red-600 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_0_rgb(30,30,30)] hover:shadow-[0_5px_0_rgb(50,0,0)]"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
