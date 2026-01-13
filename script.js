// App Data - Real Data from missingapps
const apps = [
    {
        id: 1,
        title: "Flight Awards - Points & Miles",
        description: "Find flight award availability easily. Track points and miles to book your dream trip for less.",
        icon: "https://play-lh.googleusercontent.com/TlzVFT2rRXzYFANmi71WlaCHq1Jg4OdQnh8a5AprBjJ7AcTsSMOLRIe2AAuAcAnhHDn5dRga9J_x_ep2jZ6-Mg=w480-h960-rw",
        appStoreLink: "https://apps.apple.com/us/app/flight-awards-points-miles/id6754783959",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.missingapps.flightawards"
    },
    {
        id: 4,
        title: "FocusNow: App Blocker & Focus",
        description: "Find flight award availability easily. Track points and miles to book your dream trip for less.",
        icon: "https://play-lh.googleusercontent.com/IMtEh_k9mDPxLmUGK2Y9x2XC8vMzvJj3x-FmG-sp1XB0nIgWXdTNx0BQ5U7MGTBNXUSBUylTmmz8Gv5RYLqeEg=w480-h960-rw",
        appStoreLink: "https://apps.apple.com/us/app/flight-awards-points-miles/id6754783959",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.missingapps.focusapp"
    },
    {
        id: 2,
        title: "Sugarless - Quit Sugar Habit",
        description: "Overcome sugar addiction with AI-powered tracking, personalized plans, and progress monitoring.",
        icon: "https://play-lh.googleusercontent.com/uuRyzyvbmh-1oeIpsCpkyYamLf7V4vP35COOyk8zrWigdRZigsSejqyQ63HirEmfdQ=w480-h960-rw",
        appStoreLink: "https://apps.apple.com/us/app/sugarless-quit-sugar/id6752667417",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.missingapps.quitsugar"
    },
    {
        id: 3,
        title: "Quit Drinking - Quit Alcohol",
        description: "Achieve sobriety with a soft quitting mode, AI coach consultation, and comprehensive health tracking.",
        icon: "https://play-lh.googleusercontent.com/ADnpkCzh1xu1eF-3sAliIs7L9eYpCFxBZ-GwuPm2_SG3AO7tdLMzau8vbPjK_AKaj4-IKRv2CQ0gcaryVfQUFg=w480-h960-rw",
        appStoreLink: "#", // Add App Store Link if available
        playStoreLink: "https://play.google.com/store/apps/details?id=com.missingapps.quitdrinking"
    },
    {
        id: 4,
        title: "Save Money - Savings Tracker",
        description: "Track your savings goals with customizable boxes, progress visualization, and financial insights.",
        icon: "https://play-lh.googleusercontent.com/6q6JyHy4OffalL7igpqKn6HCG1SlhCMsAXg3Rx7tsN5p29mQiq_BBA_E8Vj5oKTGiEMU82TeYn7tra5Amzy5jw=w480-h960-rw",
        appStoreLink: "#", // Add App Store Link if available
        playStoreLink: "https://play.google.com/store/apps/details?id=com.missingapps.savemoney"
    }
];

// Icons (Simple SVG paths)
const icons = {
    apple: '<svg class="store-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-1.2 2.34.02 3.2.55 3.94 1.18-.73.68-1.55 2.12-1.31 3.58.24 1.48 1.49 2.58 3.32 2.87-1.12 3.06-2.9 4.88-4.94 5.8zm-2.85-17.3c1.94-.48 2.65 2.57 1 3.26-2.07.86-3.32-2.22-1-3.26z"/></svg>',
    google: '<svg class="store-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.6,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5M19,12L14.6,7.6L16.26,5.94L19,12M19,12L16.26,18.06L14.6,16.4L19,12M5.14,21.15L13.6,12.69L14.93,14.02L5.14,21.15M5.14,2.85L14.93,9.98L13.6,11.31L5.14,2.85Z"/></svg>'
};

// Render Apps
function renderApps() {
    const grid = document.getElementById('app-grid');
    const fragment = document.createDocumentFragment();

    apps.forEach(app => {
        const card = document.createElement('article');
        card.className = 'app-card';

        // Handle missing links gracefully
        const appStoreBtn = app.appStoreLink !== '#'
            ? `<a href="${app.appStoreLink}" target="_blank" rel="noopener noreferrer" class="store-btn">
                 ${icons.apple} App Store
               </a>`
            : `<span class="store-btn disabled" style="opacity: 0.5; cursor: default;">
                 ${icons.apple} Coming Soon
               </span>`;

        const playStoreBtn = app.playStoreLink !== '#'
            ? `<a href="${app.playStoreLink}" target="_blank" rel="noopener noreferrer" class="store-btn">
                 ${icons.google} Play Store
               </a>`
            : `<span class="store-btn disabled" style="opacity: 0.5; cursor: default;">
                 ${icons.google} Coming Soon
               </span>`;

        card.innerHTML = `
            <div class="app-icon-wrapper">
                <img src="${app.icon}" alt="${app.title} Icon" class="app-icon" loading="lazy">
            </div>
            <h3 class="app-title">${app.title}</h3>
            <p class="app-description">${app.description}</p>
            <div class="store-buttons">
                ${appStoreBtn}
                ${playStoreBtn}
            </div>
        `;
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize
document.addEventListener('DOMContentLoaded', renderApps);
