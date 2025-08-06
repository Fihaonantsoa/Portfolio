'use client';
import FavoriteSiteCard from './FavoriteSiteCard';
import {
  Github,
  Code2,
  Youtube,
} from 'lucide-react';

const favoriteSites = [
  { name: 'HackerRank', url: 'https://www.hackerrank.com/', Icon: Code2 },
  { name: 'GitHub', url: 'https://github.com/', Icon: Github },
  { name: 'YouTube Dev', url: 'https://www.youtube.com/', Icon: Youtube },
];

const FavoriteSitesSection = () => {
  return (
    <section className="mx-2">
      <h3 className="text-lg font-semibold w-full lg:w-5xl sm:w-2xl md:w-3xl text-gray-500 dark:text-white mb-4 border-l-4 border-indigo-500 pl-3 uppercase tracking-wide">
        Plateformes & Sites frequentés
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
        {favoriteSites.map((site, index) => (
          <FavoriteSiteCard
            key={index}
            name={site.name}
            url={site.url}
            Icon={site.Icon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default FavoriteSitesSection;