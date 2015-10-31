// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'base64']);

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

app.controller('ctrl', function($scope, $http, $base64){
  
  var username = 'superadmin';
  var password = 'pass@123#';
  var realm = 'ODKAggregate ODK Aggregate';
  var method = 'GET';
  var digestURI = '/ODK/formList';
  var time = new Date().getTime();

  function makeid(vHere){

      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( var i=0; i < vHere; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;

  }

  var randomString = makeid(20);
  var str = time+':'+randomString;
  var nonce = $base64.encode(str);
  var HA1 = CryptoJS.MD5 (username + ":" + realm + ":" + password);
  var HA2 = CryptoJS.MD5 (method + ":" + digestURI);    
  var response = CryptoJS.MD5 (HA1 + ":" + nonce + ":" + HA2);  
  var nc = '0000000' + makeid(1);  
  var cnonce = makeid(8);
  
  
  console.log("nonce : " + nonce);
  console.log("HA1 : " + HA1);
  console.log("HA2 : " + HA2);
  console.log("response : " + response);
  console.log("nc : " + nc);
  console.log("cnonce : " + cnonce);        

  var config = {
    headers: {
      Authorization: 'Authorization: Digest username="' + username + '", realm="' + realm + '", nonce="' + nonce + '", uri="' + digestURI + '", response="' + response + '", qop=auth, nc=' + nc + ', cnonce="' + cnonce + '"'
    }   
  };

  $http.get('http://180.87.230.91:8089/ODK/formList', config).
    success(function(data, status, headers, config) {

      console.log("success");
      console.log("header: " + headers);
      console.log("config: " + config);
      console.log("status: " + status);
      console.log("data: " + data);        

    })
    .error(function(data, status, headers, config) {

      console.log("error");
      console.log("header: " + headers);
      console.log("config: " + config);
      console.log("status: " + status);
      console.log("data: " + data);

    });    
});