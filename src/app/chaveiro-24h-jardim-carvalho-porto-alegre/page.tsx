import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas Jardim Carvalho Porto Alegre | Chegamos em 5-10 min | Chris Chaves',
    description: 'Chaveiro 24h no Bairro Jardim Carvalho em Porto Alegre. Base vizinha com chegada expressa em 5 a 10 minutos na Av. Antônio de Carvalho e Ary Tarragô. Aberturas sem danos e fechaduras.',
    alternates: {
        canonical: 'https://chrischaves.com.br/chaveiro-24h-jardim-carvalho-porto-alegre/',
    },
    openGraph: {
        title: 'Chaveiro 24 Horas Jardim Carvalho | Chris Chaves Porto Alegre',
        description: 'Socorro de chaveiro 24h no Jardim Carvalho com tempo recorde de 5 a 10 min. Base vizinha na Zona Leste/Norte. Abertura residencial limpa, carros e fechaduras digitais.',
        url: 'https://chrischaves.com.br/chaveiro-24h-jardim-carvalho-porto-alegre/',
        type: 'website',
        locale: 'pt_BR',
        images: [
            {
                url: '/images/bairros/fechadura-digital-externa-instalada.jpeg',
                width: 1200,
                height: 630,
                alt: 'Chaveiro 24 Horas no Bairro Jardim Carvalho Porto Alegre',
            },
        ],
    },
}

export default function ChaveiroJardimCarvalhoPage() {
    const whatsappLink = "https://wa.me/5551993398664?text=Olá!%20Estou%20no%20Bairro%20Jardim%20Carvalho%20e%20preciso%20de%20chaveiro%20urgente."
    const phoneLink = "tel:51993398664"

    const faqData = [
        {
            question: "Por que a Chris Chaves chega tão rápido no Jardim Carvalho (5 a 10 min)?",
            answer: "Nossa sede e base operacional fica na Rua Karl Iwers, região limítrofe direta ao Jardim Carvalho. Por estarmos a poucos metros da Av. Antônio de Carvalho e Estrada Ary Tarragô, nossa unidade móvel consegue chegar até seu portão ou condomínio em apenas 5 a 10 minutos."
        },
        {
            question: "A abertura de portas residenciais danifica o miolo ou o batente?",
            answer: "Não danifica. Utilizamos técnicas manuais de michagem de precisão e decodificação milimétrica. A fechadura é aberta sem marcas, preservando o miolo original e dispensando a troca obrigatória caso você não tenha perdido a chave."
        },
        {
            question: "Atendem chamados de carros trancados na Av. Antônio de Carvalho e imediações da UFRGS?",
            answer: "Sim! Fazemos abertura técnica automotiva não destrutiva para veículos de todas as montadoras na Av. Antônio de Carvalho, imediações do Campus da UFRGS e vias residenciais do Jardim Carvalho, além de cópia de chave canivete e chip codificado."
        },
        {
            question: "Vocês configuram e ensinam o morador a cadastrar senhas na fechadura digital?",
            answer: "Com certeza. Além da instalação física perfeita e alinhamento milimétrico da lingueta na porta, nosso técnico configura a senha mestre junto com você e ensina passo a passo como cadastrar biometrias e tags de acesso."
        },
        {
            question: "Quais são as formas de pagamento aceitas?",
            answer: "Aceitamos Pix, cartões de crédito e débito (com máquina de cartão móvel no local) e dinheiro. O orçamento é informado de forma transparente antes da saída da equipe."
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
        "name": "Chris Chaves | Chaveiro 24 Horas Jardim Carvalho Porto Alegre",
        "description": "Atendimento ultrarrápido 24h no Bairro Jardim Carvalho em Porto Alegre. Chegada em 5 a 10 min para abertura de portas sem danos, socorro automotivo e fechaduras digitais.",
        "telephone": "(51) 99339-8664",
        "url": "https://chrischaves.com.br/chaveiro-24h-jardim-carvalho-porto-alegre/",
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Jardim Carvalho, Porto Alegre - RS"
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
                name="Chaveiro 24 Horas Jardim Carvalho Porto Alegre"
                description="Serviço de chaveiro 24 horas no Jardim Carvalho em Porto Alegre. Atendimento vizinho imediato em 5 a 10 min na Antônio de Carvalho e Ary Tarragô para aberturas sem danos e fechaduras digitais."
                url="https://chrischaves.com.br/chaveiro-24h-jardim-carvalho-porto-alegre/"
                title="Chaveiro 24 Horas Jardim Carvalho Porto Alegre | Chris Chaves"
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
                                Base Vizinha ao Bairro • Chegada em 5 a 10 Minutos
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                                    JARDIM CARVALHO
                                </span>
                            </h1>

                            <h2 className="text-lg text-green-400 font-mono uppercase tracking-widest">
                                Atendimento Imediato • Abertura 100% Sem Danos
                            </h2>

                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                                Ficou trancado para fora ou teve problemas com a fechadura no <strong className="text-white">Jardim Carvalho</strong>? Como nossa base operacional fica vizinha ao bairro, nossa unidade móvel chega ao seu endereço em apenas <strong className="text-white">5 a 10 minutos</strong> para resolver na hora.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 shadow-[0_0_30px_rgba(34,197,94,0.4)] rounded-sm"
                                >
                                    <span className="mr-3">Chamar no WhatsApp (5-10 min)</span>
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
                                    <span className="text-green-500 font-bold">✓</span> Chegada recorde em 5-10 min
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Sem arrombamentos nem avarias
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Máquina de cartão e Pix no local
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-green-500 font-bold">✓</span> Plantão permanente 24h
                                </span>
                            </div>
                        </div>

                        {/* RIGHT: PHOTO SHOWCASE */}
                        <div className="w-full lg:w-[480px] relative">
                            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
                                <Image
                                    src="/images/bairros/fechadura-digital-externa-instalada.jpeg"
                                    alt="Atendimento Emergencial de Chaveiro no Bairro Jardim Carvalho Porto Alegre"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 border border-neutral-800 rounded-sm">
                                    <div className="text-xs font-mono text-green-400 uppercase font-bold">Chaveiro Vizinho ao Jardim Carvalho</div>
                                    <div className="text-white font-bold text-base">Atendimento Rápido em Portas e Carros</div>
                                    <div className="text-neutral-400 text-xs mt-1">Unidade móvel equipada com peças de reposição e ferramentas de precisão não destrutivas.</div>
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
                        <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// LOGÍSTICA HIPERLOCAL</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            Por Que Chegamos em Menos de 10 Minutos no Jardim Carvalho
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Nossa sede operacional fica imediatamente ao lado do Jardim Carvalho, permitindo socorro em tempo mínimo pelas principais ligações viárias.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🚗 Eixo Av. Antônio de Carvalho
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Principal corredor viário do bairro, percorrido em minutos para alcançar condomínios, centros comerciais e áreas residenciais do Jardim Carvalho.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                ⚡ Conexão Estrada Ary Tarragô
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Ligação direta entre a base da Chris Chaves e a parte alta e central do Jardim Carvalho, garantindo trânsito desimpedido em qualquer horário.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🧭 Eixo Protásio Alves (Alto da Lomba do Pinheiro)
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Acesso rápido aos acessos e condomínios que fazem divisa com a Av. Protásio Alves, garantindo assistência rápida a pedestres e condutores.
                            </p>
                        </div>

                        <div className="bg-black/70 border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 font-bold text-lg flex items-center gap-2">
                                🎓 Entorno da UFRGS & Vias Residenciais
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Prontidão para socorro de motoristas trancados fora do veículo e moradores de condomínios fechados e ruas tranquilas do bairro.
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
                            Unidade equipada com máquinas pantográficas, cilindros de reposição e peças para entrega do serviço pronto no primeiro atendimento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* SERVIÇO 1: ABERTURA RESIDENCIAL & CILINDROS */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-all duration-300 flex flex-col group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp"
                                    alt="Abertura de portas e troca de segredo no Jardim Carvalho"
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
                                        Porta bateu com a chave por dentro ou a chave emperrou? Abertura limpa sem danificar o acabamento, o cilindro ou o batente. Troca imediata de segredos e novos cilindros no local.
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
                                    alt="Chaveiro Automotivo no Bairro Jardim Carvalho"
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
                                        Esqueceu a chave dentro do carro ou perdeu na rua? Nossa viatura faz abertura técnica sem riscar a lataria, confecção de chave canivete e programação de chip transponder na hora.
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
                                    src="/videos/configuracao-senha-fechadura-digital-intelbras.mp4"
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster="/images/bairros/fechadura-digital-externa-instalada.jpeg"
                                >
                                    Seu navegador não suporta a reprodução de vídeo.
                                </video>
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-green-400 text-xs font-mono uppercase border border-green-500/30 pointer-events-none">
                                    ▶ Vídeo: Configuração na Prática
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white">Instalação e Configuração de Fechaduras Digitais</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Veja no vídeo acima a demonstração do nosso técnico ensinando a cadastrar senhas na fechadura digital. Instalação e configuração completa para casas e apartamentos no Jardim Carvalho.
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
                        <h2 className="text-3xl font-bold text-white uppercase">Vantagens de Chamar Quem Está ao Seu Lado</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">⚡</div>
                            <h3 className="text-lg font-bold text-white">Chegada em 5 a 10 Minutos</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Por sermos vizinhos diretos, o tempo de resposta é praticamente instantâneo, ideal para situações de urgência na volta do trabalho ou durante a madrugada.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">🛡️</div>
                            <h3 className="text-lg font-bold text-white">Abertura Técnica Sem Danos</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Trabalhamos com decodificadores pantográficos e michas de precisão, preservando a fechadura e evitando gastos desnecessários com reformas de porta.
                            </p>
                        </div>

                        <div className="bg-black border border-neutral-800 p-6 rounded-sm space-y-3">
                            <div className="text-green-400 text-2xl">💬</div>
                            <h3 className="text-lg font-bold text-white">Preço Claro e Sem Surpresas</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Valor justo informado com transparência no WhatsApp antes do início do deslocamento. Pagamento facilitado em Pix ou cartão no local.
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
                        PRECISA DE CHAVEIRO NO <span className="text-green-400">JARDIM CARVALHO?</span>
                    </h2>
                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                        Estamos logo ao lado! Nossa viatura chega no seu endereço no Jardim Carvalho em 5 a 10 minutos. Chame agora no WhatsApp e tenha atendimento imediato!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_50px_rgba(34,197,94,0.5)] rounded-sm"
                        >
                            Chamar no WhatsApp (5-10 min)
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
