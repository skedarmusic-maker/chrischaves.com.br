import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas no Bairro Petrópolis Porto Alegre | Chris Chaves',
    description: 'Chaveiro 24h no Bairro Petrópolis em Porto Alegre. Atendimento emergencial em 15 a 20 minutos. Abertura residencial sem danos, socorro automotivo e fechaduras digitais.',
    alternates: {
        canonical: 'https://chrischaves.com.br/chaveiro-24h-petropolis-porto-alegre/',
    },
    openGraph: {
        title: 'Chaveiro 24 Horas no Bairro Petrópolis | Chris Chaves Porto Alegre',
        description: 'Socorro emergencial de chaveiro 24h no Petrópolis. Chegada em 15 a 20 minutos para abertura de portas sem danos, chaves codificadas de veículos e fechaduras.',
        url: 'https://chrischaves.com.br/chaveiro-24h-petropolis-porto-alegre/',
        type: 'website',
        locale: 'pt_BR',
        images: [
            {
                url: '/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp',
                width: 1200,
                height: 630,
                alt: 'Chaveiro 24 Horas no Bairro Petrópolis em Porto Alegre',
            },
        ],
    },
}

export default function ChaveiroPetropolisPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá!%20Estou%20no%20Bairro%20Petrópolis%20e%20preciso%20de%20atendimento%20de%20chaveiro%20urgente."
    const phoneLink = "tel:51993398664"

    const faqData = [
        {
            question: "Quanto tempo a unidade móvel demora para chegar ao Bairro Petrópolis?",
            answer: "Nosso tempo médio de deslocamento até o Bairro Petrópolis é de 15 a 20 minutos. Trafegamos pelos eixos da Av. Protásio Alves, Av. Carlos Gomes (Terceira Perimetral) e Av. Ipiranga, com rota direta para seu endereço residencial, comercial ou vaga de estacionamento."
        },
        {
            question: "O chaveiro danifica a porta, o cilindro ou a pintura do carro na abertura?",
            answer: "Não. Utilizamos ferramentas especializadas de abertura técnica não destrutiva (michas pantográficas, decodificadores e almofadas infláveis reguladas). O serviço preserva integralmente a fechadura, o batente da porta e a lataria do veículo."
        },
        {
            question: "Como funciona o atendimento para condomínios e edifícios no Petrópolis?",
            answer: "Nossos chaveiros atendem devidamente uniformizados e identificados para liberação rápida em portarias de edifícios nas avenidas Nilópolis, Bagé, Felipe de Oliveira e transversais, realizando desde aberturas até trocas completas de segredo e fechaduras digitais."
        },
        {
            question: "Vocês fazem chave codificada de carro no local se perdi a original?",
            answer: "Sim. A unidade móvel conta com maquinário eletrônico computadorizado para leitura de segredo da ignição e gravação do chip transponder na hora, entregando a nova chave codificada ou canivete funcionando no local."
        },
        {
            question: "Quais são as formas de pagamento aceitas?",
            answer: "Aceitamos Pix, cartões de crédito e débito de todas as bandeiras (com máquina móvel no local) e dinheiro. O orçamento é informado previamente com transparência antes do deslocamento."
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

    const localBusinessJsonLd = {
        "@context": "https://schema.org",
        "@type": "Locksmith",
        "name": "Chris Chaves | Chaveiro 24 Horas Petrópolis Porto Alegre",
        "description": "Atendimento emergencial 24h no Bairro Petrópolis em Porto Alegre. Abertura residencial sem avarias, chaveiro automotivo e instalação de fechaduras digitais.",
        "telephone": "(51) 99339-8664",
        "url": "https://chrischaves.com.br/chaveiro-24h-petropolis-porto-alegre/",
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Bairro Petrópolis, Porto Alegre - RS"
        },
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Porto Alegre",
            "addressRegion": "RS",
            "addressCountry": "BR"
        }
    }

    return (
        <main className="min-h-screen bg-black text-gray-200 selection:bg-green-500/30 selection:text-green-500 font-sans">
            <ServiceJsonLd
                name="Chaveiro 24 Horas no Bairro Petrópolis Porto Alegre"
                description="Serviço de chaveiro 24 horas no bairro Petrópolis em Porto Alegre. Atendimento emergencial rápido em 15 a 20 min para aberturas sem danos, chaves codificadas e fechaduras."
                url="https://chrischaves.com.br/chaveiro-24h-petropolis-porto-alegre/"
                title="Chaveiro 24 Horas no Bairro Petrópolis Porto Alegre | Chris Chaves"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />

            {/* 1. HERO SECTION (100% COMERCIAL & CONVERSÃO DIRETA) */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT: PAIN POINTS & VALUE PROPOSITION */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Unidade Móvel de Plantão 24h no Bairro Petrópolis
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                                    BAIRRO PETRÓPOLIS
                                </span>
                            </h1>

                            <h2 className="text-lg text-green-400 font-mono uppercase tracking-widest">
                                Chegada em 15 a 20 Minutos • Abertura 100% Sem Danos
                            </h2>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                                A porta bateu com a chave por dentro, a fechadura travou ou perdeu a chave do carro? Despachamos nossa unidade móvel equipada imediatamente até seu endereço no <strong className="text-white">Bairro Petrópolis</strong> para resolver na hora, sem arranhões na porta e sem enrolação.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 shadow-[0_0_30px_rgba(34,197,94,0.4)] rounded-sm"
                                >
                                    <span className="mr-3">Pedir Socorro no WhatsApp</span>
                                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>

                                <a
                                    href={phoneLink}
                                    className="inline-flex items-center justify-center px-6 py-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500 text-white font-semibold text-base uppercase tracking-wider transition-colors rounded-sm"
                                >
                                    Ligar: (51) 99339-8664
                                </a>
                            </div>

                            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400 border-t border-neutral-800">
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Chegada em 15-20 min
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Sem avarias no cilindro/porta
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Máquina de cartão e Pix no local
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Plantão de madrugada e feriados
                                </span>
                            </div>
                        </div>

                        {/* RIGHT: HERO IMAGE WITH COMMERCIAL TRUST BADGE */}
                        <div className="w-full lg:w-[480px] relative">
                            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp"
                                    alt="Atendimento Profissional de Chaveiro no Bairro Petrópolis Porto Alegre"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 border border-neutral-800 rounded-sm">
                                    <div className="text-xs font-mono text-green-400 uppercase font-bold">Unidade de Emergência 24h</div>
                                    <div className="text-white font-bold text-base">Atendimento Rápido em Apartamentos e Casas</div>
                                    <div className="text-neutral-400 text-xs mt-1">Ferramentas de precisão para fechaduras tetra, multiponto, eletrônicas e cilindros de alta segurança.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. LOGÍSTICA E ROTAS DE ACESSO REAL (POR QUE CHEGAMOS EM 15-20 MIN) */}
            <section className="py-20 bg-neutral-950 border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// LOGÍSTICA E AGILIDADE DE RESPOSTA</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Deslocamento Expresso para Qualquer Rua do Petrópolis
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Nossas viaturas móveis operam posicionadas estrategicamente nos principais corredores de Porto Alegre, garantindo tempo de resposta mínimo quando você mais precisa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🚗 Eixo Av. Protásio Alves
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Corredor principal de deslocamento rápido. Permite acesso direto a condomínios residenciais, prédios comerciais e estacionamentos de toda a extensão do bairro em poucos minutos.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                ⚡ Eixo Av. Carlos Gomes (3ª Perimetral)
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Via expressa de ligação entre a Zona Norte e o Petrópolis, utilizada pela nossa equipe para escapar de congestionamentos e atender chamados corporativos e residenciais com prioridade máxima.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏢 Vias Internas (Nilópolis, Bagé, Felipe de Oliveira)
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Atendimento pontual e ágil em ruas arborizadas e condomínios fechados (como Ruas Bagé, Carazinho, Montenegro e transversais), com facilidade de parada rápida da viatura para início imediato do serviço.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🧭 Conexão Av. Ipiranga & Regiões Vizinhas
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Acesso ágil pela divisa sul do bairro, garantindo socorro imediato tanto para quem está em trânsito quanto para moradores de condomínios próximos às avenidas de ligação rápida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DORES DO CLIENTE & SERVIÇOS PRINCIPAIS (COM AS FOTOS REAIS DA GALERIA) */}
            <section className="py-24 bg-black border-b border-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// SOLUÇÕES RÁPIDAS NO LOCAL</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            Serviços Executados Diretamente no Seu Endereço
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                            Unidade móvel equipada com ferramentas de precisão e cilindros de reposição para resolver seu problema na primeira visita.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* SERVIÇO 1: ABERTURA RESIDENCIAL & FECHADURAS */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp"
                                    alt="Abertura Residencial e Fechaduras no Petrópolis"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Residencial & Condomínios
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Abertura de Portas & Troca de Segredo</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Porta bateu com a chave dentro ou o cilindro emperrou? Realizamos abertura limpa sem arrombar e sem danificar o acabamento da porta. Troca imediata de segredos e novos cilindros de segurança no local.
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Solicitar Abertura Residencial
                                </a>
                            </div>
                        </div>

                        {/* SERVIÇO 2: SOCORRO AUTOMOTIVO 24H */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_8.jpeg"
                                    alt="Chaveiro Automotivo no Bairro Petrópolis"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Socorro Automotivo 24h
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Carro Trancado & Chaves Codificadas</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Esqueceu a chave dentro do veículo ou perdeu a chave original? Fazemos abertura automotiva não destrutiva, confecção de chave nova e reprogramação eletrônica de chip transponder para carros nacionais e importados.
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Chamar Chaveiro Automotivo
                                </a>
                            </div>
                        </div>

                        {/* SERVIÇO 3: FECHADURAS DIGITAIS & ELETRÔNICAS */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_3.webp"
                                    alt="Instalação de Fechaduras Digitais no Bairro Petrópolis"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Tecnologia & Segurança
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Instalação de Fechaduras Digitais</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Modernize o acesso do seu apartamento, residência ou escritório com fechaduras eletrônicas por biometria, senha numérica e tag de aproximação. Instalação milimétrica com garantia e suporte técnico completo.
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Orçar Fechadura Digital
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. DIFERENCIAIS DE CONFIANÇA & PROVA DE SEGURANÇA */}
            <section className="py-20 bg-neutral-950 border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// POR QUE ESCOLHER A CHRIS CHAVES</span>
                        <h2 className="text-3xl font-bold text-white uppercase">Diferenciais que Garantem Sua Tranquilidade</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">🛡️</div>
                            <h3 className="text-lg font-bold text-white">Abertura Técnica Sem Danos</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Não utilizamos martelos ou métodos brutos. Nossos procedimentos técnicos garantem que nem a porta, nem o miolo da fechadura e nem a pintura do veículo sejam danificados.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">💬</div>
                            <h3 className="text-lg font-bold text-white">Preço Claro Antes de Sair</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Sem surpresas na hora de pagar. Explicamos o procedimento pelo WhatsApp e combinamos os valores com total transparência antes de iniciar o deslocamento.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">⏱️</div>
                            <h3 className="text-lg font-bold text-white">Plantão 24h Efetivo</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Equipe de prontidão verdadeira durante a madrugada, fins de semana e feriados. Se você teve um imprevisto fora do horário comercial, enviamos socorro imediato.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ PRÁTICO E COMERCIAL */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// DÚVIDAS FREQUENTES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Perguntas Rápidas sobre o Atendimento</h2>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition-colors rounded-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-neutral-200 group-hover:text-green-400 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <svg className="w-5 h-5 text-neutral-500 group-hover:text-green-400 transform group-open:rotate-180 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            {/* 6. CTA FINAL DE ALTA CONVERSÃO */}
            <section className="py-28 bg-gradient-to-b from-black via-green-950/30 to-black text-center border-t border-neutral-800 relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        PRECISA DE CHAVEIRO NO <span className="text-green-400">PETRÓPOLIS AGORA?</span>
                    </h2>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                        Nossa viatura está de plantão em Porto Alegre pronta para atender seu chamado no Bairro Petrópolis em 15 a 20 minutos. Clique abaixo e fale direto com o técnico!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(34,197,94,0.5)] rounded-sm"
                        >
                            Chamar no WhatsApp (Plantão 24h)
                        </a>
                        <a
                            href={phoneLink}
                            className="inline-flex items-center justify-center px-8 py-5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-lg uppercase tracking-wider transition-colors rounded-sm"
                        >
                            Ligar: (51) 99339-8664
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
