console.log('app.js is wired up');



(function() {
  var app = angular.module('storyu', []);



  //  Tests to see whether the controllers will fire
  //  ----------------------------------------------
  app.controller('testController', function($scope) {
    alert('You have a controller linked up here.')
  })



  //  Controls the login form functionality
  //  --------------------------------------
  app.controller('loginController', function($scope) {

  })



  //  Controls the signup form functionality
  //  --------------------------------------
  app.controller('signupController', function($scope) {

  })



})();
