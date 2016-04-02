// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('ctrl',  function($scope, $http){

    // var urlHere = "http://192.168.1.122:8085/transform?xform=http://180.87.230.91:8089/ODK/formXml?formId=DGA_AWC_20-01-15_v2";
    

    var dataObj = {
        // xform : 'http://180.87.230.91:8089/ODK/formXml?formId=DGA_AWC_20-01-15_v2'
        xform : ''//enter the xml
    };  
    var res = $http.post('http://192.168.1.122:8085/transform', dataObj);
    res.success(function(data, status, headers, config) {
      console.log (status);
      console.log ("Success : " + data);
    });
    res.error(function(data, status, headers, config) {
      console.log (status);
      console.log ("Error : " + data);
    });
  
});
