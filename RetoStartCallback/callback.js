function getP(url, callback) {

    var httpX = new XMLHttpRequest();
    httpX.onload = function () {
        //console.log(JSON.parse(this.responseText));
        if (callback) {
            callback(JSON.parse(this.responseText));
        }

    }
    httpX.onerror = function () {
        reject(Error('Error 🤮'));
    }
    httpX.open('GET', url, true);
    httpX.send()

}
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("pagina Cargada");
    //getRequestStarWars();
    renderUsuarios();
});

var img_Personajes = ['','','',''];
var usuarios = ['planetas', 'personajes', 'especies', 'vehiculos'];
var color = ['btn-primary','btn-secondary','btn-success','btn-danger'];
var urls = ['https://swapi.co/api/planets/',
    'https://swapi.co/api/people/',
    'https://swapi.co/api/species/',
    'https://swapi.co/api/vehicles/'];


function renderUsuarios() {
    var cont = document.getElementById('nav');
    cont.innerHTML = '';
    var auxCont = '';
    usuarios.forEach(function (usuario) {
        console.log(usuario);

    });

    urls.forEach(function (url, item) {
        console.log(url);
        auxCont += `<button class="btn ${color[item]}" onclick="getP('${url}',renderNombres)" class="btn btn-primary"> ${usuarios[item]} </button>`;
    });

    cont.innerHTML = auxCont;
}
function renderNombres(data) {
    console.log(data);

    datosRepo = data.results;

    var cont = document.getElementById('contenedor');
    var auxE = "";
    cont.innerHTML = auxE;

    var cTable = document.getElementById('cuerpoTabla')
    var auxT = "";

    datosRepo.forEach(function (items, index) {
        auxT += "<tr><td>" + index + "</td><td>" + items.name + "</td><tr>";

    })
    cTable.innerHTML = auxT;


}