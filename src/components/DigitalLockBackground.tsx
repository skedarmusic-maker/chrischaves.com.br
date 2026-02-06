
'use client'

import { useEffect, useState } from 'react'

export function DigitalLockBackground() {
    const [activeKeys, setActiveKeys] = useState<number[]>([])

    // Grid layout for a standard keypad
    const keypad = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['*', '0', '#']
    ]

    // Create multiple keypads to fill the background
    // We'll arrange them in a floating grid
    const cols = 6 // How many keypads across
    const rows = 4 // How many keypads down

    useEffect(() => {
        // Randomly "press" keys
        const interval = setInterval(() => {
            // Pick a random keypad index
            const randomKeypad = Math.floor(Math.random() * (cols * rows))
            // Pick a random key index (0-11)
            const randomKey = Math.floor(Math.random() * 12)

            // Create a unique ID for this specific key instance
            const keyId = (randomKeypad * 100) + randomKey

            setActiveKeys(prev => [...prev, keyId])

            // Remove the "press" state after animation
            setTimeout(() => {
                setActiveKeys(prev => prev.filter(k => k !== keyId))
            }, 600) // Duration of the flash

        }, 200) // Frequency of key presses

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

            {/* Grid Container - Removed Opacity Check */}
            <div className="absolute inset-0 flex flex-wrap justify-center content-center gap-12 p-4 transform -rotate-12 scale-125 origin-center">
                {Array.from({ length: cols * rows }).map((_, keypadIndex) => (
                    <div key={keypadIndex} className="grid grid-cols-3 gap-3 w-fit">
                        {keypad.flat().map((keyChar, keyIndex) => {
                            const keyId = (keypadIndex * 100) + keyIndex
                            const isActive = activeKeys.includes(keyId)

                            return (
                                <div
                                    key={keyIndex}
                                    className={`
                                        w-12 h-12 flex items-center justify-center 
                                        rounded-lg border-2
                                        text-2xl font-mono font-bold
                                        transition-all duration-100
                                        will-change-[transform,opacity,filter]
                                        ${isActive
                                            ? 'text-green-400 border-green-400 bg-green-900/80 scale-110 shadow-[0_0_50px_rgba(74,222,128,1)] z-50'
                                            : 'text-neutral-800 border-neutral-900 bg-neutral-900/20'
                                        }
                                    `}
                                >
                                    {isActive ? keyChar : <span className="w-1 h-1 bg-neutral-800 rounded-full" />}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}
