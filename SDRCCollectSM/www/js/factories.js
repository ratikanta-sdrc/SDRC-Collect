var todoApp = angular.module('todosApp', []);
todoApp.factory('todoFactory', function ($http) {
    var factory = {};
	factory.getTodos = function (url) {
    	// return $http.get("http://cdn.rawgit.com/motyar/bcf1d2b36e8777fd77d6/raw/bfa8bc0d2d7990fdb910927815a40b572c0c1078/out.xml");
    	// return $http.get("http://opendatakit.appspot.com/formList");
        return $http.get(url);
        //http://203.129.205.40:8085/ODKTEST/formlist--------superadmin------odktest@123#!



            // $.ajax({ 
            //     type: "GET", 
            //     url: 'http://203.129.205.40:8085/ODKTEST/formlist', 
            //     async: false, 
            //     dataType: "xml", 
            //     contentType: "application/xml", 
            //     crossDomain: true, 
            //     headers: { 
            //         "Authorization": "Basic c3VwZXJhZG1pbjpvZGt0ZXN0QDEyMyMh"
            //     }, 
            //     success: function (xmlData) { 

            //         console.log(xmlData); 

            //         // $('#getFormAlertDiv').hide(); 
            //         // $('#waitAlertDiv').show(); 

            //     }, 
            //     error: function (request, textStatus, errorThrown) { 
            //         console.log(request.responseText); 
            //         console.log(textStatus); 
            //         console.log(errorThrown); 
            //     } 

            // });















        // return $http({
        //             method: "get",
        //             url: "http://203.129.205.40:8085/ODKTEST/formlist",
        //             async: false, 
        //             dataType: "xml", 
        //             contentType: "application/xml", 
        //             crossDomain: true, 
        //             headers: { 
        //                 "Authorization": "Basic c3VwZXJhZG1pbiA6IG9ka3Rlc3RAMTIzIyE=" 
        //             }
        //         });
                
    	// return $http.get("https://opendatakit.appspot.com/formXml?formId=CascadingSelect");
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