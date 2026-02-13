import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave de Fechadura de Tambor em Porto Alegre | Chris Chaves',
    description: 'Realizamos cópias de chaves para fechaduras de tambor (Yale) em Porto Alegre. Atendimento rápido e precisão para garantir o giro suave.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/copia-de-chave-fechadura-de-tambor/',
    },
}

export default function CopiaChaveTamborPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20cópia%20de%20chave%20de%20tambor"

    const faqData = [
        {
            question: "Qual a diferença da fechadura de tambor para outros modelos?",
            answer: "A fechadura de tambor (ou cilindro) utiliza um mecanismo interno com pinos alinhados por molas. A chave correta levanta esses pinos até a altura do 'corte' (linha de giro), liberando o rotor para rodar."
        },
        {
            question: "Toda chave de tambor pode ser copiada?",
            answer: "Sim, a grande maioria (Yale comum) pode ser copiada rapidamente. Alguns modelos de cilindro europeu ou de alta segurança podem exigir cartões de código."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim. A melhor cópia é feita a partir da chave original. Cópias de chaves que já são 'cópias da cópia' podem acumular erros de usinagem e não funcionar suavemente."
        },
        {
            question: "Fazer chave reserva é recomendado?",
            answer: "Sempre. Se você perder a única chave de uma fechadura de tambor trancada, o chaveiro precisará usar técnicas de micha ou perfuração, o que sai mais caro que uma cópia simples."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-amber-600/30 selection:text-amber-500 font-sans">
            <ServiceJsonLd
                name="Cópia de Chave de Fechadura de Tambor"
                description="Serviço de duplicação de chaves Yale comuns para fechaduras de cilindro em Porto Alegre."
                url="https://chrischaves.com.br/servicos/copia-de-chave-fechadura-de-tambor/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/copia-de-chave-fechadura-de-tambor/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: CLASSIC BRASS */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Mechanical texture */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,119,6,0.05)_25%,rgba(217,119,6,0.05)_50%,transparent_50%,transparent_75%,rgba(217,119,6,0.05)_75%)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.1),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/30 border border-amber-600/30 rounded-none text-amber-500 text-xs font-mono tracking-widest uppercase">
                                <span className="text-lg">🗝</span>
                                Padrão Yale
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                                    DE TAMBOR
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-amber-600/80 font-mono mb-8 uppercase tracking-widest">
                                Duplicação Precisa de Cilindros
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                A fechadura de tambor, também conhecida como fechadura de cilindro, é o modelo mais comum em portas residenciais e comerciais. O sistema exige alinhamento preciso entre os dentes da chave e os pinos internos para permitir o destravamento.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-amber-600/30 pl-4 py-2 font-mono">
                                Garantimos uma cópia fiel que desliza suavemente, evitando o travamento ou a quebra dentro do miolo causada por cópias imprecisas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(217,119,6,0.3)]"
                                >
                                    <span className="mr-2">Solicitar Cópia</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: TUMBLER MECHANISM */}
                        <div className="w-full lg:w-96 bg-[#1a1510] border-2 border-amber-900/30 p-8 relative rounded shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-20 origin-center rotate-45">
                                <svg className="w-32 h-32 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V3a2 2 0 012-2z" /></svg>
                            </div>

                            <h3 className="font-bold text-amber-500 uppercase mb-8 border-b border-amber-900/50 pb-2">Mecanismo Interno</h3>

                            <div className="space-y-4 relative z-10">
                                {[1, 2, 3, 4, 5].map((pin, i) => (
                                    <div key={i} className="flex justify-between items-center group">
                                        <span className="font-mono text-xs text-neutral-500">PINO {pin}</span>
                                        <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-amber-600"
                                                style={{ width: `${Math.random() * 60 + 20}%` }}
                                            ></div>
                                        </div>
                                        <span className="font-mono text-xs text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">OK</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-center">
                                <span className="text-xs text-neutral-600 uppercase tracking-widest">Alinhamento Certificado</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="mb-16 border-l-4 border-amber-600 pl-6">
                        <span className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2 block">Usos Comuns</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Aplicações do <span className="text-neutral-500">Tambor</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Portas Residenciais",
                                desc: "O padrão mais comum em casas e apartamentos (fechaduras Yale).",
                                icon: "🏠"
                            },
                            {
                                title: "Comércio",
                                desc: "Fechaduras simples de divisórias e portas internas de escritórios.",
                                icon: "🏢"
                            },
                            {
                                title: "Cadeados",
                                desc: "Muitos cadeados utilizam o mesmo princípio de tambor de pinos.",
                                icon: "🔒"
                            },
                            {
                                title: "Portões",
                                desc: "Fechaduras elétricas de sobrepor também utilizam cilindros de tambor.",
                                icon: "⛩️"
                            },
                            {
                                title: "Armários",
                                desc: "Fechaduras de gaveta e armários de vestiário com chaves pequenas.",
                                icon: "🗄️"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-amber-700/50 transition-colors duration-300 group rounded">
                                <div className="text-4xl mb-4 group-hover:text-amber-500 transition-colors text-neutral-600">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-500 transition-colors uppercase">{card.title}</h3>
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
                        <div className="space-y-12">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Vantagens da <span className="text-amber-600">Cópia Profissional</span></h3>
                            <p className="text-neutral-400 text-lg">Evite o "agarramento" da chave na fechadura com um serviço técnico.</p>

                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { title: "Material Resistente", desc: "Utilizamos latão de alta qualidade que não entorta fácil." },
                                    { title: "Acabamento Liso", desc: "Chaves sem rebarbas que não danificam o segredo." },
                                    { title: "Rapidez", desc: "Cópia feita em minutos com máquinas calibradas." },
                                    { title: "Garantia", desc: "Se não girar suavemente, ajustamos na hora." }
                                ].map((item, i) => (
                                    <li key={i} className="bg-neutral-900/20 p-4 border-b-2 border-neutral-800 hover:border-amber-600 transition-colors">
                                        <h4 className="text-white font-bold uppercase text-sm mb-1">{item.title}</h4>
                                        <p className="text-neutral-500 text-xs">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-[#12100e] border border-amber-900/20 p-10 relative">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-600/20 to-transparent"></div>

                            <h3 className="text-2xl font-bold text-white mb-8 uppercase relative z-10 flex items-center gap-3">
                                <span className="text-amber-600">🔑</span>
                                Quando Copiar?
                            </h3>

                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Possui apenas uma chave funcional",
                                    "Mudou recentemente de imóvel",
                                    "Precisa compartilhar acesso",
                                    "A chave apresenta sinais de desgaste",
                                    "Família aumentou (mais cópias)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center border-b border-neutral-800 pb-2 last:border-0 hover:pl-2 transition-all cursor-default">
                                        <span className="text-amber-700 text-xs font-black">❯</span>
                                        <span className="text-neutral-300 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href={whatsappLink} target="_blank" className="mt-8 block w-full py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold text-center uppercase tracking-wide transition-colors shadow-lg shadow-amber-900/20 rounded-sm">
                                Falar com Chaveiro
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
                        <div key={index} className="group border border-neutral-800 hover:border-amber-600/30 transition-colors bg-neutral-900/30">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-amber-500 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-amber-700 group-open:rotate-45 transition-transform text-2xl">+</span>
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
            <section className="py-32 bg-amber-950/10 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE <span className="text-amber-600">DUPLICAÇÃO?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento rápido em Porto Alegre.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-white text-black hover:bg-amber-500 hover:text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-[4px_4px_0_rgba(60,40,20,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
