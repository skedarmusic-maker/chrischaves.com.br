import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serviços para Perda de Chave do Veículo em Porto Alegre | Chris Chaves',
    description: 'Perdeu a chave do carro? Oferecemos serviços especializados para recuperar o acesso e confeccionar novas chaves em Porto Alegre. Atendimento móvel.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/servicos-para-perda-de-chave-do-veiculo/',
    },
}

export default function PerdaChaveVeiculoPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Emergência:%20Perdi%20a%20chave%20do%20meu%20carro"

    const faqData = [
        {
            question: "Perdi a chave do carro, qual o primeiro passo?",
            answer: "Verifique se existe chave reserva e evite tentar abrir o veículo por conta própria."
        },
        {
            question: "É possível abrir o carro sem danificar?",
            answer: "Cada situação é avaliada individualmente para definir o melhor procedimento, utilizando métodos seguros."
        },
        {
            question: "O atendimento é feito no local do veículo?",
            answer: "Sim, normalmente a assistência ocorre diretamente onde o carro está, com unidade móvel."
        },
        {
            question: "Todos os tipos de chave automotiva podem ser avaliados?",
            answer: "Sim, diferentes sistemas, desde chaves simples até presenciais e codificadas, podem ser analisados."
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
                name="Serviços para Perda de Chave do Veículo"
                description="Suporte emergencial para quem perdeu as chaves do veículo em Porto Alegre. Abertura técnica e confecção de novas chaves."
                url="https://chrischaves.com.br/servicos/servicos-para-perda-de-chave-do-veiculo/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/servicos-para-perda-de-chave-do-veiculo/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.5)] animate-scanline pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/30 rounded-full text-green-500 text-xs font-mono tracking-widest uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Assistência Automotiva
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                SERVIÇOS PARA PERDA DE CHAVE DO VEÍCULO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
                                    EM PORTO ALEGRE
                                </span>
                            </h1>
                            <h2 className="text-lg text-green-500 font-mono mb-8 uppercase tracking-widest">
                                Assistência Automotiva Especializada
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                Perder a chave do veículo pode gerar situações inesperadas, principalmente quando não há acesso ao carro ou quando o incidente acontece fora de casa. Os serviços para perda de chave do veículo em Porto Alegre oferecem suporte especializado para restaurar o acesso de forma segura.
                            </p>

                            <p className="text-neutral-500 max-w-xl">
                                Se você está procurando um chaveiro automotivo próximo ou assistência urgente após perder a chave do carro, contar com atendimento adequado pode evitar danos e trazer mais tranquilidade.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                                >
                                    <span className="mr-2">Verificar Disponibilidade</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: INFO PANEL */}
                        <div className="w-full lg:w-96 bg-black border border-neutral-800 p-6 relative shadow-2xl">
                            <h3 className="font-bold text-white mb-4 uppercase">O que fazer?</h3>
                            <p className="text-sm text-neutral-400 mb-6">
                                A perda de chave automotiva exige cuidados. Recomendações iniciais:
                            </p>
                            <ul className="space-y-3 text-sm text-neutral-300">
                                <li className="flex gap-2"><span className="text-amber-500">⚠</span> Evitar tentar abrir de forma improvisada</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Verificar se há chave reserva</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Confirmar se o veículo está seguro</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span> Procurar assistência especializada</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SITUATIONS GRID */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px bg-neutral-800 flex-1"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                            Situações <span className="text-green-500">Comuns</span>
                        </h2>
                        <div className="h-px bg-neutral-800 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                title: "Chave perdida em deslocamento",
                                desc: "Situações onde a perda ocorre em locais públicos ou durante viagens.",
                                icon: "missing"
                            },
                            {
                                title: "Veículo trancado com chave dentro",
                                desc: "Ocorre frequentemente em postos, mercados ou na própria garagem.",
                                icon: "locked"
                            },
                            {
                                title: "Extravio da chave principal",
                                desc: "Perda da única chave funcional do veículo.",
                                icon: "key"
                            },
                            {
                                title: "Falha no controle",
                                desc: "Dificuldade de acesso por falha eletrônica no telecomando.",
                                icon: "signal"
                            },
                            {
                                title: "Urgência de Acesso",
                                desc: "Necessidade de acessar o veículo rapidamente por segurança ou compromisso.",
                                icon: "urgent"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border border-neutral-800 p-8 hover:border-green-500 transition-colors duration-300">
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase">{card.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CHECKLIST & BENEFITS */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* LEFT: CHECKLIST */}
                        <div className="bg-neutral-900 border-l-4 border-green-500 p-8 relative">
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase">
                                Checklist Rápido
                            </h3>
                            <p className="text-neutral-400 mb-6">Você provavelmente precisa de ajuda profissional se:</p>
                            <ul className="space-y-4 font-mono text-sm text-neutral-300">
                                {[
                                    "Perdeu a chave do carro e não possui reserva",
                                    "O veículo está trancado sem acesso",
                                    "Não consegue abrir o carro normalmente",
                                    "Existe urgência para acessar o veículo",
                                    "A situação ocorreu fora do horário comercial",
                                    "Há preocupação com segurança após a perda"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center">
                                        <div className="w-5 h-5 flex items-center justify-center bg-green-900/30 border border-green-500/50 rounded text-green-500 text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: BENEFITS */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios da <span className="text-green-500">Assistência Especializada</span></h3>
                            <p className="text-neutral-400 text-lg">
                                Ao procurar ajuda após perder a chave do veículo, um serviço focado oferece vantagens importantes.
                            </p>

                            <div className="space-y-6">
                                <div className="border-l border-neutral-800 pl-4">
                                    <h4 className="text-white font-bold mb-1">Avaliação adequada</h4>
                                    <p className="text-neutral-500 text-sm">Análise do sistema de travamento para o método correto.</p>
                                </div>
                                <div className="border-l border-neutral-800 pl-4">
                                    <h4 className="text-white font-bold mb-1">Métodos Seguros</h4>
                                    <p className="text-neutral-500 text-sm">Técnicas de abertura que visam a integridade do veículo.</p>
                                </div>
                                <div className="border-l border-neutral-800 pl-4">
                                    <h4 className="text-white font-bold mb-1">Redução de Riscos</h4>
                                    <p className="text-neutral-500 text-sm">Minimiza chances de danos à porta ou fechadura.</p>
                                </div>
                                <div className="border-l border-neutral-800 pl-4">
                                    <h4 className="text-white font-bold mb-1">Orientação Profissional</h4>
                                    <p className="text-neutral-500 text-sm">Dicas sobre os próximos passos (cópia reserva, troca de segredo).</p>
                                </div>
                            </div>

                            <div className="bg-neutral-900/50 p-6 rounded border border-neutral-800 mt-8">
                                <h4 className="text-white font-bold mb-2 uppercase">Como Escolher</h4>
                                <p className="text-sm text-neutral-400">
                                    Busque experiência com serviços automotivos, atendimento na região de Porto Alegre, comunicação clara e que vá até o local do veículo.
                                </p>
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
                        <div key={index} className="group border-b border-neutral-800 hover:bg-neutral-900/30 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-white uppercase tracking-wide list-none">
                                    {item.question}
                                    <span className="text-green-500 opacity-50 group-hover:opacity-100 transition-transform group-open:rotate-180">▼</span>
                                </summary>
                                <div className="mt-4 text-neutral-400 font-mono text-sm leading-relaxed pl-4 border-l border-green-500/30">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-green-900/5 relative overflow-hidden text-center border-t border-neutral-900">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE AJUDA <span className="text-green-500">AGORA?</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Se você perdeu a chave do veículo e precisa recuperar o acesso, entre em contato pelo WhatsApp para verificar disponibilidade.</p>
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
