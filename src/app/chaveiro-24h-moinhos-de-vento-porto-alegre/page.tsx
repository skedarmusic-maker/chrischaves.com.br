import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas Moinhos de Vento Porto Alegre | Aberto Agora | Chris Chaves',
    description: 'Chaveiro 24h no Bairro Moinhos de Vento em Porto Alegre. Atendimento em 15 a 20 min na Padre Chagas, 24 de Outubro, Goethe e Parcão. Abertura sem danos, carros e fechaduras digitais.',
    alternates: {
        canonical: 'https://chrischaves.com.br/chaveiro-24h-moinhos-de-vento-porto-alegre/',
    },
    openGraph: {
        title: 'Chaveiro 24 Horas no Bairro Moinhos de Vento | Chris Chaves Porto Alegre',
        description: 'Plantão 24h de chaveiro no Moinhos de Vento. Chegada expressa em 15-20 min. Abertura limpa sem danos em apartamentos, carros e instalação de fechaduras eletrônicas.',
        url: 'https://chrischaves.com.br/chaveiro-24h-moinhos-de-vento-porto-alegre/',
        type: 'website',
        locale: 'pt_BR',
        images: [
            {
                url: '/images/im/foto-fechadura-digital-porta-madeira.jpeg',
                width: 1200,
                height: 630,
                alt: 'Chaveiro 24 Horas no Bairro Moinhos de Vento em Porto Alegre',
            },
        ],
    },
}

export default function ChaveiroMoinhosDeVentoPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá!%20Estou%20no%20Bairro%20Moinhos%20de%20Vento%20e%20preciso%20de%20atendimento%20de%20chaveiro%20urgente."
    const phoneLink = "tel:51993398664"

    const faqData = [
        {
            question: "Qual o tempo médio de deslocamento até o Bairro Moinhos de Vento?",
            answer: "Nosso tempo médio de chegada ao Bairro Moinhos de Vento é de 15 a 20 minutos. Deslocamo-nos rapidamente pelos eixos da Av. Cristóvão Colombo, Av. Goethe e Rua 24 de Outubro, com acesso ágil a condomínios residenciais e estabelecimentos comerciais."
        },
        {
            question: "A abertura de portas residenciais estraga a fechadura ou a madeira da porta?",
            answer: "Não. Empregamos técnicas de abertura não destrutiva com michas de alta precisão e decodificadores pantográficos. Todo o procedimento preserva integralmente a fechadura, o cilindro de segurança e o batente da porta sem arranhões."
        },
        {
            question: "Atendem chamados automotivos nas imediações do Parcão e Padre Chagas?",
            answer: "Sim! Prestamos socorro imediato para motoristas com chave trancada no veículo, perda de chave ou falhas no transponder em toda a extensão da Rua Padre Chagas, Mostardeiro, Félix da Cunha, entorno do Parcão e estacionamentos da região."
        },
        {
            question: "Vocês instalam fechadura digital biométrica e eletrônica em apartamentos no Moinhos de Vento?",
            answer: "Sim, somos especialistas na instalação e configuração de fechaduras digitais das marcas mais renomadas (Intelbras, Papaiz, Yale, Samsung, etc.) em portas de madeira maciça, pivotantes e metálicas, com alinhamento milimétrico e acabamento impecável."
        },
        {
            question: "Quais são as formas de pagamento aceitas?",
            answer: "Aceitamos Pix, cartões de crédito e débito de todas as bandeiras (com máquina móvel no local) e dinheiro. O valor do serviço e deslocamento é informado previamente com total clareza antes do envio da viatura."
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
        "name": "Chris Chaves | Chaveiro 24 Horas Moinhos de Vento Porto Alegre",
        "description": "Atendimento emergencial 24h no Bairro Moinhos de Vento em Porto Alegre. Abertura residencial sem avarias, socorro automotivo e instalação de fechaduras digitais.",
        "telephone": "(51) 99339-8664",
        "url": "https://chrischaves.com.br/chaveiro-24h-moinhos-de-vento-porto-alegre/",
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Moinhos de Vento, Porto Alegre - RS"
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
                name="Chaveiro 24 Horas no Bairro Moinhos de Vento Porto Alegre"
                description="Serviço de chaveiro 24 horas no Moinhos de Vento em Porto Alegre. Atendimento emergencial em 15 a 20 min na Padre Chagas, 24 de Outubro e Goethe para aberturas sem danos, carros e fechaduras."
                url="https://chrischaves.com.br/chaveiro-24h-moinhos-de-vento-porto-alegre/"
                title="Chaveiro 24 Horas Moinhos de Vento Porto Alegre | Chris Chaves"
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
                                Aberto Agora • Plantão 24h Moinhos de Vento
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                                    MOINHOS DE VENTO
                                </span>
                            </h1>

                            <h2 className="text-lg text-green-400 font-mono uppercase tracking-widest">
                                Chegada em 15 a 20 Minutos • Abertura 100% Sem Danos
                            </h2>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                                A porta do apartamento bateu com a chave por dentro, a fechadura de alta segurança travou ou esqueceu a chave no carro? Nossa unidade móvel de plantão atende todo o <strong className="text-white">Bairro Moinhos de Vento</strong> com máxima discrição, rapidez e ferramental técnico especializado.
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
                                    <span className="text-green-500 font-bold">✓</span> Sem avarias em portas nobres
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Cartão e Pix no local
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Plantão permanente dia e madrugada
                                </span>
                            </div>
                        </div>

                        {/* RIGHT: REAL PHOTO SHOWCASE */}
                        <div className="w-full lg:w-[480px] relative">
                            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
                                <Image
                                    src="/images/im/foto-fechadura-digital-porta-madeira.jpeg"
                                    alt="Instalação de Fechaduras e Abertura Técnica no Moinhos de Vento Porto Alegre"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 border border-neutral-800 rounded-sm">
                                    <div className="text-xs font-mono text-green-400 uppercase font-bold">Unidade de Plantão Especializada</div>
                                    <div className="text-white font-bold text-base">Atendimento Rápido no Moinhos de Vento</div>
                                    <div className="text-neutral-400 text-xs mt-1">Especialistas em cilindros multiponto, fechaduras biométricas e chaves automotivas codificadas.</div>
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
                            Deslocamento Rápido em Qualquer Ponto do Moinhos de Vento
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Nossa unidade móvel tem acesso desimpedido pelas principais vias de ligação entre as zonas Norte e Central de Porto Alegre, garantindo atendimento pontual.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🚗 Eixo Rua 24 de Outubro & Mostardeiro
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Corredores estruturais do bairro. Permitem deslocamento expresso para prédios comerciais, consultórios e condomínios de alto padrão sem enfrentar retenções.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                ⚡ Eixo Av. Goethe & Entorno do Parcão
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Acesso direto para atender chamados automotivos e residenciais nas ruas arborizadas ao redor do Parque Moinhos de Vento com prioridade de deslocamento.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🏢 Ruas Padre Chagas, Félix da Cunha e Dinarte Ribeiro
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Atendimento discreto e autorizado para liberação rápida em portarias de edifícios e áreas comerciais gastronômicas da região.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🧭 Conexão Av. Cristóvão Colombo & Dom Pedro II
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Artéria de ligação ágil com a Terceira Perimetral e Zona Norte, garantindo envio imediato de reforço técnico para emergências complexas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVIÇOS EXECUTADOS DIRETAMENTE NO LOCAL */}
            <section className="py-24 bg-black border-b border-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// SOLUÇÕES RÁPIDAS NO LOCAL</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            Serviços Executados Diretamente no Seu Endereço
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                            Unidade equipada com máquinas eletrônicas, cilindros de reposição e peças para entrega do serviço pronto no primeiro atendimento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* SERVIÇO 1: ABERTURA RESIDENCIAL */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp"
                                    alt="Abertura de portas e troca de segredo no Moinhos de Vento"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Residencial & Condomínios
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Abertura Técnica de Portas & Troca de Segredo</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Porta bateu com a chave por dentro ou o miolo travou? Abertura limpa sem danificar o acabamento, o cilindro ou a porta. Troca imediata de segredos e novos cilindros de alta segurança no local.
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
                                    alt="Chaveiro Automotivo no Bairro Moinhos de Vento"
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
                                        Esqueceu a chave dentro do carro no Parcão ou perdeu a chave principal? Abertura técnica sem riscar a lataria, confecção de chave canivete e codificação transponder para veículos nacionais e importados.
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

                        {/* SERVIÇO 3: FECHADURAS DIGITAIS */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/bairros/fechadura-digital-painel-interno-branca.jpeg"
                                    alt="Instalação de Fechaduras Digitais no Moinhos de Vento"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30">
                                    Tecnologia & Biometria
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Instalação de Fechaduras Digitais</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Modernize o controle de acesso do seu apartamento ou consultório. Fechaduras biométricas, com senha e tag de aproximação instaladas com perfeição estética e garantia.
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
                        <h2 className="text-3xl font-bold text-white uppercase">Por Que Nos Escolher no Moinhos de Vento</h2>
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
                            <h3 className="text-lg font-bold text-white">Preço Claro Antes de Sair</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Sem surpresas na hora de pagar. Explicamos o procedimento pelo WhatsApp e combinamos os valores com total transparência antes de iniciar o deslocamento.
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
                        PRECISA DE CHAVEIRO NO <span className="text-green-400">MOINHOS DE VENTO?</span>
                    </h2>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                        Nossa viatura está de plantão em Porto Alegre pronta para atender seu chamado no Moinhos de Vento em 15 a 20 minutos. Clique abaixo e fale direto com o técnico!
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
