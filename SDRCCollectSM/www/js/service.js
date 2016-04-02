var services = angular.module('sdrc-collect-service', []);
services.service('basicService', function () {
        var sdrcTitle = 'Main Menu';

        return {
            getSdrcTitle: function () {
                return sdrcTitle;
            },
            setSdrcTitle: function(value) {
                sdrcTitle = value;
            }
        };
});

services.service('HomeService', function(){
   return {
   }; 
});

services.service('FormService', function(){
   return {
        /**
            * This method will create dynamic xml string and return it to HomeCtrl.
        **/
        getXmlData: function (form) {
            //   data: '<Demo_v1 id="Demo_V1" instanceID="uuid:73a56c51-4fde-404e-9f30-4684f148109u" submissionDate="2015-11-13T12:37:52.000+05:30" isComplete="true" markedAsCompleteDate="2015-11-13T12:37:52.000+05:30" xmlns="http://opendatakit.org/submissions"><qs1>ratikanta3</qs1><qs2>bbsr3</qs2><n0:meta xmlns:n0="http://openrosa.org/xforms"><n0:instanceID>uuid:73a56c51-4fde-404e-9f30-4684f148109u</n0:instanceID></n0:meta></Demo_v1>',
            var formTitle;
            var formId;
            var xmlText;
            var instanceID = "uuid:";
            var dateNow;


            formTitle = form.split('</h3>')[0];
            formTitle = formTitle.split('id="form-title">')[1];
            formTitle = formTitle.replace(/ /g , "_");

            formId = form.split('id="')[1];
            formId = formId.split('"')[0];
            var makeid = function(vHere){

                  var text = "";
                  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                  for( var i=0; i < vHere; i++ )
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                  return text;

            };

            instanceID = instanceID + makeid (32);
            dateNow = new Date().toISOString();
            dateNow = dateNow.substring(0, dateNow.length-1);
            dateNow = dateNow + '+05:30';
            var str = '<'+formTitle+' id="'+formId+'" instanceID="'+instanceID+'" submissionDate="'+dateNow+'" isComplete="true" markedAsCompleteDate="'+dateNow+'" xmlns="http://opendatakit.org/submissions"><qs1>ratikanta4</qs1><qs2>bbsr4</qs2><n0:meta xmlns:n0="http://openrosa.org/xforms"><n0:instanceID>'+instanceID+'</n0:instanceID></n0:meta></'+formTitle+'>'
            return str;
        }
   }; 
});


services.service('titleService', function(){
   return {}; 
});
services.service('generaSettingService', function(){

    return {

        store: function(odkUrl, enketoUrl, username, password){   
            serverAuthDB.get('auth').then(function(doc){
                return serverAuthDB.put({
                    _id: 'auth',
                    _rev: doc._rev,
                    odkUrl: odkUrl,
                    enketoUrl: enketoUrl,
                    username: username,
                    password: password                  
                });                
            }).catch(function(err){
                msg = "insert failure! \nError: " + err + "\nError Message: "+ err.message;
                sdrcCollectLog('services.js', msg);
            });
        }

    };    
});