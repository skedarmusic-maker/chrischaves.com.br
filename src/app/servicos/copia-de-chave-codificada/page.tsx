import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave Codificada em Porto Alegre | Chris Chaves',
    description: 'Especialista em cópia e programação de chaves codificadas para veículos nacionais e importados em Porto Alegre. Scanner OBD2 e chips de alta qualidade.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/copia-de-chave-codificada/',
    },
}

export default function CopiaChaveCodificadaPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20cópia%20de%20chave%20codificada"

    const faqData = [
        {
            question: "Toda chave codificada pode ser copiada?",
            answer: "Depende do modelo do veículo, do ano e do tipo de transponder (chip). A grande maioria dos carros nacionais e importados permite cópia, mas alguns exigem equipamentos específicos de diagnóstico."
        },
        {
            question: "A nova chave funciona igual à original?",
            answer: "Sim. A cópia codificada cria um 'clone' eletrônico ou uma nova identidade autorizada no módulo do veículo, funcionando exatamente como a original para abrir e ligar o carro."
        },
        {
            question: "Preciso levar o veículo?",
            answer: "Sim. Para chaves codificadas, é necessário conectar o equipamento de programação (scanner) na porta OBD do veículo para sincronizar o novo chip com a central eletrônica."
        },
        {
            question: "Fazer chave reserva é importante?",
            answer: "Vital. Perder todas as chaves de um carro codificado exige um processo chamado 'leitura de senha' ou reset da central, que é muito mais complexo e caro que uma cópia simples."
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
            <ServiceJsonLd
                name="Cópia de Chave Codificada em Porto Alegre"
                description="Especialista em cópia e programação de chaves codificadas para veículos nacionais e importados em Porto Alegre. Scanner OBD2 e chips de alta qualidade."
                url="https://chrischaves.com.br/servicos/copia-de-chave-codificada/"
                title='Cópia de Chave Codificada em Porto Alegre | Chris Chaves'
                alternates={{
                    canonical: 'https://chrischaves.com.br/servicos/copia-de-chave-codificada/',
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: DIGITAL CIRCUIT */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Circuit Board Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.15),transparent_50%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-md text-green-400 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 bg-green-500 rounded-sm animate-pulse-fast"></span>
                                Transponder Technology
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                                    CODIFICADA
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-green-600 font-mono mb-8 uppercase tracking-widest">
                                Duplicação de Chaves Automotivas
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                A chave codificada possui um chip eletrônico interno que se comunica com o sistema do veículo para permitir o funcionamento da ignição. Diferente das chaves tradicionais, ela depende de compatibilidade eletrônica para que o carro reconheça o acesso.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-2 border-green-500/30 pl-4 py-2 font-mono">
                                A cópia envolve processos técnicos que vão além do corte físico, garantindo que a nova chave funcione corretamente com o sistema imobilizador do veículo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                >
                                    <span className="mr-2">Sincronizar Chave</span>
                                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.571-4.182m1.5-1.55c.668-1.282 1.57-2.4 2.657-3.27a.75.75 0 00.957-.042" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: CHIP DIAGNOSTIC */}
                        <div className="w-full lg:w-96 bg-black border border-neutral-800 p-1 relative rounded-lg group">
                            <div className="absolute inset-0 bg-green-500/5 rounded-lg animate-pulse-slow"></div>

                            <div className="bg-neutral-900/80 p-6 rounded relative z-10 overflow-hidden font-mono text-xs">
                                <div className="absolute top-0 right-0 p-2 text-green-500 opacity-50">
                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2l15 13-15 4-5-4z" /></svg>
                                </div>

                                <h3 className="text-green-400 font-bold mb-6 text-lg tracking-tight">SYSTEM DIAGNOSTIC</h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                                        <span className="text-neutral-500">TRANSPONDER</span>
                                        <span className="text-white">DETECTED (ID48)</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                                        <span className="text-neutral-500">CRYPTO KEY</span>
                                        <span className="text-green-500">MATCHED</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                                        <span className="text-neutral-500">IMMOBILIZER</span>
                                        <span className="text-green-500">UNLOCKED</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-neutral-500">SIGNAL</span>
                                        <div className="flex gap-1">
                                            <div className="w-1 h-3 bg-green-500"></div>
                                            <div className="w-1 h-3 bg-green-500"></div>
                                            <div className="w-1 h-3 bg-green-500"></div>
                                            <div className="w-1 h-3 bg-green-500"></div>
                                            <div className="w-1 h-3 bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t border-white/10 text-center">
                                    <span className="inline-block px-2 py-1 bg-green-500/10 text-green-400 rounded text-[10px]">READY TO CLONE</span>
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
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-neutral-800"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider text-center">
                            Quando <span className="text-green-500">Codificar?</span>
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-neutral-800"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Chave Única",
                                desc: "Risco crítico. Se a única chave codificada for perdida, o custo para recuperar o acesso é muito alto.",
                                icon: "⚠️"
                            },
                            {
                                title: "Carro Usado",
                                desc: "Comprou um seminovo e veio apenas uma chave? É essencial fazer a reserva imediatamente.",
                                icon: "🚗"
                            },
                            {
                                title: "Chave Reserva",
                                desc: "Segurança para viagens e dia a dia. Evite ficar a pé por perda ou roubo.",
                                icon: "🗝️"
                            },
                            {
                                title: "Compartilhamento",
                                desc: "Mais de um motorista na família? Cada um deve ter sua cópia para evitar desgaste excessivo.",
                                icon: "👥"
                            },
                            {
                                title: "Desgaste Eletrônico",
                                desc: "Chaves antigas podem apresentar falha no sinal do transponder. Substituição preventiva.",
                                icon: "📉"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-green-500/50 transition-colors duration-300 group rounded-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-4xl font-bold text-neutral-700 group-hover:text-green-500 transition-colors">0{i + 1}</div>
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed relative z-10">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & DIFFERENCES */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios da <span className="text-green-500">Tecnologia</span></h3>
                            <p className="text-neutral-400 text-lg">A duplicação profissional garante a integridade do sistema do veículo.</p>

                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { title: "Sincronização Perfeita", desc: "Comunicação sem falhas com a ECU do carro." },
                                    { title: "Corte CNC", desc: "Lâmina cortada com precisão digital para não travar." },
                                    { title: "Segurança", desc: "Garantia que apenas as chaves autorizadas ligarão o motor." },
                                    { title: "Durabilidade", desc: "Carcaças e componentes eletrônicos de alta resistência." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center bg-neutral-900/30 p-4 border-l-4 border-green-500 rounded-r-md">
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold text-sm uppercase">{item.title}</h4>
                                            <p className="text-neutral-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: REPROGRAMMING VS COPY */}
                        <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 p-10 relative rounded-2xl overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>

                            <h3 className="text-xl font-bold text-white mb-6 uppercase flex items-center gap-2">
                                <span className="text-green-500">ℹ️</span>
                                Cópia vs. Reprogramação
                            </h3>

                            <div className="space-y-6 text-sm">
                                <div>
                                    <h4 className="text-green-400 font-bold mb-2 uppercase text-xs tracking-wider">Duplicação (Cópia)</h4>
                                    <p className="text-neutral-300 leading-relaxed border-l-2 border-neutral-700 pl-3">
                                        Cria uma nova chave funcional baseada na leitura eletrônica da original. É um processo de clonagem ou adição de nova chave autorizada.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-emerald-400 font-bold mb-2 uppercase text-xs tracking-wider">Reprogramação</h4>
                                    <p className="text-neutral-300 leading-relaxed border-l-2 border-neutral-700 pl-3">
                                        Envolve ajustes profundos na comunicação eletrônica, geralmente necessário quando o sistema perdeu a referência das chaves ou houve troca de módulo.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-neutral-800">
                                <p className="text-center text-neutral-500 text-xs mb-4">DÚVIDA QUAL VOCÊ PRECISA?</p>
                                <a href={whatsappLink} target="_blank" className="block w-full py-3 bg-green-900/50 hover:bg-green-800/50 text-green-400 font-bold text-center uppercase tracking-wide transition-colors border border-green-500/30 rounded">
                                    Consultar Técnico
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CHECKLIST & FAQ */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                {/* Checklist */}
                <div className="mb-20 bg-green-900/10 border border-green-900/50 p-8 rounded-xl">
                    <h3 className="text-center text-green-400 font-bold uppercase tracking-widest mb-8">Checklist de Necessidade</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Possui apenas uma chave codificada",
                            "Quer evitar imprevistos futuros",
                            "A chave atual apresenta desgaste",
                            "Compartilha o veículo com outra pessoa",
                            "Deseja ter chave reserva funcional"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-black px-4 py-2 rounded-full border border-neutral-800 text-neutral-300 text-sm">
                                <span className="text-green-500">✓</span> {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-neutral-900/20 hover:border-green-500/30 transition-colors rounded-lg">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-green-400 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <svg className="w-5 h-5 text-neutral-600 group-hover:text-green-500 transform group-open:rotate-180 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
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
            <section className="py-32 bg-gradient-to-b from-black to-green-950/20 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA <span className="text-green-500">CODIFICAR?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para verificar compatibilidade e agendar sua cópia codificada.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-green-600 hover:bg-green-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] rounded-sm"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
