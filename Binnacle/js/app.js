(function(){

  var app = angular.module('BinnaclePost', []);

  app.controller('PostController',function(){
    this.post = comments;
  });


  var comments =
    [
      {
        "comment": "Today I had the idea and decision to start a binnacle for track my progress as young developer. This is useful for make an evaluation of my performance. Detect my weaknesses and follow my daily progress. With this resource, I will be able to trace the way to follow and correct the course if I need it.",
        "createdOn": "Oct-05-2015"
      },
      {
        "comment": "I spend the day working on my blog/portfolio; I uploaded the first piece of content (articles and binnacle), plus the first web for the project 'one website per day”.I didn't get enough time to start to practice Angular.",
        "createdOn": "Oct-04-2015"
      },
      {
        "comment": "I have dedicated this morning working on my blog/portfolio and the all afternoon I started to practice Angular.",
        "createdOn": "Oct-03-2015"
      },
    ];
    
})();
