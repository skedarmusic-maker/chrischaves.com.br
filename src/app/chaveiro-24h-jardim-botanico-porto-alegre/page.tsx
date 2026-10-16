import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas Jardim Botânico Porto Alegre | Aberto Agora | Chris Chaves',
    description: 'Chaveiro 24h no Bairro Jardim Botânico em Porto Alegre. Chegada em 15 a 20 minutos na Av. Ipiranga, Salvador França e PUCRS. Abertura residencial sem danos, carros e fechaduras digitais.',
    alternates: {
        canonical: 'https://chrischaves.com.br/chaveiro-24h-jardim-botanico-porto-alegre/',
    },
    openGraph: {
        title: 'Chaveiro 24 Horas no Bairro Jardim Botânico | Chris Chaves Porto Alegre',
        description: 'Plantão 24h de chaveiro no Jardim Botânico. Deslocamento expresso em 15-20 min pela Ipiranga e Salvador França. Abertura sem avarias, chaves codificadas e fechaduras eletrônicas.',
        url: 'https://chrischaves.com.br/chaveiro-24h-jardim-botanico-porto-alegre/',
        type: 'website',
        locale: 'pt_BR',
        images: [
            {
                url: '/images/bairros/fechadura-digital-painel-interno-branca.jpeg',
                width: 1200,
                height: 630,
                alt: 'Chaveiro 24 Horas no Bairro Jardim Botânico em Porto Alegre',
            },
        ],
    },
}

export default function ChaveiroJardimBotanicoPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá!%20Estou%20no%20Bairro%20Jardim%20Botânico%20e%20preciso%20de%20chaveiro%20urgente."
    const phoneLink = "tel:51993398664"

    const faqData = [
        {
            question: "Quanto tempo a unidade móvel leva para chegar ao Jardim Botânico?",
            answer: "Nosso tempo médio de chegada ao Bairro Jardim Botânico é de 15 a 20 minutos. Deslocamo-nos rapidamente pelos eixos da Av. Ipiranga e Av. Salvador França (Terceira Perimetral), acessando condomínios, prédios residenciais e estacionamentos comerciais sem demora."
        },
        {
            question: "A abertura de portas residenciais estraga a fechadura ou a madeira?",
            answer: "Não. Realizamos abertura técnica não destrutiva com michas de precisão e decodificadores específicos. A fechadura, o cilindro e o batente da porta permanecem 100% intactos e funcionais após a abertura."
        },
        {
            question: "Atendem chamados automotivos nas imediações da PUCRS e Bourbon Ipiranga?",
            answer: "Sim! Atendemos motoristas com chave trancada no carro, chave perdida ou problemas de ignição em toda a extensão da Av. Ipiranga, incluindo estacionamentos da PUCRS, Hospital São Lucas, Bourbon Ipiranga e vias transversais."
        },
        {
            question: "Vocês instalam fechadura digital biométrica e eletrônica no Jardim Botânico?",
            answer: "Sim. Instalamos e configuramos fechaduras digitais das principais marcas (Intelbras, Papaiz, Yale, Elsys, etc.) em portas de madeira, pivotantes e metálicas de apartamentos e residências do bairro, com acabamento milimétrico."
        },
        {
            question: "O atendimento funciona de madrugada e nos finais de semana?",
            answer: "Sim, operamos em plantão contínuo 24 horas, incluindo madrugadas, sábados, domingos e feriados. Ao entrar em contato pelo WhatsApp, o chaveiro de plantão passa a previsão exata de chegada e o orçamento claro antes da saída."
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
        "name": "Chris Chaves | Chaveiro 24 Horas Jardim Botânico Porto Alegre",
        "description": "Atendimento emergencial 24h no Bairro Jardim Botânico em Porto Alegre. Abertura residencial sem avarias, chaveiro automotivo e instalação de fechaduras digitais.",
        "telephone": "(51) 99339-8664",
        "url": "https://chrischaves.com.br/chaveiro-24h-jardim-botanico-porto-alegre/",
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Jardim Botânico, Porto Alegre - RS"
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
                name="Chaveiro 24 Horas no Bairro Jardim Botânico Porto Alegre"
                description="Serviço de chaveiro 24 horas no Jardim Botânico em Porto Alegre. Atendimento emergencial ágil em 15 a 20 min na Ipiranga, Salvador França e PUCRS para aberturas sem danos, carros e fechaduras."
                url="https://chrischaves.com.br/chaveiro-24h-jardim-botanico-porto-alegre/"
                title="Chaveiro 24 Horas Jardim Botânico Porto Alegre | Chris Chaves"
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

                        {/* LEFT: VALUE PROPOSITION */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-mono tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Aberto Agora • Plantão 24h Jardim Botânico
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                                    JARDIM BOTÂNICO
                                </span>
                            </h1>

                            <h2 className="text-lg text-green-400 font-mono uppercase tracking-widest">
                                Chegada em 15 a 20 Minutos • Abertura 100% Sem Danos
                            </h2>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                                Ficou trancado do lado de fora do apartamento, perdeu a chave da residência ou esqueceu a chave dentro do carro? Nossa unidade móvel de socorro rápido atende todo o <strong className="text-white">Bairro Jardim Botânico</strong> com agilidade via Av. Ipiranga e Salvador França.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 shadow-[0_0_30px_rgba(34,197,94,0.4)] rounded-sm"
                                >
                                    <span className="mr-3">Chamar Socorro no WhatsApp</span>
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
                                    <span className="text-green-500 font-bold">✓</span> Sem avarias na porta ou miolo
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Pix e cartão de crédito no local
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Atendimento dia, noite e madrugada
                                </span>
                            </div>
                        </div>

                        {/* RIGHT: REAL PHOTO SHOWCASE */}
                        <div className="w-full lg:w-[480px] relative">
                            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
                                <Image
                                    src="/images/bairros/fechadura-digital-painel-interno-branca.jpeg"
                                    alt="Instalação de Fechaduras e Atendimento de Chaveiro no Jardim Botânico Porto Alegre"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 border border-neutral-800 rounded-sm">
                                    <div className="text-xs font-mono text-green-400 uppercase font-bold">Plantão Móvel Especializado</div>
                                    <div className="text-white font-bold text-base">Atendimento Rápido no Jardim Botânico</div>
                                    <div className="text-neutral-400 text-xs mt-1">Serviço profissional de abertura de cilindros tetra, multiponto e instalação de fechaduras eletrônicas.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. LOGÍSTICA E ROTAS DE ACESSO REAL */}
            <section className="py-20 bg-neutral-950 border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// LOGÍSTICA E TEMPO DE RESPOSTA</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Deslocamento Ágil em Todas as Vias do Jardim Botânico
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Nossa unidade móvel tem acesso direto pelas principais artérias viárias da região leste/central, permitindo socorro emergencial sem atrasos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🚗 Eixo Av. Ipiranga
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Artéria de deslocamento rápido que liga a região central ao Jardim Botânico. Permite atendimento expresso a condomínios residenciais e estabelecimentos ao longo de toda a avenida.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                ⚡ Eixo Salvador França (3ª Perimetral)
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Conexão direta que agiliza a chegada de nossa equipe vindo da Zona Norte ou Leste, permitindo fugir de retenções de tráfego nos horários de pico.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏢 Ruas Guilherme Alves, Barão do Amazonas e La Plata
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Atendimento imediato em edifícios e condomínios fechados das ruas internas do bairro, com procedimentos autorizados e discretos junto a portarias.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🎓 Área Universitária da PUCRS & Bourbon Ipiranga
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Ponto frequente de atendimento emergencial automotivo para condutores com chaves esquecidas no interior de carros nos estacionamentos do entorno.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVIÇOS EXECUTADOS NO LOCAL COM VÍDEO REAL */}
            <section className="py-24 bg-black border-b border-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// SOLUÇÕES RÁPIDAS NO LOCAL</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            Serviços Executados Diretamente no Seu Endereço
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                            Unidade móvel completa com equipamentos eletrônicos de precisão, reposição de cilindros e instalação de fechaduras modernas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* SERVIÇO 1: ABERTURA RESIDENCIAL */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp"
                                    alt="Abertura de portas e troca de segredo no Jardim Botânico"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Residencial & Prédios
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Abertura Técnica de Portas & Troca de Segredo</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Porta bateu com a chave por dentro ou o miolo travou? Fazemos abertura limpa sem arrombamento e sem danificar o acabamento. Troca de segredo e cilindros de alta segurança na hora.
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
                                    src="/images/im/foto-chave-carro-chevrolet.jpeg"
                                    alt="Chaveiro Automotivo no Bairro Jardim Botânico"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Chaveiro Automotivo 24h
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Carro Trancado & Chave Codificada</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Esqueceu a chave dentro do carro na Av. Ipiranga ou perdeu a chave principal? Abertura veicular sem riscar a lataria, confecção de chave canivete e codificação transponder no local.
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

                        {/* SERVIÇO 3: FECHADURAS DIGITAIS COM VÍDEO REAL */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full bg-black">
                                <video
                                    src="/videos/instalacao-fechadura-digital-intelbras-teste.mp4"
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster="/images/bairros/fechadura-digital-painel-interno-branca.jpeg"
                                >
                                    Seu navegador não suporta a reprodução de vídeo.
                                </video>
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30 pointer-events-none">
                                    ▶ Vídeo Real da Instalação
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Instalação de Fechaduras Digitais</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Veja no vídeo acima o teste prático de uma fechadura digital instalada por nossa equipe. Instalação milimétrica de modelos com biometria, senha e tag para portas no Jardim Botânico.
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

            {/* 4. DIFERENCIAIS DE CONFIANÇA */}
            <section className="py-20 bg-neutral-950 border-b border-neutral-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// DIFERENCIAIS CHRIS CHAVES</span>
                        <h2 className="text-3xl font-bold text-white uppercase">Por Que Nos Escolher no Jardim Botânico</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">🛡️</div>
                            <h3 className="text-lg font-bold text-white">Método 100% Não Destrutivo</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Empregamos michas pantográficas e ferramentas especiais de precisão para garantir que nem a fechadura nem a porta sofram qualquer avaria.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">💬</div>
                            <h3 className="text-lg font-bold text-white">Transparência Total no Preço</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Informamos com clareza o valor do serviço e deslocamento antes de sair da base. Sem surpresas ou cobranças indevidas no local.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">⏱️</div>
                            <h3 className="text-lg font-bold text-white">Plantão Noturno Efetivo</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Prontidão real em horários noturnos, feriados e madrugadas. Viatura sempre abastecida e com equipamento pronto para partida imediata.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ PRÁTICO */}
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
                        PRECISA DE CHAVEIRO NO <span className="text-green-400">JARDIM BOTÂNICO?</span>
                    </h2>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                        Nossa unidade móvel está de plantão em Porto Alegre pronta para atender seu chamado no Jardim Botânico em 15 a 20 minutos. Fale agora mesmo com o chaveiro!
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
