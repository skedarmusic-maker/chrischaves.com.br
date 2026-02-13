import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave Multipontos em Porto Alegre | Chris Chaves',
    description: 'Duplicação de chaves de alta segurança multiponto em Porto Alegre. Precisão máxima para fechaduras residenciais e comerciais reforçadas.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/copia-de-chave-multipontos/',
    },
}

export default function CopiaChaveMultipontosPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20cópia%20de%20chave%20multipontos"

    const faqData = [
        {
            question: "Qual a diferença da chave multipontos para chave comum?",
            answer: "A chave multipontos possui orifícios calibrados na superfície em vez de dentes na borda. Ela aciona múltiplos pinos de travamento simultaneamente, oferecendo muito mais segurança contra micha e violação."
        },
        {
            question: "Toda chave multipontos pode ser copiada?",
            answer: "Depende do modelo, marca e se possui cartão de segurança. A maioria das residenciais (Keso, Mul-T-Lock, etc.) pode ser copiada, mas exige equipamento específico."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim, para garantir uma cópia de precisão é necessário ter a chave original ou o cartão de código (se houver) em mãos para a leitura das medidas."
        },
        {
            question: "Fazer chave reserva é recomendado?",
            answer: "Sim. Como são chaves de alta segurança, perder a única via pode exigir a troca de todo o cilindro, o que tem um custo muito mais elevado."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-blue-300/30 selection:text-blue-200 font-sans">
            <ServiceJsonLd
                name="Cópia de Chave Multipontos"
                description="Serviço técnico de duplicação de chaves multiponto de alta segurança em Porto Alegre."
                url="https://chrischaves.com.br/servicos/copia-de-chave-multipontos/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/copia-de-chave-multipontos/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: TITANIUM VAULT */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Metallic Texture Background */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(200,200,255,0.03)_50%,transparent_100%)] pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-600/30 rounded-none text-slate-300 text-xs font-mono tracking-widest uppercase">
                                <span className="text-blue-400">🛡</span>
                                High Security System
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                                    MULTIPONTOS
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-slate-400 font-mono mb-8 uppercase tracking-widest">
                                Duplicação de Alta Segurança
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                As chaves multipontos são utilizadas em sistemas de fechadura que possuem múltiplos pontos de travamento, oferecendo maior estabilidade e segurança. Esse tipo de mecanismo é comum em portas reforçadas e sistemas de segurança residencial ou comercial.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-slate-500/30 pl-4 py-2 font-mono">
                                A cópia de chave multipontos exige atenção especial e equipamento de precisão, já que esses modelos possuem características de usinagem diferentes das chaves tradicionais.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-200 hover:bg-white text-black font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    <span className="mr-2">Solicitar Cópia</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: PRECISION MECHANISM */}
                        <div className="w-full lg:w-96 bg-gradient-to-br from-slate-900 to-black border border-slate-800 p-8 relative shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-slate-500 opacity-20"></div>

                            <div className="grid grid-cols-5 gap-2 mb-8 opacity-30">
                                {Array.from({ length: 25 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                ))}
                            </div>

                            <h3 className="font-bold text-white uppercase mb-6 flex justify-between items-end border-b border-slate-800 pb-4">
                                <span>Precisão</span>
                                <span className="text-4xl text-slate-500 font-mono tracking-tighter">µm</span>
                            </h3>

                            <ul className="space-y-4 text-xs font-mono text-slate-400">
                                <li className="flex justify-between items-center">
                                    <span>CALIBRAÇÃO</span>
                                    <span className="text-green-500">100%</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>PONTOS DE TRAVA</span>
                                    <span className="text-white">MÚLTIPLOS</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>RESISTÊNCIA</span>
                                    <span className="text-white">MAX</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                                <p className="text-slate-500 text-xs uppercase tracking-widest">Certified Security</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS GRID */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em] mb-2 block">Alta Demanda</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Quando Duplicar?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Chave Reserva",
                                desc: "Essencial para alta segurança. Perder a única via pode custar a troca completa da fechadura.",
                                icon: "🗝️"
                            },
                            {
                                title: "Compartilhamento",
                                desc: "Acesso seguro para familiares, funcionários de confiança ou colaboradores.",
                                icon: "🤝"
                            },
                            {
                                title: "Desgaste",
                                desc: "Substituição preventiva de chaves que começam a apresentar dificuldade no encaixe.",
                                icon: "⚠️"
                            },
                            {
                                title: "Gestão Comercial",
                                desc: "Organização hierárquica de acesso para setores restritos em empresas.",
                                icon: "🏢"
                            },
                            {
                                title: "Prevenção",
                                desc: "Evitar surpresas desagradáveis e custos emergenciais tendo um backup acessível.",
                                icon: "🛡️"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:bg-slate-900 transition-colors duration-300 group">
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & SYSTEMS */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios <span className="text-slate-400">Profissionais</span></h3>
                                <p className="text-neutral-400 text-lg">Realizar a cópia com chaveiro especializado em alta segurança é crucial.</p>

                                <ul className="space-y-4">
                                    {[
                                        "Corte de precisão milimétrica",
                                        "Compatibilidade com grandes marcas",
                                        "Funcionamento suave no cilindro",
                                        "Redução do desgaste da fechadura",
                                        "Garantia de funcionamento"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center text-neutral-300 border-b border-neutral-900 pb-2">
                                            <span className="text-blue-500 font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-900/20 p-8 border border-slate-800/50">
                                <h4 className="text-xl font-bold text-white mb-4 uppercase">Sistemas Atendidos</h4>
                                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
                                    <span>• Fechaduras Residenciais</span>
                                    <span>• Portas Blindadas</span>
                                    <span>• Sistemas Multipontos</span>
                                    <span>• Alta Segurança</span>
                                    <span>• Cilindros Europeus</span>
                                    <span>• Travas Reforçadas</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-10 relative">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase relative z-10 flex items-center gap-3">
                                <span className="w-1 h-6 bg-blue-500"></span>
                                Checklist
                            </h3>
                            <p className="text-neutral-500 mb-6 text-sm">Considere duplicar se:</p>

                            <ul className="space-y-2 relative z-10">
                                {[
                                    "Possui apenas uma chave funcional",
                                    "Mudou recentemente de imóvel",
                                    "Precisa compartilhar acesso com segurança",
                                    "A chave atual apresenta desgaste",
                                    "Deseja manter uma reserva estratégica"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center p-3 bg-neutral-900/50 hover:bg-neutral-800 transition-colors border border-transparent hover:border-slate-700">
                                        <span className="text-slate-500 text-lg">›</span>
                                        <span className="text-neutral-200 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href={whatsappLink} target="_blank" className="mt-8 block w-full py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold text-center uppercase tracking-wide transition-colors shadow-lg">
                                Falar com Técnico
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
                        <div key={index} className="group border border-neutral-800 rounded-sm overflow-hidden hover:border-slate-600 transition-colors">
                            <details className="p-6 cursor-pointer bg-neutral-900/10">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-slate-500 group-loading:hidden group-open:hidden">+</span>
                                    <span className="text-blue-400 hidden group-open:inline">−</span>
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
            <section className="py-32 bg-slate-900/5 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE UMA <span className="text-slate-400">CÓPIA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento para sua chave multipontos.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-white text-slate-900 hover:bg-slate-200 font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] rounded-sm"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
