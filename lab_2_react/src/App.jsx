import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    const clientInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform || 'Невідомо',
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      cookiesEnabled: navigator.cookieEnabled ? "Так" : "Ні",
      savedAt: new Date().toLocaleString('uk-UA')
    };
    localStorage.setItem('userSystemInfo', JSON.stringify(clientInfo));
    setSystemInfo(clientInfo);
  }, []);

  return (
    // Головний контейнер на весь екран
    <div className="min-h-screen bg-gray-100/60 dark:bg-slate-950 py-12 px-4 font-sans antialiased text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* Центральний блок резюме */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-sm dark:shadow-slate-950/40 border border-gray-100/80 dark:border-slate-800/60 p-6 sm:p-12 space-y-8 transition-colors duration-300">
        
        <Header />
        
        <main className="space-y-8">
          {/* Секція Про себе */}
          <section className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-7 bg-emerald-600 dark:bg-emerald-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Про себе</h2>
            </div>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm sm:text-[15px]">
              Вмотивована студентка спеціальності "Кібербезпека", яка активно цікавиться мережевою безпекою, захистом інформації та тестуванням на проникнення. Прагну розвивати практичні навички в області аналізу вразливостей та побудови захищених систем. Швидко навчаюся та готова до вирішення складних технічних завдань.
            </p>
          </section>

          <Education />
          <Skills />
          <Experience />
          <Reviews />
        </main>

        <Footer systemInfo={systemInfo} />
      </div>
    </div>
  );
}

export default App;