import React from 'react';

const Footer = ({ systemInfo }) => {
  return (
    <footer className="pt-8 border-t border-gray-200 dark:border-slate-800/80 text-left space-y-4 mt-10">
      {systemInfo && (
        <div className="space-y-1 font-sans text-xs sm:text-sm text-gray-500 dark:text-slate-400">
          <p className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2">
            Системна інформація:
          </p>
          <p><span className="font-semibold">Браузер:</span> {systemInfo.userAgent}</p>
          <p><span className="font-semibold">Платформа:</span> {systemInfo.platform}</p>
        </div>
      )}
      
      <p className="text-xs sm:text-sm text-gray-400 dark:text-slate-500 pt-2 font-mono">
        &copy; 2026 Стремінська Ярослава
      </p>
    </footer>
  );
};

export default Footer;