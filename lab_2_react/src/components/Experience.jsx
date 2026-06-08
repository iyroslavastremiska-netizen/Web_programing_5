import React from 'react';

const Experience = () => {
  return (
    <section className="text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-7 bg-emerald-600 dark:bg-emerald-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Projects</h2>
      </div>

      {/* Адаптивний фон для картки проектів */}
      <div className="bg-gray-50/80 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-2xl p-6 transition-colors duration-300">
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase block mb-1">
          2025 — 2026
        </span>
        
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Навчальні та індивідуальні проекти
        </h3>

        <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-300 list-none">
          <li className="leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Мережева архітектура:</strong> Налаштування та конфігурація захищених локальних мереж із використанням віртуалізацій та міжмережевих екранів.
          </li>
          <li className="leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Аналіз безпеки:</strong> Аналіз безпеки веб-ресурсів та дослідження вразливостей за допомогою інструментів Kali Linux.
          </li>
          <li className="leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Криптографія:</strong> Дослідження роботи криптографічних протоколів та алгоритмів розподілу секретів у межах курсових робіт.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;