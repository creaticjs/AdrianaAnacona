var datos = {};
var datos_repo = [];
var data = [];

function getRequestStarWars(url, id) {
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText)
            console.log(datos)
            if (id == "planetas") {
                renderPlanetas(datos.planets);
            }
            if (id == "peliculas") {
                renderPeliculas(datos.films);
            }
            if (id == "personajes") {
                renderPersonajes(datos.people);
            }
            if (id == "especies") {
                renderEspecies(datos.species);
            }
            if (id == "vehiculos") {
                renderVehiculos(datos.vehicles);
            }


        }
    }
    peticion.open('GET', 'https://swapi.co/api/', true);
    peticion.send();
}

/*document.addEventListener("DOMContentLoaded", function (event) {
    console.log("pagina Cargada");
    getRequestStarWars();
});*/

planetas = document.getElementById("planetas");

planetas.onclick = function (event) {
    var url = 'https://swapi.co/api/planets/';
    var id = "planetas";
    getRequestStarWars(url, id);

}
peliculas = document.getElementById("peliculas");

peliculas.onclick = function (event) {
    var url = 'https://swapi.co/api/films/';
    var id = "peliculas";
    getRequestStarWars(url, id);

}
personajes = document.getElementById("personajes");

personajes.onclick = function (event) {
    var url = 'https://swapi.co/api/people/';
    var id = "personajes";
    getRequestStarWars(url, id);

}
especies = document.getElementById("especies");

especies.onclick = function (event) {
    var url = 'https://swapi.co/api/species/';
    var id = "especies";
    getRequestStarWars(url, id);

}

vehiculos = document.getElementById("vehiculos");

vehiculos.onclick = function (event) {
    var url = 'https://swapi.co/api/vehicles/';
    var id = "vehiculos";
    getRequestStarWars(url, id);

}

function renderPersonajes(url) {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);


            datos_repo = data.results;
            var cont = document.getElementById('contenedor');
            var auxE = "";

            cont.innerHTML = auxE;

            var cTable = document.getElementById('cuerpoTabla')
            var auxT = "";

            datos_repo.forEach(function (items) {
                auxT += "<tr><td>" + items.name + "</td><td>" + items.height + "</td> <td>" + items.git_url + "</td><tr>";
            })
            cTable.innerHTML = auxT;
        }
    }
    req.open('GET', url, true);
    req.send();



}

function renderPlanetas(url) {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);


            datos_repo = data.results;
            var cont = document.getElementById('contenedor');
            var auxE = "";

            datos_repo.forEach(function (item, index) {

            });

            cont.innerHTML = auxE;

            var cTable = document.getElementById('cuerpoTabla')
            var auxT = "";

            datos_repo.forEach(function (items, index) {
                auxT += "<tr><td>" + items.name + "</td><td>" + items.gravity + "</td> <td>" + items.films + "</td><tr>";
            })
            cTable.innerHTML = auxT;
        }
    }
    req.open('GET', url, true);
    req.send();

}

function renderPeliculas(url) {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);


            datos_repo = data.results;
            var cont = document.getElementById('contenedor');
            var auxE = "";

            datos_repo.forEach(function (item, index) {

            });

            cont.innerHTML = auxE;

            var cTable = document.getElementById('cuerpoTabla')
            var auxT = "";
            datos_repo.forEach(function (items, index) {
                auxT += "<tr><td>" + items.title + "</td><td>" + items.episode_id + "</td> <td>" + items.director + "</td><tr>";
            })
            cTable.innerHTML = auxT;
        }
    }
    req.open('GET', url, true);
    req.send();

}

function renderEspecies(url) {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);


            datos_repo = data.results;
            var cont = document.getElementById('contenedor');
            var auxE = "";

            datos_repo.forEach(function (item, index) {

            });

            cont.innerHTML = auxE;

            var cTable = document.getElementById('cuerpoTabla')
            var auxT = "";
            datos_repo.forEach(function (items, index) {
                auxT += "<tr><td>" + items.name + "</td><td>" + items.classification + "</td> <td>" + items.language + "</td><tr>";
            })
            cTable.innerHTML = auxT;
        }
    }
    req.open('GET', url, true);
    req.send();

}

function renderVehiculos(url) {

    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);


            datos_repo = data.results;
            var cont = document.getElementById('contenedor');
            var auxE = "";

            datos_repo.forEach(function (item, index) {

            });

            cont.innerHTML = auxE;

            var cTable = document.getElementById('cuerpoTabla')
            var auxT = "";
            datos_repo.forEach(function (items, index) {
                auxT += "<tr><td>" + items.name + "</td><td>" + items.model + "</td> <td>" + items.manufacturer + "</td><tr>";
            })
            cTable.innerHTML = auxT;
        }
    }
    req.open('GET', url, true);
    req.send();

}