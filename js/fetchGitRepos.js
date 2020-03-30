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
    var eviesTopSixRepos = {};

    eviesTopSixRepos.items = githubApiData.items.slice(0,6);
    var gitRepos = htmlTemplate(eviesTopSixRepos);
    document.querySelector('.repoContainer').innerHTML = gitRepos;
  });
});