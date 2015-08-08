(function(){

  var app = angular.module('IndexPost', []);

  app.controller('contentController',function(){
    this.art = articles;
    this.post = comments;
    this.web = websites;
  });



  // app.directive("articlesData", function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: "helper.html"
  //   };
  // });
  //
  // app.directive("articlesData", function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: "articles.html"
  //   };
  // });
  //
  // app.directive("commentsData", function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: "comments.html"
  //   };
  // });
  //
  // app.directive("websitesData", function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: "websites.html"
  //   };
  // });




})();
