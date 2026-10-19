import { businessInfo } from '@/data/businessInfo'
import Link from 'next/link'

export function Services() {
    return (
        <section className="py-20 bg-neutral-900 border-b border-neutral-800" id="servicos">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-mono text-xs uppercase tracking-widest block mb-2">// PLANTÃO 24 HORAS PORTO ALEGRE</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Nossos Serviços Especializados
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
                        Soluções completas para sua residência, condomínio e veículo. Atendimento qualificado 24 horas com chegada rápida em 15 a 20 minutos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businessInfo.services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/servicos/${service.slug}/`}
                            className="group p-6 rounded-xl border border-neutral-800 bg-black/60 hover:bg-neutral-800/80 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 min-w-[24px] text-green-500 group-hover:text-green-400 group-hover:scale-110 transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold group-hover:text-green-400 transition-colors text-lg mb-2">
                                        {service.name}
                                    </h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Atendimento profissional imediato com unidade móvel equipada e sem danos ao seu patrimônio.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-green-400 uppercase tracking-wider">
                                <span>Ver detalhes do serviço</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
