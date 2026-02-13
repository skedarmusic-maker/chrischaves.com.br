import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reprogramação de Chaves em Porto Alegre | Chris Chaves',
    description: 'Especialista em reprogramação de chaves presenciais e digitais em Porto Alegre. Restabelecemos a comunicação da sua chave com o veículo.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/reprogramacao-de-chaves-presenciais-e-digitais/',
    },
}

export default function ReprogramacaoPresencialDigitalPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20reprogramação%20de%20chave"

    const faqData = [
        {
            question: "O que é chave presencial (keyless)?",
            answer: "É um sistema inteligente (Smart Key) que permite destrancar as portas e ligar o motor por botão Start/Stop apenas pela proximidade do chaveiro, sem necessidade de inserção física ou giro."
        },
        {
            question: "Toda chave digital pode ser reprogramada?",
            answer: "Depende. Chaves que perderam a sincronia (descasamento) geralmente podem ser reprogramadas. Chaves com defeito físico na placa ou antena podem exigir substituição."
        },
        {
            question: "Preciso levar o veículo?",
            answer: "Sim. A reprogramação exige que o scanner esteja conectado ao veículo e que a chave esteja presente para restabelecer o 'handshake' (aperto de mão) eletrônico entre eles."
        },
        {
            question: "A reprogramação resolve problemas eletrônicos?",
            answer: "Resolve falhas de comunicação e perda de pareamento. Se o problema for no módulo de conforto ou na bateria do carro, nosso diagnóstico identificará."
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
            <ServiceJsonLd
                name="Reprogramação de Chaves Presenciais e Digitais"
                description="Serviço técnico de reprogramação de chaves automotivas em Porto Alegre. Scanners avançados para todos os modelos."
                url="https://chrischaves.com.br/servicos/reprogramacao-de-chaves-presenciais-e-digitais/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/reprogramacao-de-chaves-presenciais-e-digitais/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: DATA MATRIX */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Matrix Rain Effect (Static CSS representation) */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(34,197,94,0.05)_50%,rgba(0,0,0,0))] bg-[size:100%_4px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/30 border border-green-500/30 rounded text-green-400 text-xs font-mono tracking-widest uppercase">
                                <span className="inline-block w-2 H-2 bg-green-500 rounded-sm animate-pulse">_</span>
                                System Restore
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                REPROGRAMAÇÃO <br />
                                DE CHAVES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                    PRESENCIAIS E DIGITAIS
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-green-600 font-mono mb-8 uppercase tracking-widest">
                                Assistência Automotiva Avançada
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Veículos modernos utilizam sistemas keyless que permitem acesso e partida sem chave física. Quando ocorre falha na comunicação, realizamos a reprogramação técnica para restabelecer o funcionamento.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold text-lg tracking-wide uppercase transition-all duration-200 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                                >
                                    <span className="mr-2">Restaurar Sistema</span>
                                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: DIAGNOSTIC HUD */}
                        <div className="w-full lg:w-[450px] bg-black border border-green-500/30 p-2 relative rounded shadow-2xl overflow-hidden font-mono text-sm">
                            <div className="bg-green-950/10 p-6 rounded border border-green-500/10 relative">
                                <div className="absolute top-2 right-2 flex gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                </div>

                                <div className="space-y-4 text-green-500/80">
                                    <div className="flex justify-between border-b border-green-900/50 pb-2">
                                        <span>STATUS:</span>
                                        <span className="text-red-500 animate-pulse">DESSINCRONIZADO</span>
                                    </div>
                                    <div className="flex justify-between border-b border-green-900/50 pb-2">
                                        <span>PROTOCOLO:</span>
                                        <span className="text-white">CAN-BUS / OBD2</span>
                                    </div>
                                    <div className="flex justify-between border-b border-green-900/50 pb-2">
                                        <span>CHAVE ID:</span>
                                        <span className="text-white">NOT FOUND</span>
                                    </div>

                                    <div className="py-4 text-center">
                                        <div className="inline-block px-4 py-1 bg-green-500/10 border border-green-500 text-green-400 text-xs">
                                            INICIANDO REPROGRAMAÇÃO...
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="h-1 bg-green-900/50 w-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[60%] animate-progress-indeterminate"></div>
                                        </div>
                                        <div className="flex justify-between text-[10px] text-green-700">
                                            <span>WRITING DATA</span>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS & DIAGNOSIS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-green-500 font-bold text-xs uppercase tracking-widest mb-2 block">Troubleshooting</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Sinais de <span className="text-neutral-500">Falha</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Chave Não Detectada",
                                desc: "Painel exibe mensagem 'Key Not Detected' mesmo com a chave dentro do carro.",
                                code: "ERR_01"
                            },
                            {
                                title: "Sem Resposta",
                                desc: "Botões do controle pararam de funcionar repentinamente, mesmo com bateria nova.",
                                code: "ERR_02"
                            },
                            {
                                title: "Pós Troca de Bateria",
                                desc: "Alguns sistemas perdem a codificação ao ficar muito tempo sem energia.",
                                code: "WARN_03"
                            },
                            {
                                title: "Perda de Alcance",
                                desc: "Necessidade de encostar a chave no botão de partida para funcionar.",
                                code: "WARN_04"
                            },
                            {
                                title: "Nova Chave",
                                desc: "Adição de um novo dispositivo requer pareamento com o módulo existente.",
                                code: "SETUP_05"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 hover:border-green-500/50 p-6 transition-all duration-300 group rounded relative overflow-hidden">
                                <div className="absolute top-0 right-0 px-2 py-1 bg-neutral-900 text-[10px] text-neutral-600 font-mono group-hover:text-green-500 transition-colors">
                                    {card.code}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 mt-4 group-hover:text-green-400 transition-colors uppercase">{card.title}</h3>
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
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Vantagens do <span className="text-green-600">Serviço Técnico</span></h3>
                            <p className="text-neutral-400 text-lg">Evite bloqueios definitivos do módulo com procedimentos profissionais.</p>

                            <ul className="space-y-6">
                                {[
                                    { title: "Diagnóstico Preciso", desc: "Identificamos se o erro é na chave, antena ou módulo." },
                                    { title: "Equipamento Oficial", desc: "Scanners atualizados para todas as montadoras." },
                                    { title: "Reset de Módulo", desc: "Capacidade de limpar erros de tentativas falhas anteriores." },
                                    { title: "Teste de Frequência", desc: "Verificação da integridade do sinal de rádio." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-green-500 transition-colors shrink-0">
                                            <span className="text-green-500 font-mono text-sm">0{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase mb-1">{item.title}</h4>
                                            <p className="text-neutral-500 text-xs">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: SYSTEM TYPES */}
                        <div className="border border-green-900/30 bg-green-950/5 p-10 rounded-xl relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-transparent blur opacity-20"></div>

                            <h3 className="text-xl font-bold text-white mb-6 uppercase flex items-center gap-3 relative z-10">
                                <span className="text-green-500">⚙️</span>
                                Tecnologias Atendidas
                            </h3>

                            <div className="space-y-2 relative z-10">
                                {[
                                    "Start/Stop (Presença)",
                                    "Slot Key (Inserção Eletrônica)",
                                    "Chaves Cartão (Renault/Outros)",
                                    "Controles de Alarme OEM",
                                    "Chaves Canivete Codificadas"
                                ].map((tech, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-black/50 border border-neutral-800 hover:border-green-500/50 transition-colors rounded">
                                        <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                                        <span className="text-neutral-300 font-mono text-sm uppercase">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                {/* Checklist */}
                <div className="mb-20 bg-neutral-900 p-8 rounded-lg border-t-4 border-green-500">
                    <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-center">Checklist de Falha</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Veículo não reconhece chave",
                            "Sinal intermitente",
                            "Troca de bateria recente",
                            "Luz do imobilizador piscando",
                            "Perda de sincronização"
                        ].map((item, i) => (
                            <span key={i} className="px-4 py-2 bg-black border border-neutral-800 text-neutral-400 text-sm rounded font-mono hover:text-green-400 hover:border-green-500 transition-colors cursor-default">
                                [ ! ] {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm leading-relaxed border-l-2 border-green-900 pl-4">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-black relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">FALHA NO <span className="text-green-500">SISTEMA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para reprogramar sua chave presencial ou digital e recuperar o acesso ao veículo.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-green-700 hover:bg-green-600 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 clip-path-button hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                    >
                        Solicitar Reprogramação
                    </a>
                </div>
            </section>
        </main>
    )
}
