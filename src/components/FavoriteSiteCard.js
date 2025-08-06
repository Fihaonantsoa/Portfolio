'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FavoriteSiteCard = ({ name, url, Icon, delay = 0 }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-blue-700/50 dark:bg-gray-800 text-gray-700 dark:text-white p-4 rounded-xl shadow border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
      viewport={{ once: true }}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium flex-1">{name}</span>
      <ExternalLink className="w-4 h-4" />
    </motion.a>
  );
};

export default FavoriteSiteCard;