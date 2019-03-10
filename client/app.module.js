'use strict';

// Define the `dailyTechFilterApp` module
angular.module('dailyTechFilterApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'postDetail',
  'postList',
  'dTech', 
  'modalFormApp',
  'XMLH' 
]);

angular.
  module('dailyTechFilterApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider	 
      .when('/', {
        templateUrl: 'views/layoutHex.html'
      }) 
      .when('/home', {
        template: '<post-list></post-list>'
      })
      .when("/books", {
        templateUrl: "views/book-list.html",
        controller: "BookListCtrl"
      }) 
      .when("/books", {
        templateUrl: "views/book-list.html",
        controller: "BookListCtrl"
      }) 
      .when("/poster", {
        templateUrl: "views/post-list.html",
        controller: "PostListCtrl"
      }) 
      .when('/d-tech', {
        template: '<d-tech></d-tech>'
      })  
      .when('/pi', {
        template: '<div id="pi" style="background-color:blue;min-height:100px;"></div>',
        controller: "PiController"
      }). 
        when('/posts/:postId', {
          template: '<post-detail></post-detail>'
        }).
        otherwise('/');
    }
  ]);
