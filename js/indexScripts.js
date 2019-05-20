// languages displayed in Arabic script
var arabicScriptElements = document.querySelectorAll('.arabic');


// translate to Arabic and Persian
function translateArabicAndPersian() {
    element.classList.remove('arabic');

    if(element.innerHTML = 'اللغة العربية') {
        element.innerHTML = 'Arabic';
    }
    else {
        element.innerHTML = 'Persian';
    }


}

// activate the translation on hover
arabicScriptElements.forEach(element => {
    element.addEventListener('mouseover', translateArabicAndPersian);
});

