
'use client'

import Script from 'next/script'

export function Testimonials() {
    return (
        <section className="py-20 bg-black border-t border-neutral-800" id="avaliacoes">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
                        Confira as avaliações reais de quem já utilizou nossos serviços em Porto Alegre.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto min-h-[400px]">
                    {/* Elfsight Widget */}
                    <div className="elfsight-app-8f63a9b2-1720-46cf-a03a-6fd1d8171776" data-elfsight-app-lazy></div>

                    {/* Load Script Optimally */}
                    <Script
                        src="https://elfsightcdn.com/platform.js"
                        strategy="lazyOnload"
                    />
                </div>
            </div>
        </section>
    )
}
