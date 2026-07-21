import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas em Petrópolis Porto Alegre | Chris Chaves',
    description: 'Chaveiro 24h no bairro Petrópolis em Porto Alegre. Atendimento rápido na Av. Protásio Alves, Nilópolis, Bagé, Encol, União e Barranco. Ligue já!',
    alternates: {
        canonical: 'https://chrischaves.com.br/chaveiro-24h-petropolis-porto-alegre/',
    },
    openGraph: {
        title: 'Chaveiro 24 Horas no Bairro Petrópolis | Porto Alegre RS',
        description: 'Socorro emergencial de chaveiro 24h no Petrópolis. Aberturas sem danos, chaves codificadas e fechaduras digitais na Protásio Alves, Nilópolis e arredores.',
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
    const whatsappLink = "https://wa.me/5551993398664?text=Olá!%20Preciso%20de%20chaveiro%2024h%20no%20bairro%20Petrópolis%20em%20Porto%20Alegre."

    const faqData = [
        {
            question: "Quanto tempo o chaveiro 24h demora para chegar ao Bairro Petrópolis?",
            answer: "Nosso tempo médio de chegada no bairro Petrópolis é de 15 a 20 minutos. Nossa unidade móvel roda pelos principais corredores como a Av. Protásio Alves (antigo Caminho do Meio), Av. Carlos Gomes (Terceira Perimetral) e Av. Ipiranga."
        },
        {
            question: "Atendem emergências perto da Churrascaria Barranco ou do Grêmio Náutico União?",
            answer: "Sim! Prestamos socorro imediato para motoristas e sócios trancados fora do veículo nos estacionamentos do Barranco, do Grêmio Náutico União (Sede Petrópolis), ao redor da Praça da Encol ou em frente aos colégios Santa Inês e Israelita."
        },
        {
            question: "Fazem abertura sem danificar a porta em condomínios da Nilópolis, Bagé ou Felipe de Oliveira?",
            answer: "Com certeza. Atendemos tanto os casarões clássicos da década de 1930 quanto os edifícios modernos nas ruas Nilópolis, Bagé, Montenegro, Carazinho e Felipe de Oliveira, realizando aberturas técnicas limpas sem riscar ou estragar o cilindro."
        },
        {
            question: "Vocês instalam fechaduras eletrônicas e digitais no Petrópolis?",
            answer: "Sim, somos especialistas em instalação e configuração de fechaduras digitais (biométricas, por senha ou cartão de aproximação) para apartamentos, residências e comércios na região da Protásio Alves, Bagé e arredores."
        },
        {
            question: "O plantão de chaveiro automotivo funciona durante a madrugada no bairro Petrópolis?",
            answer: "Sim, nosso atendimento 24 horas funciona 7 dias por semana, inclusive de madrugada, domingos e feriados. Se você perdeu a chave do carro ou teve a ignição travada de madrugada no Petrópolis, enviamos socorro imediato."
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
        "description": "Atendimento emergencial de chaveiro 24h no bairro Petrópolis em Porto Alegre. Abertura residencial, socorro automotivo e fechaduras digitais na Protásio Alves, Nilópolis, Bagé, União e Encol.",
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
                description="Serviço de chaveiro 24 horas no bairro Petrópolis em Porto Alegre. Atendimento ágil para aberturas de portas, chaves codificadas e fechaduras eletrônicas na Protásio Alves, Nilópolis, Bagé e Encol."
                url="https://chrischaves.com.br/chaveiro-24h-petropolis-porto-alegre/"
                title="Chaveiro 24 Horas em Petrópolis Porto Alegre | Chris Chaves"
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT: CONTENT & HERO COPY */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Plantão 24h Ativo no Bairro Petrópolis
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                                    BAIRRO PETRÓPOLIS
                                </span>
                            </h1>

                            <h2 className="text-lg text-green-400 font-mono uppercase tracking-widest">
                                Porto Alegre / RS • Chegamos em Minutos ao Seu Local
                            </h2>

                            <div className="bg-neutral-900/80 border-l-4 border-green-500 p-5 rounded-r-sm text-neutral-200 space-y-3">
                                <p className="text-base md:text-lg leading-relaxed">
                                    <strong>Sua chave quebrou ou a porta bateu?</strong> Atendimento rápido e sem complicação nas ruas arborizadas do Petrópolis. De apartamentos modernos na <strong>Av. Nilópolis</strong> a casarões perto do <strong>Grêmio Náutico União</strong>, chegamos em minutos.
                                </p>
                            </div>

                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                Se você ficou sem chave no estacionamento da <strong>Churrascaria Barranco</strong>, parado na <strong>Av. Protásio Alves</strong> ou precisa de troca de segredo na <strong>Rua Bagé</strong> ou <strong>Felipe de Oliveira</strong>, nossa unidade móvel está pronta 24h por dia.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 shadow-[0_0_30px_rgba(34,197,94,0.4)] rounded-sm"
                                >
                                    <span className="mr-3">Chamar Chaveiro em Petrópolis</span>
                                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400 border-t border-neutral-800">
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Abertura sem Danos
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Chegada em 15 a 20 min
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Pix e Cartões
                                </span>
                            </div>
                        </div>

                        {/* RIGHT: HERO FEATURED IMAGE */}
                        <div className="w-full lg:w-[480px] relative">
                            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp"
                                    alt="Instalação de Fechaduras Eletrônicas e Segurança em Petrópolis Porto Alegre"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 border border-neutral-800 rounded-sm">
                                    <div className="text-xs font-mono text-green-400 uppercase">Tecnologia & Fechaduras Digitais</div>
                                    <div className="text-white font-bold text-base">Atendimento Especializado no Petrópolis</div>
                                    <div className="text-neutral-400 text-xs mt-1">Fechaduras de alta segurança, biométricas e trocas de segredo para condomínios e casarões da região.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. HISTÓRIA & CURIOSIDADES DO BAIRRO PETRÓPOLIS (CONTEXTO RIQUÍSSIMO) */}
            <section className="py-24 bg-neutral-950 border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// CONTEXTO HISTÓRICO & URBANÍSTICO</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            Origem, Tradição e Curiosidades do Bairro Petrópolis
                        </h2>
                        <p className="text-neutral-400 max-w-3xl mx-auto mt-4 text-sm md:text-base">
                            Conhecer o bairro onde atuamos é o que nos permite chegar em minutos a qualquer esquina, de casarões antigos da década de 1930 a edifícios modernos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* CARDS 1: ORIGEM DO NOME */}
                        <div className="bg-black/80 border border-neutral-800 p-8 rounded-sm hover:border-green-500/50 transition-colors duration-300 space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-sm flex items-center justify-center text-green-400 text-2xl font-bold">
                                👑
                            </div>
                            <h3 className="text-xl font-bold text-white">Homenagem Imperial</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                O tradicional bairro da Zona Leste/Norte de Porto Alegre foi batizado em homenagem ao <strong className="text-white">Imperador Dom Pedro II</strong>, mantendo uma identidade nobre, arborizada e histórica desde o seu planejamento urbano na capital gaúcha.
                            </p>
                        </div>

                        {/* CARDS 2: DE CHÁCARAS A BAIRRO NOBRE */}
                        <div className="bg-black/80 border border-neutral-800 p-8 rounded-sm hover:border-green-500/50 transition-colors duration-300 space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-sm flex items-center justify-center text-green-400 text-2xl font-bold">
                                🌾
                            </div>
                            <h3 className="text-xl font-bold text-white">De Chácaras a Bairro Nobre</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Até a década de 1930, Petrópolis era essencialmente rural e refúgio de veraneio da elite porto-alegrense. Tinha chácaras de produção de agrião, criação de gado e tradicionais tambos de leite antes de se transformar em referência imobiliária.
                            </p>
                        </div>

                        {/* CARDS 3: O CAMINHO DO MEIO */}
                        <div className="bg-black/80 border border-neutral-800 p-8 rounded-sm hover:border-green-500/50 transition-colors duration-300 space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-sm flex items-center justify-center text-green-400 text-2xl font-bold">
                                🛣️
                            </div>
                            <h3 className="text-xl font-bold text-white">O Antigo "Caminho do Meio"</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                A atual <strong className="text-white">Avenida Protásio Alves</strong>, espinha dorsal do bairro, era historicamente conhecida como o rota do *Caminho do Meio*, via essencial para quem saía do Centro Histórico em direção à Zona Leste.
                            </p>
                        </div>

                        {/* CARDS 4: O BAIRRO DAS MINI-AVENIDAS */}
                        <div className="bg-black/80 border border-neutral-800 p-8 rounded-sm hover:border-green-500/50 transition-colors duration-300 space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-sm flex items-center justify-center text-green-400 text-2xl font-bold">
                                📐
                            </div>
                            <h3 className="text-xl font-bold text-white">O Bairro das "Miniavenidas"</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Curiosidade urbanística única: Petrópolis possui 25 avenidas, mas 18 delas não chegam a ter 1 km de extensão (várias com menos de 500m!). Muitas receberam nomes de municípios gaúchos como <strong className="text-white">Bagé, Montenegro e Carazinho</strong> por exigência da Câmara no século XX.
                            </p>
                        </div>

                        {/* CARDS 5: VIDA BAIRRO-CENTRO */}
                        <div className="bg-black/80 border border-neutral-800 p-8 rounded-sm hover:border-green-500/50 transition-colors duration-300 space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-sm flex items-center justify-center text-green-400 text-2xl font-bold">
                                🌳
                            </div>
                            <h3 className="text-xl font-bold text-white">Estilo Bairro-Centro Arborizado</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Famoso por suas ruas arborizadas, o Petrópolis combina a tranquilidade de casarões antigos preservados com edifícios modernos e um comércio de rua autossuficiente e vibrante.
                            </p>
                        </div>

                        {/* CARDS 6: IGREJA SÃO SEBASTIÃO */}
                        <div className="bg-black/80 border border-neutral-800 p-8 rounded-sm hover:border-green-500/50 transition-colors duration-300 space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-sm flex items-center justify-center text-green-400 text-2xl font-bold">
                                ⛪
                            </div>
                            <h3 className="text-xl font-bold text-white">Igreja São Sebastião</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Construída na década de 1930, a <strong className="text-white">Igreja São Sebastião</strong> é um marco arquitetônico e cartão-postal religioso do bairro, marcando o centro comunitário da região há quase um século.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. PONTOS DE REFERÊNCIA E CORREDORES PRINCIPAIS */}
            <section className="py-20 bg-black border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// PONTOS DE REFERÊNCIA & VIAS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
                            Chegamos Rápido Onde Você Estiver em Petrópolis
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🥩 Churrascaria Barranco (Av. Protásio Alves)
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Ponto gastronômico tradicionalíssimo há mais de 50 anos. Atendemos motoristas que esqueceu a chave no carro ou enfrentam problemas na ignição no estacionamento.
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏊 Grêmio Náutico União (Sede Petrópolis)
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Um dos maiores clubes sociodesportivos do estado. Socorro rápido para sócios e frequentadores nas ruas do entorno.
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🌳 Praça da Encol (Carlos Simão Arnt)
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Coração social ao ar livre da região. Atendimento para moradores passeando com pets ou praticando esportes que perderam suas chaves.
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏫 Colégios Santa Inês & Israelita
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Instituições de ensino tradicionais que movimentam o trânsito nos horários de pico. Atendemos emergências de pais e professores rapidamente.
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏢 Av. Carlos Gomes & Av. Ipiranga
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Importantes corredores comerciais e financeiros. Acesso expresso da nossa unidade móvel para atendimentos na Terceira Perimetral e limite sul do bairro.
                            </p>
                        </div>

                        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏡 Av. Nilópolis, Felipe de Oliveira & Bagé
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Ruas internas icônicas e muito movimentadas. Suporte imediato para troca de segredos, fechaduras biométricas e aberturas residenciais.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. GALERIA COM AS 3 FOTOS E COPYS ESPECÍFICAS DE ALTO IMPACTO */}
            <section className="py-24 bg-neutral-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// NOSSOS SERVIÇOS EM PETRÓPOLIS</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            Soluções de Chaveiro 24h com Imagens Reais
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* SERVIÇO 1: URGÊNCIA RESIDENCIAL */}
                        <div className="bg-black border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp"
                                    alt="Atendimento de Urgência Residencial e Fechaduras de Alta Segurança no Petrópolis"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Urgência Residencial
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Fechaduras de Alta Segurança & Aberturas</h3>
                                    <p className="text-neutral-300 text-sm leading-relaxed bg-neutral-900/60 p-4 border-l-2 border-green-500 rounded-r-sm">
                                        "Sua chave quebrou ou a porta bateu? Atendimento rápido e sem complicação nas ruas arborizadas do Petrópolis. De apartamentos modernos na Nilópolis a casarões perto do União, chegamos em minutos."
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Chamar Emergência Residencial
                                </a>
                            </div>
                        </div>

                        {/* SERVIÇO 2: SOCORRO AUTOMOTIVO */}
                        <div className="bg-black border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_8.jpeg"
                                    alt="Socorro Automotivo e Chaves Codificadas no Bairro Petrópolis"
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
                                    <p className="text-neutral-300 text-sm leading-relaxed bg-neutral-900/60 p-4 border-l-2 border-green-500 rounded-r-sm">
                                        "Ficou sem chave no estacionamento do Barranco ou parado na Protásio Alves? Chaveiro automotivo no bairro Petrópolis com atendimento ágil para qualquer modelo de veículo."
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Solicitar Socorro Automotivo
                                </a>
                            </div>
                        </div>

                        {/* SERVIÇO 3: COMERCIAL & CONDOMÍNIOS */}
                        <div className="bg-black border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_3.webp"
                                    alt="Instalação de Fechaduras Digitais e Troca de Segredo em Condomínios no Petrópolis"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Condomínios & Lojas
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Serviços Comerciais & Condomínios</h3>
                                    <p className="text-neutral-300 text-sm leading-relaxed bg-neutral-900/60 p-4 border-l-2 border-green-500 rounded-r-sm">
                                        "Troca de segredos, cópias de chaves e instalação de fechaduras digitais para condomínios e lojas na região da Protásio, Bagé e arredores."
                                    </p>
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-3 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-wider transition-colors rounded-sm shadow-md"
                                >
                                    Orçamento para Condomínios
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// PERGUNTAS FREQUENTES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Dúvidas sobre o Atendimento no Petrópolis</h2>
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

            {/* 6. FINAL CTA */}
            <section className="py-28 bg-gradient-to-b from-black via-green-950/30 to-black text-center border-t border-neutral-800 relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        PRECISA DE CHAVEIRO NO <span className="text-green-400">PETRÓPOLIS?</span>
                    </h2>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                        Atendimento imediato na Av. Protásio Alves, Nilópolis, Bagé, Encol, União e arredores. Chegamos em 15 a 20 minutos com suporte completo 24h!
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(34,197,94,0.5)] rounded-sm"
                    >
                        Falar no WhatsApp (Plantão 24h Petrópolis)
                    </a>
                </div>
            </section>
        </main>
    )
}
