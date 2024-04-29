function changeName(id) {
    id.innerHTML = 'Darwin Dombass';
}

var connections = 500;
var request = 2;
var numList = document.querySelector('span#connections');
var numRequest = document.querySelector("span#requests");

function accept(id) {
    connections = connections + 1;
    request = request - 1;
    numList.innerHTML = connections;
    numRequest.innerHTML = request;
    id.parentNode.remove(); // Elimina el elemento li que contiene el botón de aceptar/denegar
}

function reject(id) {
    request = request - 1;
    numRequest.innerHTML = request;
    id.parentNode.remove(); // Elimina el elemento li que contiene el botón de aceptar/denegar
    console.log('RECHAZADO');
}