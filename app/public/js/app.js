(function() {
//  THIS PAGE INITIALIZES THE ANGULAR APP
//  AND DEFINES THE VARIOUS CONTROLLERS
//  =====================================
  
  //  Initializing the angular application
  //  ------------------------------------
  var app = angular.module('storyu', ['ngRoute']);


  //  Sets up the ROUTE PROVIDER and location finding
  //  -----------------------------------------------
  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller:  'indexController'
      })
      .when('/login', {
        templateUrl: 'userlogin.html',
        controller:  'loginController'
      })
      .when('/signup', {
        templateUrl: 'usersignup.html',
        controller:  'signupController'
      })
      .when('/users', {
        templateUrl: 'users.html',
        controller:  'navController'
      })
      .when('/jotnote', {
        templateUrl: 'note.html',
        controller:  'navController'
      })
      .when('/feature', {
        templateUrl: 'feature.html',
        controller:  'navController'
      })
      .when('/search', {
        templateUrl: 'search.html',
        controller:  'navController'
      });

    $locationProvider.html5Mode(true);
  });


  //  Control login or signup SELECTOR on SPLASH PAGE
  //  -----------------------------------------------
  app.controller('indexController', function($scope, $location) {
    $scope.loginSelect = function(view) {
      $location.path('/login');
    };

    $scope.signupSelect = function(view) {
      $location.path('/signup');
    };

    $scope.resetSelect = function(view) {
      $location.path('/');
    };
  })


  //  Controls the LOGIN FORM functionality
  //  --------------------------------------
  app.controller('loginController', function($scope, $http, $location) {
    $scope.login = function(username, password) {
      $http.post('/login', {username: username, password: password}).success(function(data, status) {
        $location.path('/users');
      });
    };
  })


  //  Controls the SIGNUP FORM functionality
  //  --------------------------------------
  app.controller('signupController', function($scope, $http, $location) {

    $scope.signup = function(firstname, lastname, email, username, password) {
      $http.post('/signup', {firstname: firstname, lastname: lastname, email: email, username: username, password: password}).success(function(data, status) {
        $location.path('/users');
      });
    };
  });


  //  Controller for NAVIGATION section of USER PAGE
  //  ----------------------------------------------
  app.controller('navController', function($scope, $location, $http) {
    $scope.addnote = function(view) {
      $location.path('/jotnote');
    };

    $scope.search = function(view) {
      $location.path('/search');
    };

    $scope.logout = function(view) {
      $http.post('/logout');
      $location.path('/');
    };

    $scope.fetchnotes = function() {
      $http.get('/notes').success(function(notes) {
        $scope.usernotes = notes;
      });
    };

    $scope.savenote = function(title, content, view) {
      console.log(title)
      console.log(content)
      $http.post('/notes', {title: title, content: content}).success(function(data, status) {
        $location.path('/users');
      });
    };

    $scope.showfeature = function(featureID, view) {
      $http.get('/features').success(function (featuresearch) {
        for (var x in featuresearch) {
          if (featuresearch[x]._id === featureID) {
            $scope.feature = featuresearch[x];
          };
        };
        $location.path('/feature');
      });
    };

    $scope.fetchnotes();

  });



})();
