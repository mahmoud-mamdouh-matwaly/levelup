var baseUrl = "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/";
var formSchemaUrl =  baseUrl + "getFormSchema";
var subissionUrl = baseUrl + "submission";

call("Get", formSchemaUrl);

function submition() {
    var obj = {};

    var elements = formElement.querySelectorAll( "input" );
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        var ckeckbox = document.getElementById("final_submission");
            if(ckeckbox.checked){
                ckeckbox.value = true;
            }else {
                ckeckbox.value = false;
            }
         
        if( name ) {
            obj[ name ] = value;
            if( obj[ name ] === obj[ 'submit' ] ){
                delete obj[ 'submit' ]
            }
        }
    }

    call("POST", subissionUrl, obj);
}

function call(method, url, data = {}) {
    var request = new XMLHttpRequest();
    request.open(method, url, true);
    request.setRequestHeader("Content-Type", "application/json");
    if(method === "Get") {
        request.onload = function () {
            var indexText = request.response;
            var indexValue = JSON.parse(indexText);
            populateForm(indexValue);
        }
    }

    data = JSON.stringify(data);
    request.send(data);
}

function populateForm(jsonObj) {
    var mybody = document.getElementsByClassName("main")[0];
    formElement = document.createElement("form");
    formElement.setAttribute('action', "");
    formElement.setAttribute('id', "Form");

    for (var key in jsonObj) {  
        
        formElement.innerHTML += 
        "<div class=  \""+jsonObj[key].type+"\" >" +
        "<input name= \""+key+"\"  id = \""+key+"\"  type=\""+jsonObj[key].type+"\" placeholder = \"your "+key+"\" value=\""+jsonObj[key].value+"\"/>" +
        "<label for= \""+key+"\">"+key+"</label></div>";
    }

    mybody.appendChild(formElement);  
        var form = document.getElementById( "Form" );
        form.addEventListener( "submit", function( e ) {
            e.preventDefault();
            var json = submition();
        }, false);
}

