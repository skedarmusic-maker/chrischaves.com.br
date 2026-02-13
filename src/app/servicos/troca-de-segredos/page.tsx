import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Troca de Segredos de Fechaduras em Porto Alegre | Chris Chaves',
    description: 'Aumente a segurança do seu imóvel com a troca de segredos. Invalidamos chaves antigas sem trocar a fechadura. Atendimento rápido em Porto Alegre.',
    alternates: {
        canonical: 'https://chrischaves.com.br/servicos/troca-de-segredos/',
    },
}

export default function TrocaSegredosPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá,%20preciso%20de%20troca%20de%20segredo"

    const faqData = [
        {
            question: "Qual a diferença entre troca de segredo e troca de fechadura?",
            answer: "Na troca de segredo, apenas o cilindro ou a configuração interna dos pinos é alterada. A estrutura mecânica da fechadura (maçaneta, espelhos, caixa) permanece a mesma."
        },
        {
            question: "Preciso trocar toda a fechadura?",
            answer: "Nem sempre. Se a fechadura estiver funcionando bem mecanicamente (sem travar), trocar apenas o segredo é mais econômico e mantém a estética original da porta."
        },
        {
            question: "A troca de segredo melhora a segurança?",
            answer: "Sim, pois invalida imediatamente todas as chaves antigas que possam estar em posse de terceiros, ex-funcionários ou perdidas."
        },
        {
            question: "Toda fechadura permite troca de segredo?",
            answer: "A maioria das fechaduras de cilindro (Yale) e algumas Tetra permitem. Fechaduras muito antigas ou desgastadas podem exigir a troca completa por falta de peças de reposição."
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
                name="Troca de Segredos em Porto Alegre"
                description="Alteramos a combinação interna da sua fechadura para invalidar chaves antigas. Segurança rápida e econômica para residências e empresas."
                url="https://chrischaves.com.br/servicos/troca-de-segredos/"
                alternates={{ canonical: 'https://chrischaves.com.br/servicos/troca-de-segredos/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: SYSTEM RELOAD */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                {/* Warning Stripes Pattern */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0)_0,rgba(0,0,0,0)_10px,rgba(34,197,94,0.05)_10px,rgba(34,197,94,0.05)_20px)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-950/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/30 border border-green-600/30 text-green-500 text-xs font-mono tracking-widest uppercase rounded ml-0 transform -skew-x-12">
                                <span className="not-italic font-bold">⚠</span>
                                <span className="not-italic">SECURITY RESET</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                TROCA DE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                                    SEGREDOS
                                </span> <br />
                                EM PORTO ALEGRE
                            </h1>
                            <h2 className="text-lg text-green-600 font-mono mb-8 uppercase tracking-widest">
                                Ajuste de Segurança para Fechaduras
                            </h2>

                            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                A troca de segredo é um procedimento cirúrgico na segurança do seu imóvel. Alteramos apenas a combinação interna, invalidando qualquer chave antiga sem a necessidade de quebrar paredes ou trocar portas.
                            </p>

                            <p className="text-neutral-500 max-w-xl text-sm border-l-4 border-green-600 pl-4 py-2 italic">
                                "Aumente a segurança sem substituir toda a fechadura."
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-700 hover:bg-green-600 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                >
                                    <span className="mr-2">Redefinir Acesso</span>
                                    <svg className="w-5 h-5 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: LOCK CORE VISUALIZATION */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center">
                            {/* Rotating Rings */}
                            <div className="absolute w-full h-full border-2 border-neutral-800 rounded-full animate-spin-slow-reverse opacity-50"></div>
                            <div className="absolute w-3/4 h-3/4 border-2 border-dashed border-green-900 rounded-full animate-spin-slow"></div>

                            {/* Core */}
                            <div className="bg-neutral-900 p-8 rounded-full border-4 border-green-600/20 relative z-10 w-64 h-64 flex flex-col items-center justify-center shadow-2xl">
                                <div className="text-green-600 text-6xl mb-2">
                                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V3a2 2 0 012-2z" /></svg>
                                </div>
                                <div className="text-white font-bold text-center uppercase tracking-widest text-sm mb-1">
                                    Internal Core
                                </div>
                                <div className="text-emerald-500 font-mono text-[10px] animate-pulse">
                                    RECONFIGURED
                                </div>
                            </div>

                            {/* Old Keys Invalidated - Changed to Neutral/Red for contrast of 'bad' state but subtle */}
                            <div className="absolute bottom-10 -right-4 bg-neutral-900/50 border border-neutral-700/50 p-2 rounded backdrop-blur">
                                <span className="text-[10px] text-neutral-500 font-bold uppercase block text-center">ANTERIOR</span>
                                <span className="text-2xl line-through text-neutral-600 block text-center">🔑</span>
                            </div>
                            <div className="absolute top-10 -left-4 bg-green-900/20 border border-green-500/50 p-2 rounded backdrop-blur">
                                <span className="text-[10px] text-green-500 font-bold uppercase block text-center">NOVO</span>
                                <span className="text-2xl text-green-500 block text-center">🔑</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-12 h-1 bg-green-600"></div>
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Quando <span className="text-green-600 break-words">Resetar?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Casa Nova",
                                desc: "Nunca se sabe quem tem as chaves do antigo morador ou da empreiteira. Troque assim que mudar.",
                                icon: "🏠"
                            },
                            {
                                title: "Perda de Chave",
                                desc: "Se perdeu uma chave com identificação ou perto de casa, sua segurança está comprometida.",
                                icon: "🏷️"
                            },
                            {
                                title: "Empresas",
                                desc: "Troca de funcionários chave ou demissões exigem o cancelamento do acesso anterior.",
                                icon: "🏢"
                            },
                            {
                                title: "Separação",
                                desc: "Em casos de divórcio ou fim de sociedade, garante que apenas os autorizados permaneçam com acesso.",
                                icon: "💔"
                            },
                            {
                                title: "Reorganização",
                                desc: "Unificar segredos para abrir várias portas com a mesma chave (sistema de mestragem).",
                                icon: "🗝️"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-black border-l-2 border-transparent hover:border-green-500 p-8 transition-colors duration-300 group rounded bg-gradient-to-br from-neutral-900/50 to-transparent">
                                <div className="text-4xl mb-4 text-neutral-600 group-hover:text-green-500 transition-colors">{card.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:translate-x-1 transition-transform uppercase">{card.title}</h3>
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
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Benefícios <span className="text-green-600">Estratégicos</span></h3>
                            <p className="text-neutral-400 text-lg">Atualização de segurança com menor custo e impacto visual.</p>

                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { title: "Economia", desc: "Custa uma fração do preço de trocar uma fechadura inteira de boa qualidade." },
                                    { title: "Estética", desc: "Mantém os espelhos e maçanetas originais que combinam com a decoração." },
                                    { title: "Agilidade", desc: "Serviço que leva poucos minutos para ser executado no local." },
                                    { title: "Controle Total", desc: "Você decide exatamente quantas cópias novas existirão no mundo." }
                                ].map((item, i) => (
                                    <div key={i} className="border border-neutral-800 p-5 rounded hover:bg-neutral-900/50 hover:border-green-500/30 transition-colors">
                                        <h4 className="text-white font-bold text-sm uppercase mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            {item.title}
                                        </h4>
                                        <p className="text-neutral-500 text-xs pl-4">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: TYPES LIST */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-green-600/10 blur-xl rounded-full"></div>
                            <div className="bg-neutral-900 border border-neutral-800 p-10 relative rounded z-10">
                                <h3 className="text-xl font-bold text-white mb-6 uppercase border-b border-neutral-700 pb-4">
                                    Áreas de Atuação
                                </h3>

                                <ul className="space-y-4">
                                    {[
                                        "Fechaduras Residenciais (Tetra/Simples)",
                                        "Cilindros de Portas Blindadas",
                                        "Sistemas Comerciais (Vidro/Alumínio)",
                                        "Cadeados de Alta Segurança",
                                        "Fechaduras de Sobrepor"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors">
                                            <span className="text-green-600 font-bold font-mono">&gt;_</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 bg-black p-4 rounded border border-green-900/30 text-center">
                                    <span className="text-xs text-neutral-500 uppercase block mb-2">Não tem certeza se é possível?</span>
                                    <a href={whatsappLink} className="text-green-500 hover:text-green-400 text-sm font-bold uppercase underline decoration-green-500/30 hover:decoration-green-400">
                                        Envie uma foto para avaliação
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                {/* Checklist */}
                <div className="mb-20 bg-neutral-900/50 p-8 border border-neutral-800 rounded">
                    <h3 className="text-white font-bold uppercase tracking-widest mb-6 border-l-4 border-green-500 pl-4">Checklist de Segurança</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            "Mudou recentemente",
                            "Perdeu uma chave",
                            "Trocou funcionários",
                            "Invalidar chaves antigas",
                            "Reforçar controle"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <input type="checkbox" checked readOnly className="accent-green-600 w-4 h-4 bg-black border-neutral-600 rounded" />
                                <span className="text-neutral-400 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 uppercase">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-green-900/30 hover:bg-green-900/10 transition-colors">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-300 group-hover:text-emerald-500 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-green-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-neutral-400 text-sm leading-relaxed border-l-2 border-green-700 pl-4">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-green-950/10 relative overflow-hidden text-center border-t border-neutral-800">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">SEGURANÇA <span className="text-green-600">REDEFINIDA</span></h2>
                    <p className="text-xl text-neutral-400 mb-12">Entre em contato pelo WhatsApp para trocar o segredo da sua fechadura hoje e durma tranquilo.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-green-600 hover:bg-green-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-[0_4px_0_rgb(34,197,94)] hover:shadow-none hover:translate-y-1 rounded"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}
