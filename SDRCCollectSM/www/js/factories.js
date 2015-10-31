var todoApp = angular.module('todosApp', []);
todoApp.factory('todoFactory', function ($http,$base64) {
    var factory = {};
	factory.getTodos = function (url) {
    	// return $http.get("http://cdn.rawgit.com/motyar/bcf1d2b36e8777fd77d6/raw/bfa8bc0d2d7990fdb910927815a40b572c0c1078/out.xml");
    	// return $http.get("http://opendatakit.appspot.com/formList");
        return $http.get("http://180.87.230.91:8089/ODKAggregate/formList");
        // return $http.get(url);
        // var time = new Date().getTime();
        // function makeid(vHere)
        // {
        //     var text = "";
        //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        //     for( var i=0; i < vHere; i++ )
        //         text += possible.charAt(Math.floor(Math.random() * possible.length));

        //     return text;
        // }

        // var randomString = makeid(20);
        // var str = time+':'+randomString;
        // // //$scope.encoded = $base64.encode('a string');
        // // //$scope.decoded = $base64.decode('YSBzdHJpbmc=');

        // // // console.log($base64.encode(str));
        // var nonce = $base64.encode(str);
        // // CryptoJS.MD5("Message");
        // // var ha1 = $base64.encode('superadmin:ODK Aggregate:aggregate');
        // var ha1 = CryptoJS.MD5('superadmin:ODK Aggregate:aggregate');
        // var nc = '0000000' + makeid(1);
        // var cnonce = makeid(8);
        // // var ha2 = $base64.encode('GET:/ODKAggregate/formList');
        // var ha2 = CryptoJS.MD5('GET:/ODKAggregate/formList');
        // // var response = $base64.encode(ha1 + ":" + nonce + ":" + ha2);
        // var response = CryptoJS.MD5(ha1 + ":" + nonce + ":" + ha2);
        // var config = {
        //     headers: {
        //         Authorization: 'Authorization: Digest username="superadmin", realm="ODK Aggregate", nonce="'+nonce+'", uri="/ODKAggregate/formList", response="'+response+'", qop=auth, nc='+nc+', cnonce="'+cnonce+'"'
        //         // Authorization: 'Authorization: Basic c3VwZXJhZG1pbjphZ2dyZWdhdGU='
                
        //     }   
        // };
        // // return $http.get('http://203.129.205.40:8085/ODKTEST/formList', config);
        // // var authdata = $base64.encode('superadmin' + ':' + 'odktest@123#!');
        // // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
        // // $http.get('http://180.87.230.91:8089/ODKAggregate/local_login.html?redirect=http://180.87.230.91:8089/ODKAggregate/formList', config).
        // $http.get('http://180.87.230.91:8089/ODKAggregate/formList', config).
        //       success(function(data, status, headers, config) {
        //         // this callback will be called asynchronously
        //         // when the response is available
        //         //console.log("succ");
        //         console.log("header: " + headers);
        //         console.log("config: " + config);
        //         // for(var i = 0; i < config.length; i++){
        //         //     console.log(config[0]);
        //         // }

        //         console.log("status: " + status);
        //         console.log("data: " + data);
        //       })
        //       .error(function(data, status, headers, config) {
        //         // called asynchronously if an error occurs
        //         console.log("fail");
        //         // or server returns response with an error status.
        //       });    
        
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
        // return $http.get("http://cdn.rawgit.com/motyar/bcf1d2b36e8777fd77d6/raw/bfa8bc0d2d7990fdb910927815a40b572c0c1078/out.xml");
        return $http.get(xformUrl);
        // return $http.get("https://opendatakit.appspot.com/formXml?formId=CascadingSelect");
    }
    return factory1;
});