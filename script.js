    const userLang = navigator.language || navigator.userLanguage;
    const mensagemDiv = document.getElementById('mensagem');

    if (userLang.startsWith('pt')) {
      document.title = 'Nova guia';
    } else if (userLang.startsWith('en')) {
      document.title = 'New tab';
    } else {
      document.title = 'New tab';
    }