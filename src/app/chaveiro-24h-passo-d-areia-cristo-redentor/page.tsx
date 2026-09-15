import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas Passo d\'Areia e Cristo Redentor | Chris Chaves',
    description: 'Chaveiro 24h no Passo d\'Areia e Cristo Redentor em Porto Alegre. Chegada em 10 a 15 min na Av. Assis Brasil, Bourbon Wallig e Iguatemi. Aberturas e chaves codificadas.',
    alternates: {
        canonical: 'https://chrischaves.com.br/chaveiro-24h-passo-d-areia-cristo-redentor/',
    },
    openGraph: {
        title: 'Chaveiro 24 Horas Passo d\'Areia e Cristo Redentor | Porto Alegre',
        description: 'Socorro emergencial de chaveiro 24h no Passo d\'Areia e Cristo Redentor. Abertura de carros sem danos, chaves codificadas e fechaduras digitais na Assis Brasil.',
        url: 'https://chrischaves.com.br/chaveiro-24h-passo-d-areia-cristo-redentor/',
        type: 'website',
        locale: 'pt_BR',
        images: [
            {
                url: '/images/im/chaveiro-automotivo-servico-2.jpeg',
                width: 1200,
                height: 630,
                alt: 'Chaveiro 24 Horas no Passo d\'Areia e Cristo Redentor Porto Alegre',
            },
        ],
    },
}

export default function ChaveiroPassoDareiaCristoRedentorPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá!%20Estou%20no%20Passo%20d'Areia%20/%20Cristo%20Redentor%20e%20preciso%20de%20chaveiro%20urgente."
    const phoneLink = "tel:51993398664"

    const faqData = [
        {
            question: "Quanto tempo a unidade móvel demora para chegar no Passo d'Areia e Cristo Redentor?",
            answer: "Nosso tempo médio de chegada é de 10 a 15 minutos. Nossa equipe móvel trafega pelos corredores da Av. Assis Brasil, Av. Plínio Brasil Milano e Av. Sertório, garantindo socorro imediato para condomínios, centros comerciais e estacionamentos."
        },
        {
            question: "Atendem emergências automotivas nos shoppings e hospitais da região?",
            answer: "Sim! Prestamos socorro rápido para motoristas trancados fora do veículo nos estacionamentos do Bourbon Shopping Wallig, Shopping Iguatemi, Strip Center, Hospital Cristo Redentor, Hospital Conceição e ao longo de toda a Av. Assis Brasil."
        },
        {
            question: "Fazem abertura técnica de veículos sem quebrar vidro ou arranhar a lataria?",
            answer: "Com certeza. Nossos chaveiros automotivos utilizam almofadas infláveis reguladas e ferramentas pantográficas que abrem a porta do veículo de forma não destrutiva, sem riscar a pintura, sem forçar fechaduras e sem danificar borrachas de vedação."
        },
        {
            question: "Vocês instalam fechaduras eletrônicas e digitais em apartamentos no Passo d'Areia?",
            answer: "Sim, somos especialistas em instalação e configuração de fechaduras digitais (com biometria, senha e cartão RFID) para apartamentos, residências e escritórios corporativos da região, com serviço limpo e garantia de fábrica."
        },
        {
            question: "Como funciona a confecção de chave codificada de carro no local?",
            answer: "Nossa viatura conta com máquinas computadorizadas para leitura do segredo da ignição e gravação imediata do chip transponder (para modelos Fiat, GM, VW, Renault, Nissan, Chery, Ford, etc.), entregando a nova chave funcionando na hora."
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
        "name": "Chris Chaves | Chaveiro 24 Horas Passo d'Areia e Cristo Redentor",
        "description": "Chaveiro 24 horas no Passo d'Areia e Cristo Redentor em Porto Alegre. Atendimento emergencial em 10 a 15 min na Av. Assis Brasil, shoppings e condomínios.",
        "telephone": "(51) 99339-8664",
        "url": "https://chrischaves.com.br/chaveiro-24h-passo-d-areia-cristo-redentor/",
        "areaServed": [
            {
                "@type": "AdministrativeArea",
                "name": "Passo d'Areia, Porto Alegre - RS"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Cristo Redentor, Porto Alegre - RS"
            }
        ],
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
                name="Chaveiro 24 Horas Passo d'Areia e Cristo Redentor Porto Alegre"
                description="Serviço de chaveiro 24h no Passo d'Areia e Cristo Redentor. Chegada em 10 a 15 min para aberturas sem danos, socorro automotivo e fechaduras eletrônicas."
                url="https://chrischaves.com.br/chaveiro-24h-passo-d-areia-cristo-redentor/"
                title="Chaveiro 24 Horas Passo d'Areia e Cristo Redentor | Chris Chaves"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 border-b border-neutral-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Plantão 24h • Chegada em 10 a 15 Minutos
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                                    PASSO D'AREIA & CRISTO REDENTOR
                                </span>
                            </h1>

                            <h2 className="text-lg text-green-400 font-mono uppercase tracking-widest">
                                Eixo Av. Assis Brasil • Socorro Automotivo & Residencial
                            </h2>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                                Trancou a chave dentro do carro no estacionamento do shopping, perdeu a chave da residência ou a fechadura do apartamento emperrou? Nossa unidade móvel especializada atende o <strong className="text-white">Passo d'Areia e Cristo Redentor em 10 a 15 minutos</strong> com maquinário completo para abertura técnica sem danos.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 shadow-[0_0_30px_rgba(34,197,94,0.4)] rounded-sm"
                                >
                                    <span className="mr-3">Chamar Chaveiro Agora</span>
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
                                    <span className="text-green-500 font-bold">✓</span> Chegada em 10-15 min
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Sem riscar lataria ou arrombar
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Pix e Máquina de Cartão
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Plantão madrugada e feriados
                                </span>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full lg:w-[480px] relative">
                            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_8.jpeg"
                                    alt="Abertura Técnica de Veículos Sem Riscos e Sem Danos no Passo d'Areia"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 border border-neutral-800 rounded-sm">
                                    <div className="text-xs font-mono text-green-400 uppercase font-bold">Socorro Automotivo & Residencial</div>
                                    <div className="text-white font-bold text-base">Atendimento Rápido na Assis Brasil e Entorno</div>
                                    <div className="text-neutral-400 text-xs mt-1">Abertura de veículos trancados, cópias codificadas e fechaduras digitais para apartamentos.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. LOGÍSTICA E CORREDORES COMERCIAIS */}
            <section className="py-20 bg-neutral-950 border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// LOGÍSTICA EXPRESSA NA ZONA NORTE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Atendimento Ágil nos Polos de Maior Movimento
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Nossa unidade móvel está posicionada estrategicamente nos principais cruzamentos do Passo d'Areia e Cristo Redentor para garantir resposta imediata em vagas de estacionamento e prédios.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🚗 Corredor Av. Assis Brasil
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Eixo arterial que corta o Cristo Redentor e Passo d'Areia. Atendemos chamados de emergência residencial e automotiva com deslocamento direto e parada rápida da van equipada.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🛍️ Polo Comercial (Bourbon Wallig, Strip Center, Iguatemi)
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Socorro ágil para clientes e lojistas que trancaram as chaves dentro do carro nas vagas dos shoppings e supermercados da região da Assis Brasil e Nilo Peçanha.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏥 Eixo Hospitalar (Cristo Redentor & Conceição)
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Prioridade para emergências de profissionais de saúde, pacientes e acompanhantes nas vias de entorno dos hospitais Cristo Redentor e Conceição.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏢 Condomínios Residenciais (Plínio Brasil Milano & Sertório)
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Chegada sem demora para aberturas de portas, trocas de segredo e instalação de fechaduras digitais em edifícios de apartamentos de todo o Passo d'Areia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVIÇOS PRINCIPAIS COM FOTOS REAIS */}
            <section className="py-24 bg-black border-b border-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// SOLUÇÕES RÁPIDAS NO LOCAL</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            Serviços Executados Diretamente no Seu Veículo ou Imóvel
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* CARD 1: CHAVEIRO AUTOMOTIVO */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/im/foto-chave-carro-chevrolet.jpeg"
                                    alt="Foto Real de Chave Canivete Codificada Chevrolet e Abertura Automotiva"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Socorro Automotivo 24h
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Chaves Codificadas & Abertura de Veículos</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Chave trancada dentro do carro ou perda total da chave? Abertura técnica sem riscos e confecção de chave codificada ou presencial no próprio local para todas as montadoras.
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Chamar Chaveiro de Carro
                                </a>
                            </div>
                        </div>

                        {/* CARD 2: FECHADURAS DIGITAIS */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/im/foto-fechadura-digital-porta-madeira.jpeg"
                                    alt="Instalação de Fechaduras Digitais Intelbras em Porta de Madeira"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Fechaduras Digitais & Biometria
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Instalação de Fechaduras Eletrônicas</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Elimine o uso de chaves físicas e proteja seu apartamento no Passo d'Areia. Fechaduras biométricas, senhas e tags com instalação técnica perfeita e sem danificar a porta.
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

                        {/* CARD 3: ABERTURAS RESIDENCIAIS & TROCA DE FECHADURAS */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_3.webp"
                                    alt="Fechaduras Stam Mecânicas com Chaves e Cilindros de Segurança"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Abertura Residencial & Cilindros
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Abertura de Portas & Troca de Fechaduras</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Trancado do lado de fora de casa? Nossos chaveiros realizam abertura não destrutiva e troca de cilindro de segurança na hora, garantindo entrada rápida e tranquila.
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Solicitar Abertura de Porta
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. DIFERENCIAIS TÉCNICOS */}
            <section className="py-20 bg-neutral-950 border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// DIFERENCIAIS PROFISSIONAIS</span>
                        <h2 className="text-3xl font-bold text-white uppercase">Precisão, Segurança e Sem Danos</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">🚗</div>
                            <h3 className="text-lg font-bold text-white">Abertura Automotiva Segura</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Utilizamos métodos que protegem borrachas de vedação, fios de alarme e fechaduras elétricas de veículos nacionais e importados.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">⏱️</div>
                            <h3 className="text-lg font-bold text-white">Chegada em 10 a 15 Minutos</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Rotas expressas pela Assis Brasil e Sertório permitem que nosso técnico chegue ao seu local sem fazê-lo esperar desnecessariamente.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">🤝</div>
                            <h3 className="text-lg font-bold text-white">Orçamento Claro & Direto</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Informamos o valor do serviço previamente pelo WhatsApp. Sem surpresas ou taxas abusivas no momento da cobrança.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ COMERCIAL */}
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

            {/* 6. CTA FINAL */}
            <section className="py-28 bg-gradient-to-b from-black via-green-950/30 to-black text-center border-t border-neutral-800 relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        PRECISA DE CHAVEIRO NO <span className="text-green-400">PASSO D'AREIA OU CRISTO REDENTOR?</span>
                    </h2>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                        Nossa unidade móvel está de plantão na região da Assis Brasil pronta para chegar ao seu local em 10 a 15 minutos. Fale com o técnico agora!
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
