import { businessInfo } from '@/data/businessInfo'

export function Services() {
    return (
        <section className="py-20 bg-neutral-900" id="servicos">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Nossos Serviços
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Soluções completas para sua residência e veículo. Atendimento qualificado 24 horas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {businessInfo.services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-xl border border-neutral-800 bg-black/50 hover:bg-neutral-800/50 hover:border-green-500/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px] text-green-500 group-hover:text-green-400 transition-colors">
                                    {/* Key Icon */}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-200 font-medium group-hover:text-white transition-colors">
                                    {service}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
