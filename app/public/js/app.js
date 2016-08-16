console.log('app.js is wired up');



(function() {
  var app = angular.module('storyu', ['ngRoute']);



  //  Set up the route provider
  //  -------------------------
  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'splash.html',
      })
      .when('/login', {
        templateUrl: 'users.html',
        controller:  'loginController'
      })
      .when('/signup', {
        templateUrl: 'signup.ejs',
        controller:  'signupController'
      })
      .when('/users', {
        templateUrl: 'users.ejs',
        controller:  'userController'
      });

      $locationProvider.html5Mode(true);

  });

  //  Control login or signup selector on splash page
  //  -----------------------------------------------
  app.controller('splashController', function($scope, $location) {

    $scope.loginSelect = function(view) {
      $location.path('/login');
    };

    $scope.signupSelect = function(view) {
      $location.path('/signup');
    };

  })

  //  Controls the login form functionality
  //  --------------------------------------
  app.controller('loginController', function($scope, $http) {
    
    $scope.login = function(username, password) {
      $http.post('/login', {username: username, password: password}).success(function(data, status) {
        console.log(data);
        console.log('Status: ', status);
        console.log('Registered login.');
      });
    };

  });



  //  Controls the signup form functionality
  //  --------------------------------------
  app.controller('signupController', function($scope, $http) {

    // $scope.fetch = function() {
    //   $http.get('/signup').success(function(fromServer) {
    //     console.log(fromServer);
    //   });     
    // };

    $scope.signup = function(firstname, lastname, email, username, password) {
      $http.post('/signup', {firstname: firstname, lastname: lastname, email: email, username: username, password: password}).success(function(data, status) {
        // $scope.fetch();
        console.log(data);
        console.log('Status: ', status);
      });
    };

  });



  app.controller('logoutController', function($scope, $http) {
    
    $scope.logout = function() {
      $http.post('/logout');
      console.log('Registered logout.')
    };

  });



  app.controller('userController', function($scope, $http) {

    $http.get('/login');

    $scope.userMessage = 'You made it to the users page...';
  
  });



})();
