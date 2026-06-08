import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Завантаження коментарів для Варіанту 22
    fetch('https://jsonplaceholder.typicode.com/posts/22/comments')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="text-left mt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-7 bg-emerald-600 dark:bg-emerald-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Відгуки роботодавців
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-1">
        {loading ? (
          <p className="text-sm text-gray-400 italic animate-pulse">Завантаження відгуків...</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <div 
              key={comment.id} 
              className="bg-gray-50/70 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-2xl p-5 space-y-2 transition-colors duration-300 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200/60 dark:border-slate-800/60 pb-2 gap-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white tracking-tight capitalize">
                  {comment.name}
                </h4>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-100/40 dark:border-emerald-900/40 shrink-0 w-fit">
                  {comment.email.toLowerCase()}
                </span>
              </div>
              <p className="text-gray-600 dark:text-slate-300 text-sm italic leading-relaxed pt-1">
                "{comment.body}"
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-red-500 font-semibold">Не вдалося завантажити дані відгуків.</p>
        )}
      </div>
    </section>
  );
};

export default Reviews;