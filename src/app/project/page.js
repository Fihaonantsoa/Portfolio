'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import SectionSeparator from '@/components/SectionSeparator'

const allProjects = [
  {
    imageSrc: '/images/java.png',
    title: 'Projet Java Desktop',
    description: "Projet Desktop de gestion d'emploi du temps avec Java Swing et PostgreSQL",
    technologies: ['Java', 'Eclipse IDE', 'PostgreSQL'],
    codeUrl: 'https://github.com/Fihaonantsoa/Empoi-du-temps',
    demoUrl: '',
    delay: 0.5,
  },
  {
    imageSrc: '/images/php.png',
    title: 'Projet PHP MVC',
    description: 'Application web de paiement d\'eau et éléctricité avec PHP et MySQL.',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    codeUrl: 'https://github.com/Fihaonantsoa/Gestion-de-Paiement',
    demoUrl: '',
    delay: 0.7,
  },
  {
    imageSrc: '/images/vuejs.png',
    title: 'Projet Vue Js',
    description: 'Application web de location automobile avec Vue Js et MySQL.', 
    technologies: ['Vue JS', 'MySQL', 'Tailwind CSS'],
    codeUrl: 'https://github.com/Fihaonantsoa/Location-automobile',
    demoUrl: '',
    delay: 0.9,
  },
]

const uniqueTechnologies = [
  'Tous',
  ...Array.from(
    new Set(allProjects.flatMap((project) => project.technologies))
  ),
]

export default function ProjectList() {
  const [filter, setFilter] = useState('Tous')

  const filteredProjects =
    filter === 'Tous'
      ? allProjects
      : allProjects.filter((proj) => proj.technologies.includes(filter))

  return (
    <div className="px-5 lg:px-20 py-10 bg-white dark:bg-gray-800">
      <SectionSeparator label='Projet récents'/>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }} className="flex flex-wrap gap-3 mb-6 justify-center"
      >
        {uniqueTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-1 rounded-full border border-gray-400 text-sm transition ${
              filter === tech
                ? 'bg-blue-600 dark:bg-blue-700 dark:text-white text-gray-400 hover-text-white'
                : 'bg-blue-200 dark:bg-blue-400 dark:text-white text-gray-400 hover:text-white hover:bg-blue-400 dark:hover:bg-blue-600 cursor-pointer'
            }`}
          >
            {tech}
          </button>
        ))}
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </section>
    </div>
  )
}
