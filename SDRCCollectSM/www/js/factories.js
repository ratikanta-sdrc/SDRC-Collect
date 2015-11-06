var todoApp = angular.module('todosApp', []);
todoApp.factory('todoFactory', function ($http) {
    var factory = {};
    /**
      *The following method will do the server call without header
    **/
	factory.getForms = function (url) {
    	// return $http.get("http://cdn.rawgit.com/motyar/bcf1d2b36e8777fd77d6/raw/bfa8bc0d2d7990fdb910927815a40b572c0c1078/out.xml");
    	// return $http.get("http://opendatakit.appspot.com/formList");
      return $http.get('http://180.87.230.91:8089/ODKAggregate/formList');

        // var username = 'superadmin';
        // var password = 'aggregate';
        // var realm = 'ODKAggregate ODK Aggregate';
        // var method = 'GET';
        // var digestURI = '/ODKAggregate/formList';
        // var time = new Date().getTime();

        // function makeid(vHere){
        //   var text = "";
        //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        //   for( var i=0; i < vHere; i++ )
        //     text += possible.charAt(Math.floor(Math.random() * possible.length));
        //   return text;

        // }

        // var HA1 = CryptoJS.MD5 (username + ":" + realm + ":" + password);
        // var HA2 = CryptoJS.MD5 (method + ":" + digestURI);    
        // var nc = '0000000' + makeid(1);  
        // var cnonce = makeid(8);
      
  
        // // console.log("nonce : " + nonce);
        // // console.log("HA1 : " + HA1);
        // // console.log("HA2 : " + HA2);
        // // console.log("response : " + response);
        // // console.log("nc : " + nc);
        // // console.log("cnonce : " + cnonce);        

  
        // var getRResponse = function (nonce) {
        //     //response=MD5(HA1:nonce:nonceCount:clientNonce:qop:HA2)

        //     return CryptoJS.MD5 (HA1 + ":" + nonce + ":" + nc + ":"+ cnonce + ":" + "auth" + ":" + HA2); 
        // }

        // var sendItAgain = function (nonce){
        //    var response = getRResponse (nonce);
        //    var auth = 'Digest username="'+username+'", realm="'+realm+'", nonce="'+nonce+'", uri="'+digestURI+'", response="'+response+'", qop=auth, nc='+nc+', cnonce="'+cnonce+'"';
        //    var config = {
        //       headers: {     
        //         Authorization: auth
        //       }   
        //    };

        //    $http.get('http://180.87.230.91:8089/ODKAggregate/formList', config).
        //    success(function(data, status, headers, config) {
        //       // console.log("data: " + data);      
        //       console.log ("In the second call");
        //       return data;  
        //    })
        //    .error(function(data, status, headers, config) {
        //       console.log("error");
        //     });
        // };

  
        // $http.get('http://180.87.230.91:8089/ODKAggregate/formList').
        //   success(function(data, status, headers, config) {
        //     // console.log("success");
        //     // console.log("header: " + headers);
        //     // console.log("config: " + config);
        //     // console.log("status: " + status);
        //     // console.log("data: " + data);        
        //     console.log ("In the first call");
        //     return data;
        //   })
        //   .error(function(data, status, headers, config) {
        //   if(status === 401){
        //     var headerHere = headers('WWW-Authenticate');
        //     var nonce = headerHere.split('nonce=')[1];
        //     nonce = nonce.substring(1, nonce.length - 1);
        //     sendItAgain(nonce);        
        //   }
           
        //   // console.log("config: " + config);
        //   // console.log("status: " + status);
        //   // console.log("data: " + data);
        // });  
        
    },
    /**
      *The following method will do server call with the header after getting 
      *401 (Unutherized error)
    **/
    factory.getFormsWithHeader = function (url, authObject) {
        var username = 'superadmin';
        var password = 'aggregate';
        var realm = 'ODKAggregate ODK Aggregate';
        var method = 'GET';
        var digestURI = '/ODKAggregate/formList';
        var auth = 'Digest username="'+username+'", realm="'+realm+'", nonce="'+nonce+'", uri="'+digestURI+'", response="'+response+'", qop=auth, nc='+nc+', cnonce="'+cnonce+'"';
        var config = {
            headers: {     
              Authorization: auth
            }
        };
      return $http.get('http://180.87.230.91:8089/ODKAggregate/formList', config);      
    }
    return factory;
});
todoApp.factory('getXMLDataFactory', function() {
	var x2js = new X2JS();
    xml = '<diffgr:diffgram xmlns:msdata="urn:schemas-microsoft-com:xml-msdata" xmlns:diffgr="urn:schemas-microsoft-com:xml-diffgram-v1">'+
 			'<DocumentElement xmlns="">'+
  			'<semt_kodlari diffgr:id="semt_kodlari1" msdata:rowOrder="0">'+
   			'<semt_adi>ALTIKAT</semt_adi>'+
  			'</semt_kodlari>'+
 			'</DocumentElement>'+
			'</diffgr:diffgram>';
    console.log(xml, x2js);
    return {
    	get: function() { 
            return x2js.xml_str2json(xml);
        }
    };         
});

todoApp.factory('getIdFactory', function() {
	return {
    	getId: function(urlHere) { 
            return urlHere.split("=")[1];
        }
    };
});
todoApp.factory('xformFactory', function ($http) {
    var factory1 = {};
    factory1.getXForm = function (xformUrl) {
        return $http.get(xformUrl);        
    }
    return factory1;
});