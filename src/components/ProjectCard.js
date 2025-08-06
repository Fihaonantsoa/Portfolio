'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FolderGit2, Code, Globe, Github } from 'lucide-react'

export default function ProjectCard({
  imageSrc,
  title,
  description,
  technologies = [],
  codeUrl,
  demoUrl,
  delay = 0,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8 }}
      className="rounded-2xl shadow-sm text-gray-500 dark:text-white bg-gray-200/70 dark:bg-gray-800 hover:shadow-md hover:scale-[1.02] transition duration-300"
    >

      <Image
        src={imageSrc}
        width={1809}
        height={1106}
        className="w-full rounded-t-xl shadow-sm border-3 border-gray-200 dark:border-gray-700 mb-6"
        alt={`Image du projet ${title}`}
      />

      <div className="flex items-center gap-3 mb-4 mx-6">
        <FolderGit2 className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl text-blue-400 font-bold" style={{fontFamily: 'Arial Rounded MT'}}>{title}</h2>
      </div>

      <p className="text-sm mb-4 leading-relaxed mx-6">{description}</p>

      <div className="flex flex-wrap gap-2 text-sm mb-4 mx-6">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-900/20 backdrop-blur-sm text-xs rounded-full border border-gray-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mx-6 mb-6">
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-blue-600 transition"
          >
            <Code className="w-4 h-4" />
            <span>Code source</span>
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-blue-600 transition"
          >
            <Github className="w-4 h-4" />
            <span>Depot</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}