console.log('app.js is wired up');



(function() {
  var app = angular.module('storyu', ['ngRoute']);



  //  Set up the route provider
  //  -------------------------
  app.config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'splash.html',
        controller: 'splashController'
      })
      .when('/users', {
        templateUrl: '../users.html',
        controller: 'userController'
      });
  }])


  //  Master splash page (main page) functionality
  //  --------------------------------------------
  app.controller('mainController', function($scope) {
    
    $scope.mainMessage = 'You are on the main page...';
    $scope.reminderMessage = 'Delete this when you get the router and views working!';

  });

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

    $locationProvider.html5Mode(true);

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



  app.controller('splashController', function($scope) {

    $scope.loginvis = false;
    $scope.signupvis = false;

  });



  app.controller('userController', function($scope, $http) {

    $http.get('/login');

    $scope.userMessage = 'You made it to the users page...';
  
  });



})();
