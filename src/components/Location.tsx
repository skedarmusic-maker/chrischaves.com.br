import { businessInfo } from '@/data/businessInfo'

export function Location() {
    return (
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Atendemos Porto Alegre e Região
                </h2>

                <p className="text-neutral-400 max-w-2xl mx-auto text-lg mb-8">
                    Nossa unidade móvel está preparada para chegar até você com rapidez e segurança em qualquer bairro da capital e região metropolitana.
                </p>

                <div className="inline-block px-6 py-3 border border-neutral-700 rounded-lg bg-neutral-800/50 text-neutral-300">
                    <span className="text-green-500 font-bold mr-2">📍</span>
                    Base: {businessInfo.address}
                </div>
            </div>
        </section>
    )
}
