document.addEventListener('DOMContentLoaded', () => {
    handleSystemInfo();
    loadEmployerReviews();
    initContactModal();
    initThemeManager();
});

function handleSystemInfo() {
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
    const storedData = localStorage.getItem('userSystemInfo');

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        const contentContainer = document.getElementById('system-info-content');
        const infoBox = document.getElementById('system-info-box');
        
        const labels = {
            userAgent: "Браузер", platform: "Платформа ОС", language: "Мова системи",
            screenResolution: "Екран", windowSize: "Розмір вікна",
            cookiesEnabled: "Cookie увімкнено", savedAt: "Збережено"
        };
        
        let htmlContent = '';
        for (const [key, value] of Object.entries(parsedData)) {
            if (labels[key]) {
                htmlContent += `
                    <div style="display: flex; justify-content: space-between; border-b: 1px dashed rgba(156, 163, 175, 0.3); padding: 4px 0;">
                        <span style="font-weight: 600; opacity: 0.8;">${labels[key]}:</span>
                        <span style="text-align: right; word-break: break-all; padding-left: 8px;">${value}</span>
                    </div>
                `;
            }
        }
        if (contentContainer) contentContainer.innerHTML = htmlContent;
        if (infoBox) infoBox.classList.remove('hidden');
    }
}

// Завантаження відгуків — Варіант 22
async function loadEmployerReviews() {
    const container = document.getElementById('comments-container');
    if (!container) return;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/22/comments');
        if (!response.ok) throw new Error(`Помилка HTTP: ${response.status}`);
        const comments = await response.json();
        container.innerHTML = '';
        
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = "review-card";
            commentElement.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; border-b: 1px solid rgba(156, 163, 175, 0.2); padding-bottom: 5px; margin-bottom: 5px;">
                    <h4 style="margin: 0; text-transform: capitalize; font-size: 14px; font-weight: 600;">${comment.name}</h4>
                    <span style="font-family: monospace; font-size: 11px; color: var(--accent-color);">${comment.email.toLowerCase()}</span>
                </div>
                <p style="margin: 5px 0 0; font-style: italic; font-size: 13px; opacity: 0.9;">"${comment.body}"</p>
            `;
            container.appendChild(commentElement);
        });
    } catch (error) {
        container.innerHTML = `
            <p style="color: #ef4444; font-size: 13px; font-style: italic;">
                Не вдалося завантажити дані з сервера (локальні файли блокуються браузером через CORS).
            </p>
        `;
    }
}

function initContactModal() {
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeModal');

    setTimeout(() => {
        if (modal) modal.style.display = 'flex';
    }, 60); // 1 хвилина

    if (closeBtn) {
        closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
    window.onclick = (e) => { 
        if (e.target === modal) { modal.style.display = 'none'; }
    };
}

function initThemeManager() {
    const body = document.body; // Працюємо безпосередньо з тегом <body>
    const themeToggleBtn = document.getElementById('theme-toggle');
    const toggleText = document.getElementById('theme-toggle-text');

    if (!themeToggleBtn) return;

    function updateButtonText(isDark) {
        if (toggleText) {
            toggleText.innerText = isDark ? "Денний режим" : "Нічний режим";
        }
    }

    function getThemeByTime() {
        const currentHour = new Date().getHours();
        return (currentHour >= 7 && currentHour < 21) ? 'light' : 'dark';
    }

    const savedTheme = localStorage.getItem('user-theme');
    const activeTheme = savedTheme !== null ? savedTheme : getThemeByTime();

    // Початкова установка теми при старті
    if (activeTheme === 'dark') {
        body.classList.add('dark-theme');
        updateButtonText(true);
    } else {
        body.classList.remove('dark-theme');
        updateButtonText(false);
    }

    // Обробка ручного перемикання по кліку
    themeToggleBtn.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-theme');
        
        if (isCurrentlyDark) {
            body.classList.remove('dark-theme');
            localStorage.setItem('user-theme', 'light');
            updateButtonText(false);
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('user-theme', 'dark');
            updateButtonText(true);
        }
    });
}