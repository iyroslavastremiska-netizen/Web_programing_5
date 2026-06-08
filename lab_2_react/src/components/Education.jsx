import React from 'react';

const Education = () => {
  return (
    <section className="text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-7 bg-emerald-600 dark:bg-emerald-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Education</h2>
      </div>

      {/* Змінено bg- з фіксованого сірого на адаптивний */}
      <div className="bg-gray-50/80 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-2xl p-6 transition-colors duration-300">
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase block mb-1">
          2023 — теперішній час
        </span>
        
        {/* Контрастні кольори для заголовків */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Кібербезпека та захист інформації
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">
          Національний університет "Львівська політехніка"
        </p>

        {/* Світлі маркери та контрастний текст списку */}
        <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300 list-disc list-inside marker:text-emerald-500">
          <li>Безпека операційних систем</li>
          <li>Архітектура комп'ютерних мереж</li>
          <li>Криптографія та стеганографія</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;