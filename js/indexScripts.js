// languages displayed in Arabic script
var arabicScriptElements = document.querySelectorAll('.arabic');

function translateArabic() {
    arabicScriptElements[0].classList.remove('arabic');
    arabicScriptElements[0].innerHTML = 'Arabic';
}

function restoreArabicToArabicScript()
{
    arabicScriptElements[0].classList.add('arabic');
    arabicScriptElements[0].innerHTML = 'اللغة العربية';
}

function translatePersian() {
    arabicScriptElements[1].classList.remove('arabic');
    arabicScriptElements[1].innerHTML = 'Persian';
}

function restorePersianToArabicScript()
{
    arabicScriptElements[1].classList.add('arabic');
    arabicScriptElements[1].innerHTML = 'فارسی';
}


arabicScriptElements[0].addEventListener('mouseover', translateArabic);
arabicScriptElements[0].addEventListener('mouseout', restoreArabicToArabicScript);
arabicScriptElements[1].addEventListener('mouseover', translatePersian);
arabicScriptElements[1].addEventListener('mouseout', restorePersianToArabicScript);



