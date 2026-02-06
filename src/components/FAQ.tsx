'use client'

import { useState } from 'react'

const questions = [
    {
        question: "Vocês atendem 24 horas todos os dias?",
        answer: "Sim! Somos uma empresa especializada em atendimento emergencial 24 horas, inclusive feriados e finais de semana."
    },
    {
        question: "Atendem em quais bairros de Porto Alegre?",
        answer: "Atendemos Porto Alegre e região. Nossa equipe móvel vai até você onde estiver precisando de assistência."
    },
    {
        question: "Quanto tempo demora para chegar?",
        answer: "Nosso foco é o atendimento emergencial e buscamos chegar o mais rápido possível. O tempo exato depende da sua localização e do trânsito no momento. Entre em contato via WhatsApp para uma estimativa em tempo real."
    },
    {
        question: "Vocês fazem cópia de chave codificada automotiva?",
        answer: "Sim, realizamos cópias e confecções de chaves automotivas nacionais e importadas, incluindo chaves codificadas e presenciais."
    },
    {
        question: "Aceitam quais formas de pagamento?",
        answer: "Trabalhamos com diversas formas de pagamento para sua comodidade. Consulte as opções disponíveis diretamente com nosso técnico ou pelo WhatsApp."
    },
    {
        question: "Como faço para solicitar um orçamento?",
        answer: "É muito simples! Basta clicar no botão de WhatsApp aqui no site ou ligar para (51) 99339-8664 que passaremos todas as informações necessárias."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                    Dúvidas Frequentes
                </h2>

                <div className="space-y-4">
                    {questions.map((q, i) => (
                        <div
                            key={i}
                            className="border border-neutral-800 rounded-lg bg-neutral-900/50 overflow-hidden"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="font-medium text-lg text-white">{q.question}</span>
                                <span className={`text-green-500 transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-neutral-400 leading-relaxed">
                                    {q.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
