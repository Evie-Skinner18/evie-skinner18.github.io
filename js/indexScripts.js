// languages displayed in Arabic script
var arabicScriptElements = document.querySelectorAll('.arabic');


// translate to Arabic and Persian
function translateArabicAndPersian() {
    arabicScriptElements.forEach(element => {
        element.classList.remove('arabic');
    });

    arabicScriptElements[0].innerHTML = 'Arabic';
    arabicScriptElements[1].innerHTML = 'Persian';
}

// activate the translation on hover
arabicScriptElements[0].addEventListener('mouseover', translateArabicAndPersian);