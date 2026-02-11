'use client'

import { useState } from 'react'
import Link from 'next/link'
import { businessInfo } from '@/data/businessInfo'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '/', label: 'Início' },
        { href: '/servicos', label: 'Serviços' },
        { href: '/sobre', label: 'Sobre' },
        { href: '/contato', label: 'Contato' },
    ]

    return (
        <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-16 h-16 md:w-[74px] md:h-[74px] transition-transform group-hover:scale-105">
                            <img
                                src="/logo.png"
                                alt="Chris Chaves Chaveiro 24h"
                                className="object-contain w-full h-full filter drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white leading-none group-hover:text-green-400 transition-colors">Chris Chaves</span>
                            <span className="text-xs text-green-500 font-bold tracking-widest uppercase">24 Horas</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-neutral-300 hover:text-green-500 transition-colors uppercase tracking-wide"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a
                            id="btn-whatsapp-nav-desktop"
                            href={`https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}`}
                            className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold py-2 px-6 rounded-full transition-transform hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Emergência
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-green-500 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-black border-b border-neutral-800 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible h-auto py-6' : 'opacity-0 invisible h-0 py-0 overflow-hidden'}`}>
                <div className="flex flex-col items-center gap-6 px-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-bold text-white hover:text-green-500 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        id="btn-whatsapp-nav-mobile"
                        href={`https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}`}
                        className="w-full text-center bg-green-600 active:bg-green-700 text-white font-bold py-4 rounded-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chamar Agora
                    </a>
                </div>
            </div>
        </nav>
    )
}
