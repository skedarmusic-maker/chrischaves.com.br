import { businessInfo } from '@/data/businessInfo'
import { DigitalLockBackground } from './DigitalLockBackground'

export function Hero() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20preciso%20de%20um%20chaveiro%20com%20urgência!`;

    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden border-b border-neutral-800">

            {/* Animated Background */}
            <DigitalLockBackground />

            {/* Overlay Gradient for depth - Lightened significantly so animation shows through */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-800 text-green-400 text-sm font-medium mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {businessInfo.hours}
                </div>

                {/* H1 Title - Mandatory Requirement */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl">
                    Chaveiro 24 horas em <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Porto Alegre</span>
                    <span className="block text-2xl md:text-4xl mt-4 text-neutral-400 font-medium">– Chris Chaves</span>
                </h1>

                {/* Description/Address */}
                <p className="text-neutral-400 max-w-2xl mb-2 text-lg">
                    {businessInfo.address}
                </p>

                {/* CTA Section */}
                <div className="mt-10 flex flex-col md:flex-row gap-4 w-full justify-center items-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] w-full md:w-auto min-w-[280px]"
                    >
                        {/* WhatsApp Icon SVG */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chamar no WhatsApp
                    </a>

                    <a
                        href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                        className="flex items-center gap-2 text-white font-semibold hover:text-green-400 transition-colors px-6 py-4"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {businessInfo.phone}
                    </a>
                </div>

            </div>
        </section>
    )
}
