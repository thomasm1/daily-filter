'use strict';

// Define the `postcatApp` module
angular.module('postcatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'postDetail',
  'postList',
  'dTech',
  'modalFormApp'
]);

angular.
  module('postcatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider	 
      .when('/', {
        template: '<post-list></post-list>'
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
      }). 
        when('/posts/:postId', {
          template: '<post-detail></post-detail>'
        }).
        otherwise('/');
    }
  ]);
