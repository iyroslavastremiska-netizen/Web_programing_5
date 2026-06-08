import React from 'react';

const Skills = () => {
  // Список ваших технологій та навичок
  const skillsList = [
    "Network Security",
    "ACL / DMZ",
    "TCP/IP",
    "Linux / Kali Linux",
    "VirtualBox",
    "Git",
    "Python",
    "HTML5 & CSS3",
    "Cryptography"
  ];

  return (
    <section className="text-left">
      {/* Заголовок секції */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-7 bg-emerald-600 dark:bg-emerald-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Skills
        </h2>
      </div>

      {/* Контейнер для бейджів з адаптивними відступами */}
      <div className="flex flex-wrap gap-2.5">
        {skillsList.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 border
              /* Стилі для світлої теми */
              bg-emerald-50/60 text-emerald-700 border-emerald-100/80 hover:bg-emerald-100/50
              /* Стилі для темної теми (адаптовані під макет) */
              dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40 dark:hover:bg-emerald-950/60"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;