"use strict";

// fetch handlebars template and .compile it
// fetch API data and .json it
fetch('https://api.github.com/search/repositories?q=user:Evie-Skinner18').then(function (jsonData) {
  return jsonData.json();
}).then(function (githubApiData) {
  fetch('template.hbs').then(function (handlebarsTemplateData) {
    return handlebarsTemplateData.text();
  }).then(function (repoTemplate) {
    var htmlTemplate = Handlebars.compile(repoTemplate);
    var gitRepos = htmlTemplate(githubApiData);
    document.querySelector('.repoContainer').innerHTML = gitRepos;
  });
});

// let gitHubData = fetch('https://api.github.com/search/repositories?q=user:Evie-Skinner18')
// .then(function (jsonData) {
//     return jsonData.json()
// });

// console.log(gitHubData);