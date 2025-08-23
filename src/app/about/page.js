'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import LogoF from '@/components/LogoF'
import { FileUser, Shapes, ShareIcon, User } from 'lucide-react'
import AboutMe from '@/components/AboutMe'
export const runtime = 'edge'
import SkillBar from '@/components/SkillBar'
import SectionSeparator from '@/components/SectionSeparator'
import OtherSkillsSection from '@/components/OtherSkill'
import FavoriteSitesSection from '@/components/FavoriteSitesSection'
import AboutTerminalCycling from '@/components/AboutTerminaleCycling'
import PortfolioIntroAnimation from '@/components/Animation'


export default function AboutPage() {
  const autres = [
    'Vue Js',
    'Bootstrap',
    'Git & GitHub',
    'MySQL / PostgreSQL',
    'Linux (Terminal)',
    'Adobe Photoshop / Canva',
    'Microsoft Word',
    'Microsoft Exel',
    'Microsoft PowerPoint',
  ];
  return (
    <main className="flex min-h-screen flex-col items-center pt-10 dark:bg-gray-700 bg-white">
      <div className="mx-auto w-full h-auto p-2 lg:px-9">
        <div className="shadow-md border-y-1 border-blue-400 m-4 p-5 lg:mx-20 rounded-lg bg-blue-700/20 dark:bg-gray-800/50">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className='flex items-center justify-center m-5'
            style={{ textShadow: '0 0 5px white', fontFamily: 'Arial Rounded MT' }}
          > 
            <LogoF size={60} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className='text-center text-white font-bold text-2xl sm:text-3xl md:text-5xl my-5'
            style={{ textShadow: '0 0 5px gray', fontFamily: 'Arial Rounded MT' }}
          > 
            RAFANOMANANA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className='text-center text-white md:text-xl font-bold'
            style={{ textShadow: '0 0 5px gray', fontFamily: 'Arial Rounded MT' }}
          > 
            Ainamirindra Fihaonantsoa
          </motion.h1>
        </div>
      </div>
      <SectionSeparator label="Description" />
      <div className="grid text-left lg:max-w-7xl mb-5 md:min-h-40 grid-cols-1 lg:w-full lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="group rounded-lg border border-transparent flex justify-center items-center transition-colors"
        > 
          <Image src="/images/me.png" width={160} height={160} alt="Moi" className="rounded-full shadow transform-transition hover:scale-130 cursor-pointer duration-500 hover:translate-y-[-100] border-gray-500 border-2 bg-gray-400" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="md:col-span-2 text-md text-white p-4 bg-blue-700/30 dark:bg-gray-600 font-light text-center lg:text-start rounded-lg"
          style={{ fontFamily: 'Time new Roman' }}
        > 
          <AboutMe />
        </motion.div>
      </div>
      <SectionSeparator label='Parcours professionnel'/>
      <div className="grid text-left lg:max-w-7xl md:min-h-40 lg:w-full lg:grid-cols-3 px-3 gap-4 lg:text-left mb-15">
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="group rounded-lg border border-transparent bg-blue-300 px-5 dark:hover:bg-gray-800/20 py-4 transition-colors border-white border-1  text-gray-500 dark:text-white dark:bg-gray-800 hover:bg-blue-400"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            2025{' '}
            <span className="inline-block transition-transform rotate-270 group-hover:rotate-90 motion-reduce:transform-none">
              <ShareIcon size={16} />
            </span>
          </h2>
          <ul className={`m-0 text-sm px-5`}>
            <li>Deuxième années de Licence Professionnel en informatique</li>
            <br />
            <li><i>ENI</i> - Fianarantsoa</li>
          </ul>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="group rounded-lg border border-transparent bg-blue-300 px-5 dark:hover:bg-gray-800/20 py-4 transition-colors border-white border-1  text-gray-500 dark:text-white dark:bg-gray-800 hover:bg-blue-400"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            2024{' '}
            <span className="inline-block transition-transform rotate-270 group-hover:rotate-90 motion-reduce:transform-none">
              <ShareIcon size={16} />
            </span>
          </h2>
          <ul className={`m-0 text-sm px-5`}>
            <li>Première années de Licence Professionnel en informatique</li>
            <br />
            <li><i>ENI</i> - Fianarantsoa</li>
          </ul>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="group rounded-lg border border-transparent bg-blue-300 px-5 dark:hover:bg-gray-800/20 py-4 transition-colors border-white border-1  text-gray-500 dark:text-white dark:bg-gray-800 hover:bg-blue-400"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            2023{' '}
            <span className="inline-block transition-transform rotate-270 group-hover:rotate-90 motion-reduce:transform-none">
              <ShareIcon size={16} />
            </span>
          </h2>
          <ul className={`m-0 text-sm px-5`}>
            <li>Titulaire d un diplôme de Baccalaureat serie S <sub>Assez-Bien</sub></li>
            <br />
            <li>Lycée <i>Nanisana</i> - Antananarivo</li>
          </ul>
        </motion.a>
      </div>
      <SectionSeparator label='Competences'/>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-20 px-5 lg:px-20 shadow-md p-4 gap-12"
      > 
        <SkillBar nom="Tailwindcss" pourcentage={90} />
        <SkillBar nom="PHP" pourcentage={80} />
        <SkillBar nom="Next.js" pourcentage={70} />
        <SkillBar nom="Python" pourcentage={80} />
        <SkillBar nom="Java" pourcentage={75} />
      </motion.div>
            <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      > 
        <OtherSkillsSection autresCompetences={autres} />
      </motion.div>
      <SectionSeparator label='Ressources'/>
      <FavoriteSitesSection />
      <div className="mt-10 w-full">
        <PortfolioIntroAnimation />
      </div>
      <SectionSeparator label='................'/>
    </main>
  )
}
