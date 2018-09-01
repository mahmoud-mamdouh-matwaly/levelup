


var requestURL =  "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/getFormSchema";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.setRequestHeader("Content-Type", "application/json");
request.onload = function () {
    var indexText = request.response;
    var indexValue = JSON.parse(indexText);
    populateForm(indexValue);
}

let formElements2 = [];

function submit() {
    var formValue = document.getElementById("name");

    //  for (var i = 0; i < formValue.length; i++) {
    //     formValue = formValue.value    
    //  }   
    console.log(formValue);
} 
submit();

function populateForm(jsonObj) {
    var mybody = document.getElementsByClassName("main")[0];
    var formElement = document.createElement("form");
        formElement.setAttribute('method', "get");
        formElement.setAttribute('action', "");
        formElement.setAttribute('id', "Form");

    for (var key in jsonObj) {
        
        if(key !== 'submit') {
            formElements2.push(key);
        }
        
        var divElement = document.createElement("div");
        divElement.setAttribute('class', jsonObj[key].type);

        var inputElement = document.createElement("input");
        inputElement.setAttribute('name', key);
        inputElement.setAttribute('id', key);
        inputElement.setAttribute('placeholder', 'your ' + key);
        inputElement.setAttribute('type', jsonObj[key].type);
        inputElement.setAttribute('value', jsonObj[key].value);
        inputElement.setAttribute('value', jsonObj[key].value);

        if (key === "submit") {
            inputElement.setAttribute('value', jsonObj[key].value);
            inputElement.setAttribute('onclick', submit());
        }

        var labelElement = document.createElement("label");
            if (key === "secret" || key === "submit") {
                labelElement.style.display = 'none';
            }
        labelElement.innerHTML = key;
        labelElement.setAttribute('for', key);

        divElement.appendChild(inputElement);
        divElement.appendChild(labelElement);
        formElement.appendChild(divElement);
    }
    mybody.appendChild(formElement);  
}

request.send();





// var xhr = new XMLHttpRequest();
// var url = "https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/getFormSchema?data=" + encodeURIComponent(JSON.stringify({}));;
// xhr.open("GET", url, true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var json = JSON.parse(xhr.responseText);
//         console.log(json);
//         console.log(json.key.type + ", " + json.key.type);
        
//     }
// };
// xhr.send();