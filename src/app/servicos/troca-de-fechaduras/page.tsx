import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Troca de Fechaduras em Porto Alegre | Chris Chaves',
    description: 'Substituição e instalação de fechaduras residenciais e comerciais em Porto Alegre. Modelos de alta segurança e atendimento especializado.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/troca-de-fechaduras/',
    },
}

export default function TrocaFechadurasPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20trocar%20uma%20fechadura"

    const faqData = [
        {
            question: "Preciso trocar toda a fechadura ou apenas o segredo?",
            answer: "Depende do estado do mecanismo e da necessidade de segurança. Em muitos casos, a troca do cilindro (o miolo) já resolve e é mais econômica."
        },
        {
            question: "Qualquer porta pode receber nova fechadura?",
            answer: "A escolha do modelo depende do tipo de porta (madeira, ferro, vidro) e da estrutura existente. Avaliamos para indicar o modelo compatível."
        },
        {
            question: "Trocar a fechadura melhora a segurança?",
            answer: "Sim. Modelos adequados, de marcas reconhecidas e bem instalados, aumentam significativamente o nível de proteção do imóvel."
        },
        {
            question: "Quando é indicado substituir em vez de consertar?",
            answer: "Quando há desgaste excessivo no mecanismo interno, ferrugem severa ou quando o modelo é obsoleto e não oferece mais segurança."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-green-600/30 selection:text-green-500 font-sans">
            <ServiceJsonLd
                name="Troca de Fechaduras em Porto Alegre"
                description="Serviço profissional de troca e instalação de fechaduras em Porto Alegre. Trabalhamos com as melhores marcas para garantir sua segurança."
                url="https://chrischaves.com.br/servicos/troca-de-fechaduras/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/troca-de-fechaduras/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: MECHANICAL PRECISION */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Technical Blueprint Background */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-900/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/30 rounded-full text-green-500 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-sm bg-green-500 animate-spin-slow"></span>
                                Manutenção e Instalação
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                TROCA DE FECHADURAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                                    EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-green-500 font-mono mb-8 uppercase tracking-widest">
                                Substituição Residencial e Comercial
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                A troca de fechaduras é um serviço importante para manter a segurança e o bom funcionamento das portas. Com o uso constante, as fechaduras podem apresentar desgaste ou deixar de oferecer o nível de proteção desejado.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-green-500/30 pl-4 py-2">
                                Muitas pessoas procuram troca de fechadura em Porto Alegre após mudanças de residência, perda de chaves ou quando desejam atualizar sistemas antigos por modelos mais modernos e seguros.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                                >
                                    <span className="mr-2">Solicitar Troca</span>
                                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: SPECIFICATION PANEL */}
                        <div className="w-full lg:w-96 bg-neutral-900/50 border border-neutral-800 p-8 backdrop-blur-sm">
                            <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
                                <span className="text-green-500">⚙️</span>
                                Especificações
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-neutral-400 font-mono">
                                        <span>INSTALAÇÃO TÉCNICA</span>
                                        <span className="text-white">PRECISÃO</span>
                                    </div>
                                    <div className="h-1 w-full bg-neutral-800 overflow-hidden">
                                        <div className="h-full bg-green-500 w-[98%]"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-neutral-400 font-mono">
                                        <span>COMPATIBILIDADE</span>
                                        <span className="text-white">UNIVERSAL</span>
                                    </div>
                                    <div className="h-1 w-full bg-neutral-800 overflow-hidden">
                                        <div className="h-full bg-green-500 w-[100%]"></div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-neutral-800 mt-6">
                                    <p className="text-sm text-neutral-300 leading-relaxed">
                                        Realizar a substituição no momento certo ajuda a evitar problemas futuros e melhora a proteção do imóvel.
                                    </p>
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
                            Situações <span className="text-green-500">Comuns</span>
                        </h2>
                        <div className="h-px bg-neutral-800 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Novo Imóvel",
                                desc: "Ao mudar-se, trocar as fechaduras é a única garantia de que antigos moradores não tenham acesso.",
                                icon: "🏠"
                            },
                            {
                                title: "Dificuldade ao Girar",
                                desc: "Fechadura travando ou exigindo força para girar a chave é sinal claro de desgaste mecânico.",
                                icon: "🔧"
                            },
                            {
                                title: "Perda de Chaves",
                                desc: "O extravio de chaves compromete a segurança, sendo recomendada a troca imediata do segredo.",
                                icon: "🔑"
                            },
                            {
                                title: "Reforço de Segurança",
                                desc: "Atualização de modelos simples para fechaduras com cilindros de segurança ou tetra-chave.",
                                icon: "🛡"
                            },
                            {
                                title: "Atualização Estética",
                                desc: "Troca de modelos antigos oxidados por peças novas com acabamento moderno.",
                                icon: "✨"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-green-500 transition-colors duration-300 group">
                                <div className="text-4xl mb-4 group-hover:rotate-12 transition-transform duration-300">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
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
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios da <span className="text-green-500">Troca Profissional</span></h3>
                            <p className="text-neutral-400 text-lg">A substituição realizada por um chaveiro especializado oferece vantagens importantes.</p>

                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { title: "Escolha do Modelo", desc: "Indicação da fechadura correta para o tipo de porta." },
                                    { title: "Instalação Correta", desc: "Ajuste preciso para evitar emperramentos futuros." },
                                    { title: "Maior Durabilidade", desc: "Fixação adequada garantindo longa vida útil." },
                                    { title: "Ajuste do Mecanismo", desc: "Fechamento suave e seguro sem esforço." }
                                ].map((item, i) => (
                                    <li key={i} className="bg-neutral-900/30 p-4 border-l-2 border-green-500">
                                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                        <p className="text-neutral-500 text-sm">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-neutral-900 border border-neutral-800 p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-green-500 pointer-events-none">?</div>

                            <h3 className="text-2xl font-bold text-white mb-8 uppercase relative z-10">
                                Quando Trocar?
                            </h3>

                            <ul className="space-y-4 relative z-10">
                                {[
                                    "A fechadura apresenta desgaste ou travamentos",
                                    "Mudou recentemente de residência",
                                    "Há preocupação com segurança pós-perda de chave",
                                    "Deseja reforçar o sistema de acesso",
                                    "A chave está difícil de girar ou prender"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center group">
                                        <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center bg-black group-hover:border-green-500 transition-colors">
                                            <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-neutral-300 font-mono text-sm">{item}</span>
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
                        <div key={index} className="group border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none">
                                    {item.question}
                                    <span className="text-green-500 opacity-50 group-hover:opacity-100 transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm leading-relaxed pl-4 border-l-2 border-green-500/30">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-green-900/5 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA TROCAR A <span className="text-green-500">FECHADURA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento profissional.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-green-600 hover:bg-green-500 text-black font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(34,197,94,0.3)] rounded-sm"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
