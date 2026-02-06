import { businessInfo } from '@/data/businessInfo'

export function Footer() {
    return (
        <footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Chris Chaves 24h</h3>
                        <p className="text-neutral-500 mb-6">
                            Sua segurança e tranquilidade em primeiro lugar. Atendimento qualificado dia e noite.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={businessInfo.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-green-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contato</h4>
                        <ul className="space-y-3 text-neutral-500">
                            <li>
                                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-green-500 text-lg">
                                    {businessInfo.phone}
                                </a>
                            </li>
                            <li className="text-sm">
                                {businessInfo.hours}
                            </li>
                            <li className="text-sm">
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.plusCode)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-500"
                                >
                                    {businessInfo.plusCode}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Endereço</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            {businessInfo.address}
                        </p>
                    </div>
                </div>

                <div className="border-t border-neutral-900 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-neutral-600 text-sm">
                    <p>© {new Date().getFullYear()} Chris Chaves 24h. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Desenvolvido com tecnologia IA</p>
                </div>
            </div>
        </footer>
    )
}
