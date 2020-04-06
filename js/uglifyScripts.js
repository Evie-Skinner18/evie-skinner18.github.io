
// grab the elements you want to manipulate
var pageBody = document.querySelector('.portfolio-body');
var mainSection = document.querySelector('.portfolio-main');
var containers = document.querySelectorAll('.container');
var jumbotrons = document.querySelectorAll('.jumbotron');
var thumbnails = document.querySelectorAll('.thumbnail');
var repoContainers = document.querySelectorAll('.repoContainer');

// buttons
var uglifyButton = document.getElementById('ugly-button');
var beautifyButton = document.getElementById('beautify-button');

// function to remove the nice classes and apply the ugly classes on click
function uglify() {
    pageBody.classList.remove('portfolio-body');
    mainSection.classList.remove('portfolio-main');

    containers.forEach(container => {
        container.classList.remove('container');
    });

    jumbotrons.forEach(jumbotron => {
        jumbotron.classList.remove('jumbotron')
        jumbotron.classList.remove('description');
    });

    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('thumbnail');
        thumbnail.classList.remove('description');
    });

    repoContainers.forEach(repoContainer => {
        repoContainer.classList.remove('repoContainer')
        repoContainer.classList.add('ugly-repo');
    });

    pageBody.classList.add('ugly');   
}

// restore to normal
function beautify() {
    pageBody.classList.remove('ugly');
    pageBody.classList.add('portfolio-body');
    mainSection.classList.add('portfolio-main');

    containers.forEach(container => {
        container.classList.add('container');
    });

    jumbotrons.forEach(jumbotron => {
        jumbotron.classList.add('jumbotron')
        jumbotron.classList.add('description');
    });

    thumbnails.forEach(thumbnail => {
        thumbnail.classList.add('thumbnail');
        thumbnail.classList.add('description');
    });

    repoContainers.forEach(repoContainer => {
        repoContainer.classList.remove('ugly-repo');
        repoContainer.classList.add('repoContainer');
    });
}

// activate the buttons onclick
uglifyButton.onclick = uglify;
beautifyButton.onclick = beautify;