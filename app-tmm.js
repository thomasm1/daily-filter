 
 
var tmm = angular.module('tmm', ['ui.router']);  
// inject the router instance into a `run` block by name
/*
tmm.run(function($uiRouter) {
  var pluginInstance = $uiRouter.plugin(Visualizer);
 });
 */

tmm.config(['$locationProvider',function ($locationProvider) {
  $locationProvider.html5Mode(true);
}])

tmm.config(['$stateProvider', function($stateProvider) {  
  $stateProvider
.state('home',{
  url: '/',
  templateUrl:  'views/home.html'
  /*,
  controller: 'homeController', function() {
    homeController.greeting = 'Welcome to TMM';
  
    homeController.toggleGreeting = function() {
      homeController.greeting = (homeController.greeting == 'Welcome to TMM') ? 'Thomas M. Maestas' :  'Welcome to TMM';
    };
  }*/
})
 .state('about',{
  url: '/about', 
  templateUrl:  'views/about.html',

  /*,
  controller: 'aboutController', function () {
    aboutController.greeting = 'About TMM';
    aboutController.toggleAbout = function() {
      aboutController.greeting = (aboutController.greeting == 'About TMM') ? 'Our Daily Tech Post' :  'TMM';
    };
  }
  */
 })
.state('services',{
  url: '/services',
  templateUrl: 'views/services.html'
})   
.state('maps',{
  url: '/maps',
  templateUrl: 'views/maps.html'
})  
.state('otherwise', {
  url: '/*path',
  templateUrl: 'views/home.html'
}) 
/*
.state('post',{
  url: '/posts/{postId}',
  component: 'post',
  resolve: {
    post: function(PostsService, $transition) {
      return PostsService.getPost($transition.params().postId);
    }
  }
})
.state('posts',{
  url: '/posts',
    component: 'posts',
    resolve: {
      posts: function(PostsService) {
        return PostsService.getAllPosts();
      }
    }
})
*/
}]);

   

/*
tmm.controller('tmmController', function tmmController($scope) {
  $scope.posts = [
    {
      did:"08-01-18",title:"1"
    }, {
      did:"08-04-18",title:"2"
    }, {
      did:"08-05-18",title:"3"
    }, {
      did:"08-01-18",title:"4"
    }, {
      did:"08-04-18",title:"5"
    }, {
      did:"08-05-18",title:"6"
    }
  ];
});
 */