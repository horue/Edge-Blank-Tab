const userLang = navigator.language || navigator.userLanguage;
const mensagemDiv = document.getElementById('mensagem');

if (userLang.startsWith('pt')) {
    document.title = 'Nova guia';
} else if (userLang.startsWith('en')) {
    document.title = 'New tab';
} else {
    document.title = 'New tab';
}

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
    document.body.style.backgroundColor = '#242424'; 
} else {
    document.body.style.backgroundColor = '#ffffff'; 
}