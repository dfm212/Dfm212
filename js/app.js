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




  // var width = 1400;
  // var animationSpeed = 3000;
  // var pause = 3000;
  // var currentSlide = 1;
  //
  // var $slider = $('#slider');
  // var $slideContainer = $slider.find('.slides')
  // var $slides = $slideContainer.find('.slide')
  //
  // setInterval(function() {
  //   $slider.animate({opacity: 0}, animationSpeed, function(){
  //     currentSlide++;
  //     if(currentSlide === $slides.length){
  //       currentSlide = 1;
  //       $slideContainer.css('margin-left', 0);
  //     }
  //   });
  // },pause);
