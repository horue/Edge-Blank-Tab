const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith('pt')) {
    document.title = 'Nova guia';
} else if (userLang.startsWith('en')) {
    document.title = 'New tab';
} else {
    document.title = 'New tab';
}