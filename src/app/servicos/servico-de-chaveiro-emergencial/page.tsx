import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serviço de Chaveiro Emergencial em Porto Alegre | Chris Chaves',
    description: 'Atendimento de chaveiro emergencial rápido em Porto Alegre. Socorro imediato para portas trancadas, chaves perdidas ou quebradas.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/servico-de-chaveiro-emergencial/',
    },
}

export default function ChaveiroEmergencialPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Emergência:%20Preciso%20de%20chaveiro%20agora"

    const faqData = [
        {
            question: "O que caracteriza um chaveiro emergencial?",
            answer: "É um serviço voltado para situações urgentes onde o acesso precisa ser restaurado rapidamente."
        },
        {
            question: "O atendimento funciona durante a madrugada?",
            answer: "Serviços emergenciais costumam atender horários alternativos, conforme disponibilidade."
        },
        {
            question: "O chaveiro atende no local?",
            answer: "Sim, o atendimento geralmente ocorre diretamente onde está o problema."
        },
        {
            question: "O serviço atende diferentes tipos de fechadura?",
            answer: "Sim, o atendimento pode envolver portas residenciais, comerciais ou automotivas."
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
                name="Serviço de Chaveiro Emergencial em Porto Alegre"
                description="Atendimento de chaveiro emergencial rápido em Porto Alegre. Socorro imediato para portas trancadas, chaves perdidas ou quebradas."
                url="https://chrischaves.com.br/servicos/servico-de-chaveiro-emergencial/"
                alternates={{
                    canonical: 'https://chrischaves.com.br/servicos/servico-de-chaveiro-emergencial/',
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: TACTICAL DISPATCH LAYOUT */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: COMMAND TEXT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/30 rounded-sm text-green-500 text-xs font-mono tracking-widest uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Plantão Ativo • Porto Alegre
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                CHAVEIRO EMERGENCIAL <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
                                    EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-green-500 font-mono mb-8 uppercase tracking-widest">
                                Atendimento para Situações Urgentes
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed border-l-2 border-green-500/50 pl-6">
                                Imprevistos com chaves e fechaduras podem acontecer a qualquer momento. Seja uma porta trancada, chave perdida ou fechadura travada, o serviço de chaveiro emergencial em Porto Alegre existe para oferecer suporte rápido quando você mais precisa.
                            </p>

                            <p className="text-neutral-500 text-lg max-w-xl">
                                Se você está procurando um chaveiro 24 horas próximo ou atendimento urgente na sua região, entender quando e como solicitar ajuda profissional pode evitar danos e resolver a situação com mais segurança.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
                                >
                                    <span className="mr-2">Solicitar Resgate</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </a>
                                <div className="flex items-center gap-4 px-6 text-sm font-mono text-neutral-500 border border-neutral-800 bg-neutral-900/30">
                                    <span>TEMPO DE RESPOSTA:</span>
                                    <span className="text-green-500 font-bold">IMEDIATO</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: STATUS PANEL */}
                        <div className="w-full lg:w-96 bg-neutral-900/30 border border-neutral-800 p-6 backdrop-blur-sm relative">
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <svg className="w-16 h-16 text-neutral-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                            </div>
                            <h3 className="font-mono text-neutral-500 text-sm mb-6 border-b border-neutral-800 pb-2">QUANDO NECESSÁRIO?</h3>

                            <p className="text-xs text-neutral-400 mb-4 h-auto">
                                Nem todo problema exige urgência, mas buscas por "chaveiro perto de mim" geralmente ocorrem quando há bloqueio total.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Porta trancada com chave dentro",
                                    "Perda ou extravio de chaves",
                                    "Chave quebrada na fechadura",
                                    "Fechadura travada",
                                    "Veículo trancado sem acesso"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-sm group cursor-default">
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
                                <p className="text-xs text-neutral-600 font-mono mb-2">DISPONIBILIDADE DA EQUIPE</p>
                                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full w-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. DIAGNOSTIC GRID: SITUATIONS */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-end justify-between mb-16 border-b border-neutral-900 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Situações <span className="text-neutral-500">Reais</span>
                        </h2>
                        <span className="hidden md:block font-mono text-green-500 text-sm">SYS.DIAG.001</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Situation Cards */}
                        {[
                            {
                                title: "Perda das chaves ao chegar",
                                desc: "Chegar em casa e perceber que perdeu as chaves é um dos motivos mais comuns de acionamento.",
                                icon: "🏠",
                                code: "RES-01"
                            },
                            {
                                title: "Trancar chave no carro",
                                desc: "Trancar o carro sem perceber que a chave ficou no contato ou no banco do veículo.",
                                icon: "🚗",
                                code: "AUTO-02"
                            },
                            {
                                title: "Fechadura falhando",
                                desc: "Fechadura que emperra ou falha inesperadamente, muitas vezes durante a madrugada.",
                                icon: "🔧",
                                code: "TECH-03"
                            },
                            {
                                title: "Porta travada",
                                desc: "Porta que não abre mesmo com a chave girando, indicando falha no mecanismo interno.",
                                icon: "⚙️",
                                code: "MECH-04"
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
                            <h3 className="text-2xl font-bold text-white uppercase">Benefícios do Atendimento Local</h3>
                            <p className="text-neutral-400">O diferencial de um chaveiro emergencial em Porto Alegre está na capacidade de atender rapidamente.</p>

                            <ul className="space-y-0 divide-y divide-neutral-900 border-y border-neutral-900">
                                {[
                                    "Atendimento em domicílio ou local do incidente",
                                    "Solução profissional para situações urgentes",
                                    "Redução do risco de danificar portas",
                                    "Suporte mesmo fora do horário comercial",
                                    "Proximidade geográfica para ajuda imediata"
                                ].map((item, i) => (
                                    <li key={i} className="py-4 flex gap-4 items-center group">
                                        <div className="w-6 h-6 rounded-sm border border-neutral-700 bg-neutral-900 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-900/20 transition-colors">
                                            <div className="w-2 h-2 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-neutral-800/50 p-6 mt-8 border border-neutral-700 rounded-sm">
                                <h4 className="text-white font-bold mb-2 uppercase text-sm">Como Escolher</h4>
                                <p className="text-sm text-neutral-400">
                                    Antes de solicitar: verifique atuação na região, confirme se é emergencial, procure comunicação clara e evite soluções improvisadas.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: WARNING BOX */}
                        <div className="bg-red-900/5 border border-red-900/20 p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-red-500 select-none pointer-events-none">
                                !
                            </div>
                            <h3 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-2">
                                <span className="animate-pulse">●</span> CHECKLIST RÁPIDO
                            </h3>
                            <p className="text-neutral-400 mb-6">Você precisa de atendimento urgente se:</p>
                            <ul className="space-y-3 font-mono text-sm text-neutral-300">
                                {[
                                    "Está trancado fora de casa ou do veículo",
                                    "Não consegue abrir a porta normalmente",
                                    "A chave quebrou dentro da fechadura",
                                    "Perdeu as chaves e precisa acessar o local",
                                    "O problema aconteceu fora do horário comercial",
                                    "Existe necessidade imediata de acesso"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-red-400">
                                        <span>[CRÍTICO]</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ: DATA BANK */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h3 className="font-mono text-green-500 text-center mb-4">FAQ.DATABASE</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Perguntas Frequentes</h2>

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
                    <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE AJUDA <span className="text-green-500">AGORA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Se você está enfrentando uma situação urgente com chaves ou fechaduras, entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento.</p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-green-600 hover:bg-green-500 text-black font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>

        </main>
    )
}
