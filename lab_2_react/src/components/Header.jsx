import React from 'react';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="text-left relative pb-4">
      {/* Текстова кнопка перемикання режимів як на макеті image_a689e3.png */}
      <button 
        onClick={toggleTheme}
        type="button" 
        className="absolute top-0 right-0 px-4 py-2 text-xs font-medium rounded-xl border border-gray-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 cursor-pointer focus:outline-none"
      >
        {theme === 'dark' ? 'Денний режим' : 'Нічний режим'}
      </button>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 pr-32">
        Стремінська Ярослава
      </h1>
      
      <p className="text-base sm:text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-5 leading-snug">
        Студентка кафедри Кібербезпеки, Національний університет "Львівська політехніка"
      </p>
      
      <div className="border-t border-b border-gray-200 dark:border-slate-800/80 py-3 mb-6 text-xs sm:text-sm text-gray-500 dark:text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-normal">
        <span>Львів, Україна</span>
        <span className="text-gray-300 dark:text-slate-700">•</span>
        <a href="mailto:iyroslavastremiska@gmail.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          iyroslavastremiska@gmail.com
        </a>
        <span className="text-gray-300 dark:text-slate-700">•</span>
        <a href="https://github.com/iyroslavastremiska-netizen" target="_blank" rel="noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          github.com/iyroslavastremiska-netizen
        </a>
      </div>
    </header>
  );
};

export default Header;