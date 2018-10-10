// Initialize Firebase
var config = {
    apiKey: "AIzaSyARO2EBXOpEclkNIMMZ7qFsjQ96O38PX1Q",
    authDomain: "chatcreatic.firebaseapp.com",
    databaseURL: "https://chatcreatic.firebaseio.com",
    projectId: "chatcreatic",
    storageBucket: "chatcreatic.appspot.com",
    messagingSenderId: "910435337895"
};
firebase.initializeApp(config);

var database = firebase.database();
// Conectarse a la base de datos y a una “tabla” o colección dedatos
var basedeDatos = firebase.database().ref('mensajes');

basedeDatos.on('child_added', function (data) {

    $('#mensajes').append(`</p><p>${data.val().body}<p/>`);
});

$('#enviar').on('click', enviarMSG);
$('#textoMsg').on('keypress', function (e) {
    if (e.which == 13) {
        enviarMSG();
    }
});

function enviarMSG() {
    console.log('Enviar mensaje');
    basedeDatos.push().set({ body: $('#textoMsg').val() })
    $('#textoMsg').val('');
}

