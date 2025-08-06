const OtherSkillsSection = ({ autresCompetences = [] }) => {
  return (
    <section className="dark:bg-gray-800 bg-blue-700/50 p-6 rounded-2xl mx-2 shadow-md mt-10 sm:w-full md:w-3xl lg:w-4xl border-1 border-gray-300">
      <h3 className="text-lg font-semibold dark:text-white text-gray-500 mb-4 border-l-4 border-blue-500 pl-3 uppercase tracking-wide">
        Autres compétences et outils
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-white">
        {autresCompetences.map((competence, index) => (
          <li
            key={index}
            className="flex items-center gap-2 before:content-['▹'] before:text-blue-500"
          >
            {competence}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OtherSkillsSection;
