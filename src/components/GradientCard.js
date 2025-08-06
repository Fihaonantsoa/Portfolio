'use client';
import { motion } from 'framer-motion';

export default function GradientCard({ fromColor, viaColor, toColor, children }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg p-10">
      {/* Dégradé personnalisé */}
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-br ${fromColor} ${viaColor} ${toColor}`}
      />

      {/* Effet d’éclat animé */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-2xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Contenu (slot) */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
