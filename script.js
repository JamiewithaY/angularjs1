//everything in Angular is considered a module

//1st we declare the main application-this will create it. The array of dependencies that we will use for our routes
var app = angular.module("computer", ['ngRoute'])

//2nd we need to initilize it using a directive on the index.html page. ng-app="computer" will be listed right after you declare the lang="en"


//creating our routes so anything after the root will hit the provided routes which will have access to differnt controllers. Dependency injection- $routeProvider is being injected into this function/method
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/main', {
        templateUrl: 'main.html', 
        controller: 'MainCtrl'
      }).
        when('/about', {
        templateUrl: 'about.html', 
        controller: 'MainCtrl'
      }).    
      when('/services', {
        templateUrl: 'services.html', 
        controller: 'ServicesCtrl'
      }).
        when('/contact', {
        templateUrl: 'contact.html', 
        controller: 'ContactCtrl'
      }).
      otherwise({redirectTo:'/main'});
}])

//controller will have the name, the dependencies
.controller('MainCtrl', ['$scope', 'http', function($scope){
  // what do we want to happen when the MainCtrl is called on a route
  // $scope.person = "John Doe"; scope defined variable that can be used in view (main.html)
  //console.log($scope);
  $http.get('services.json').then(function(response){
    $scope.services = repsonse.data;
  });
}])
//We are going to create a GET request to our JSON file
.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    //this is passing the json object to the view
    // console.log(response); //This will return the json object
    $scope.services = response.data;
    
  });
  
}])
.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}])

.controller('ContactCtrl', ['$scope', function($scope){
  
}]);
