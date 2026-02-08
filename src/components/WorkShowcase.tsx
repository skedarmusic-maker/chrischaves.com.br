'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const works = [
    {
        src: "/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter.webp",
        title: "Abertura Técnica",
        category: "Emergencial"
    },
    {
        src: "/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_2.webp",
        title: "Cópia Automotiva",
        category: "Veículos"
    },
    {
        src: "/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_3.webp",
        title: "Instalação de Fechadura",
        category: "Residencial"
    },
    {
        src: "/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_4.webp",
        title: "Manutenção de Cofre",
        category: "Segurança"
    },
    {
        src: "/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_5.webp",
        title: "Chave Codificada",
        category: "Tecnologia"
    },
    {
        src: "/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_6.webp",
        title: "Atendimento 24h",
        category: "Plantão"
    },
    {
        src: "/images/galery/Chris_Chaves_Chaveiro_24_horas_Counter_Porto_Alegre_chaveiro_emergencial_Counter_7.webp",
        title: "Troca de Segredo",
        category: "Prevenção"
    }
]

export function WorkShowcase() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/30 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block"
                        >
                            <span className="text-green-500 font-mono text-sm tracking-widest uppercase mb-2 block">
                                // PORTFÓLIO
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Serviços Realizados <span className="text-neutral-600">.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md"
                    >
                        <p className="text-neutral-400 text-sm md:text-base border-l-2 border-green-500/30 pl-4">
                            Excelência técnica e precisão em cada atendimento. Confira alguns registros das nossas operações recentes em Porto Alegre.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900 
                                ${index === 0 ? 'md:col-span-2 md:row-span-1' : ''}
                                ${index === 3 ? 'md:col-span-2 md:row-span-1' : ''}
                            `}
                        >
                            <Image
                                src={work.src}
                                alt={work.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                            />

                            {/* Cyber Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />

                            {/* Scanning Line Animation */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <span className="w-8 h-[1px] bg-green-500" />
                                    <span className="text-green-400 text-xs font-mono uppercase tracking-wider">
                                        {work.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-green-50 transition-colors">
                                    {work.title}
                                </h3>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-green-500/30 group-hover:border-green-500 transition-colors" />
                            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-green-500/30 group-hover:border-green-500 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
