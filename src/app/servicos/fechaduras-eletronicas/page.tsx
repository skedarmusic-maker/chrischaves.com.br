import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fechaduras Eletrônicas em Porto Alegre | Chris Chaves',
    description: 'Modernize o acesso ao seu imóvel com fechaduras eletrônicas. Instalação de modelos com biometria, senha e tag em Porto Alegre.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/fechaduras-eletronicas/',
    },
}

export default function FechadurasEletronicasPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20tenho%20interesse%20em%20fechaduras%20eletrônicas"

    const faqData = [
        {
            question: "Fechadura eletrônica é segura?",
            answer: "Sim. Modelos de qualidade utilizam criptografia avançada e travas motorizadas que oferecem resistência superior a arrombamentos comuns em fechaduras mecânicas."
        },
        {
            question: "Toda porta pode receber fechadura eletrônica?",
            answer: "Nem todas. É preciso verificar a espessura da porta, tipo de material (madeira, vidro, metal) e se há espaço para o maquinário interno ou se é necessário um modelo de sobrepor."
        },
        {
            question: "Precisa de manutenção?",
            answer: "A manutenção principal é a troca de pilhas (geralmente anualmente). O sistema avisa quando a bateria está fraca. Fora isso, apenas limpeza básica."
        },
        {
            question: "Posso manter chave física como backup?",
            answer: "Sim. Muitos modelos híbridos possuem um cilindro mecânico oculto para abertura de emergência em caso de pane total ou falta de bateria."
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
        <main className="min-h-screen bg-black text-gray-200 selection:bg-teal-500/30 selection:text-teal-400 font-sans">
            <ServiceJsonLd
                name="Fechaduras Eletrônicas em Porto Alegre"
                description="Serviços de instalação e manutenção de fechaduras digitais e eletrônicas em Porto Alegre. Praticidade e tecnologia para sua segurança."
                url="https://chrischaves.com.br/servicos/fechaduras-eletronicas/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/fechaduras-eletronicas/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: SMART ACCESS */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Digital Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-950/30 border border-teal-500/30 rounded-full text-teal-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                                Smart Security
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                FECHADURAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
                                    ELETRÔNICAS
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-teal-600 font-mono mb-8 uppercase tracking-widest">
                                Instalação e Substituição
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                As fechaduras eletrônicas oferecem uma alternativa moderna aos sistemas tradicionais, permitindo acesso por senha, cartão, biometria ou outros métodos digitais. Modernize o controle de entrada da sua residência ou empresa.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-teal-500/30 pl-4 py-2 font-mono">
                                A instalação ajuda a melhorar a segurança e facilita o gerenciamento de acessos sem depender exclusivamente de chaves físicas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                                >
                                    <span className="mr-2">Cotar Instalação</span>
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: INTERFACE VISUALIZATION */}
                        <div className="w-full lg:w-[400px] h-[500px] bg-neutral-900 border-4 border-neutral-800 rounded-3xl relative shadow-2xl flex flex-col overflow-hidden">
                            {/* Screen Reflection */}
                            <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                            {/* Keypad Interface */}
                            <div className="flex-1 bg-black p-8 flex flex-col justify-between relative">
                                <div className="absolute inset-0 bg-teal-900/10 animate-pulse-slow"></div>

                                <div className="text-center space-y-2 relative z-10">
                                    <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-full flex items-center justify-center mb-4 border border-teal-500/30">
                                        <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.571-4.182m1.5-1.55c.668-1.282 1.57-2.4 2.657-3.27a.75.75 0 00.957-.042" /></svg>
                                    </div>
                                    <p className="text-teal-400 font-mono text-sm tracking-[5px] animate-pulse">LOCKED</p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                        <div key={num} className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center text-white text-xl font-light hover:bg-teal-500/20 hover:border-teal-500 transition-colors cursor-default">
                                            {num}
                                        </div>
                                    ))}
                                    <div className="w-16 h-16 flex items-center justify-center text-white text-xl">*</div>
                                    <div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center text-white text-xl font-light hover:bg-teal-500/20 hover:border-teal-500 transition-colors cursor-default">0</div>
                                    <div className="w-16 h-16 flex items-center justify-center text-white text-xl">#</div>
                                </div>
                            </div>

                            {/* Handle */}
                            <div className="h-32 bg-neutral-800 flex items-center justify-center border-t border-neutral-700">
                                <div className="w-24 h-4 rounded-full bg-neutral-700 shadow-inner"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-2 block">Upgrade</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Quando <span className="text-neutral-500">Modernizar?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "AirBnb / Aluguel",
                                desc: "Facilite o check-in enviando senhas temporárias para hóspedes, sem entrega física de chaves.",
                                icon: "🏨"
                            },
                            {
                                title: "Escritórios",
                                desc: "Controle quem entra e sai. Registre acessos de funcionários e elimine cópias de chaves.",
                                icon: "💼"
                            },
                            {
                                title: "Esquecimento",
                                desc: "Ideal para quem vive perdendo ou esquecendo as chaves. Seu dedo ou senha é a chave.",
                                icon: "🧠"
                            },
                            {
                                title: "Design Moderno",
                                desc: "Valorize a estética da porta de entrada com um equipamento tecnológico de ponta.",
                                icon: "✨"
                            },
                            {
                                title: "Segurança",
                                desc: "Travamento automático ao fechar a porta. Nunca mais fique na dúvida se trancou.",
                                icon: "🛡️"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-teal-500/50 transition-colors duration-300 group rounded-lg">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-400 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & TYPES */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios <span className="text-teal-500">Digitais</span></h3>
                            <p className="text-neutral-400 text-lg">Praticidade e controle na palma da mão ou na ponta dos dedos.</p>

                            <ul className="space-y-6">
                                {[
                                    { title: "Múltiplos Acessos", desc: "Senha, Biometria, Tag, Cartão e App." },
                                    { title: "Gestão", desc: "Adicione ou remova usuários sem trocar o segredo da fechadura." },
                                    { title: "Alertas", desc: "Alarme de tentativa de invasão e bateria fraca." },
                                    { title: "Autonomia", desc: "Funcionamento a pilhas, não depende de luz elétrica." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start border-l-2 border-teal-900 pl-6 hover:border-teal-500 transition-colors">
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase mb-1">{item.title}</h4>
                                            <p className="text-neutral-500 text-xs">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: TYPES LIST */}
                        <div className="bg-gradient-to-br from-neutral-900 to-black p-10 border border-neutral-800 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg className="w-32 h-32 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17a2 2 0 100-4 2 2 0 000 4zm-1-9V6a1 1 0 011-1h0a1 1 0 011 1v2a1 1 0 01-1 1h0a1 1 0 01-1-1z" /></svg>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 uppercase flex items-center gap-3">
                                <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
                                Tecnologias Disponíveis
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { name: "Biometria", desc: "Leitura de impressão digital rápida." },
                                    { name: "Senha Numérica", desc: "Teclado touch retroiluminado." },
                                    { name: "Cartão / Tag", desc: "Aproximação RFID (ideal para empresas)." },
                                    { name: "App / Wi-Fi", desc: "Abertura remota e relatórios de acesso." },
                                    { name: "Híbridas", desc: "Mantém chave mecânica para emergências." }
                                ].map((tech, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-neutral-800 pb-3 hover:bg-neutral-800/50 p-2 rounded transition-colors group cursor-default">
                                        <span className="text-white font-bold text-sm uppercase">{tech.name}</span>
                                        <span className="text-neutral-500 text-xs group-hover:text-teal-400 transition-colors">{tech.desc}</span>
                                    </div>
                                ))}
                            </div>

                            <a href={whatsappLink} target="_blank" className="mt-8 block w-full py-4 bg-teal-950 text-teal-400 border border-teal-500/30 hover:bg-teal-900 font-bold text-center uppercase tracking-wide transition-colors rounded">
                                Ver Modelos
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                {/* Checklist */}
                <div className="mb-20 bg-neutral-900 p-8 border-l-4 border-teal-500 rounded-r-lg">
                    <h3 className="text-teal-500 font-bold uppercase tracking-widest mb-4 text-sm">Checklist de Decisão</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Deseja modernizar o sistema",
                            "Quer reduzir uso de chaves",
                            "Precisa controlar acessos",
                            "Busca conveniência diária",
                            "Imóvel recém reformado"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-neutral-300">
                                <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-bold">✓</div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* FAQ */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Dúvidas Comuns</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-neutral-800 last:border-0">
                            <details className="py-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-white text-lg hover:text-teal-400 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-teal-600 font-light text-2xl group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-base leading-relaxed pl-4 border-l border-teal-500/20">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-black relative overflow-hidden text-center border-t border-neutral-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-teal-500/5 blur-3xl rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">ENTRE NA ERA <span className="text-teal-500">DIGITAL</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para avaliarmos sua porta e indicarmos o modelo ideal de fechadura eletrônica.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 rounded-full shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:shadow-[0_0_60px_rgba(20,184,166,0.5)] hover:scale-105"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
