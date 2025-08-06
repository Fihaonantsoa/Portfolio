import { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react' 
import { motion } from 'framer-motion'

const infos = [ 
    'Passionné par le web', 
    'Rigoureux et curieux', 
    'Apprentissage rapide', 
    'aime la programmation', 
    'aime l’algorithmique'
]

const fakeCommands = [ 
    '> whoami', ' Rafanomanana Ainamirindra Fihaonantsoa', 
    '> passion --list', 
    `[${infos.map((i) => `'${i}'`).join(', ')}]`, 
    '> status', 
    '  En pleine évolution',
    '> codename',
    'fihaonantsoacgm',
    '> Git user',
    'Fihaonantsoa'
]

export default function PortfolioIntroAnimation() { 
    const [index, setIndex] = useState(0) 
    const [displayedLines, setDisplayedLines] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < fakeCommands.length) { 
                setDisplayedLines((lines) => [...lines, fakeCommands[index]]) 
                setIndex((i) => i + 1) } else { setTimeout(() => {
                        setDisplayedLines([]) 
                        setIndex(0) 
                }, 4000) 
            }
        }, 1500) 
    return () => clearInterval(interval) }, [index])

    return ( 
        <div className="w-full text-green-400 font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <StarsBackground /> 
            <div className="z-10 w-full max-w-4xl p-6 rounded-xl border border-green-500 shadow-xl"> 
                <div className="flex items-center gap-2 text-lg mb-4"> 
                    <Terminal className="text-green-400 animate-pulse" size={24} /> <span>~/portfolio/intro</span> 
                </div> 
                <div className="space-y-1 text-sm sm:text-base"> 
                    { displayedLines.map((line, i) => ( <TypewriterLine key={i} text={line} /> ))} 
                </div> 
            </div> 
        </div> 
    ) 
}

function TypewriterLine({ text }) { 
    const [displayed, setDisplayed] = useState('') 
    useEffect(() => {
        let i = 0 
        const interval = setInterval(() => { 
            setDisplayed(text.slice(0, i)) 
            i++ 
            if (i > text.length) clearInterval(interval) 
        }, 30) 
        return () => clearInterval(interval) }, [text]
    )
    return <div>{displayed}</div> 
}

function StarsBackground() { 
    return ( 
        <div className="absolute flex justify-center itms-center py-5 inset-0 z-0 overflow-hidden"> 
            <div className="w-full h-full max-w-4xl p-6 rounded-xl animate-pulse opacity-20 bg-[radial-gradient(#0f0_1px,transparent_1px)] [background-size:20px_20px]" /> 
        </div> ) 
}
