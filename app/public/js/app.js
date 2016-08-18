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
        controller:  'noteController'
      })
      .when('/search', {
        templateUrl: 'search.html',
        controller:  'noteController'
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

  app.controller('addController', function($scope, $http, $location) {
    $scope.uploadtext = function(title, content) {

    }
  });


  //  Controls the LOGIN FORM functionality
  //  --------------------------------------
  app.controller('loginController', function($scope, $http, $location) {
    $scope.login = function(username, password) {
      $http.post('/login', {username: username, password: password}).success(function(data, status) {
        console.log('Status: ', status);
        console.log('Registered login.');
        $location.path('/users');
      });
    };
  })


  //  Controls the SIGNUP FORM functionality
  //  --------------------------------------
  app.controller('signupController', function($scope, $http, $location) {

    $scope.signup = function(firstname, lastname, email, username, password) {
      $http.post('/signup', {firstname: firstname, lastname: lastname, email: email, username: username, password: password}).success(function(data, status) {
        console.log('Status: ', status);
        console.log('Registered a new user.'); 
        $location.path('/users');
      });
    };
  });


  //  Controller for NAVIGATION section of USER PAGE
  //  ----------------------------------------------
  app.controller('navController', function($scope, $location) {
    $scope.addnote = function(view) {
      console.log('YOU PRESSED THE ADD BUTTON!');
      $location.path('/jotnote');
    };

    $scope.search = function(view) {
      console.log('YOU PRESSED THE SEARCH BUTTON!');
      $location.path('/search');
    };

    $scope.logout = function(view) {
      $http.post('/logout');
      console.log('Registered logout.')
      $location.path('/');
    };
  });


  //  CRUD controller for all notes in user's collection
  //  --------------------------------------------------
  app.controller('noteController', function($scope, $location) {
    $scope.notepost = function(title, content) {
      $http.post('/savenote', {title: title, content: content}).success(function(data, status) {
        console.log('Status: ', status);
        console.log('Registered new note submission');
      });
    };

    $scope.notesearch = function(searchcrit) {

    };
  });






  // app.controller('usersController', function($scope, $http) {

  //   $scope.userLoad = function() {  
  //     $http.get('/user').success(function(data, status) {
  //       console.log('Status: ', status)
  //       console.log('Got info for logged in user');
  //     });
  //   };

  //   $scope.textEntry = function(title) {

  //     $http.post('/textEntry').success(function(data, status) {
  //       console.log('Registered text entry button click.');
  //     });      
  //   };

  //   $scope.searchEntries = function() {
  //     $http.get('/seach').success(function(data, status) {
  //       console.log('Registered search attempt.');
  //     });
  //   };

  //   $scope.userLoad();

  // });





})();
