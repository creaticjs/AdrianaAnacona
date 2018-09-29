function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

var dataEquipos = [
    {
        nombre: "Deportivo Nacional",
        urlimage: "https://seeklogo.com/images/C/Club_Atl__tico_Nacional-logo-B34D1C41B9-seeklogo.com.png",
        dt: "Jorge Almirón",
        jugadores: ["Totono", "Macknely"],
        resenia: "El Atlético Nacional S. A., ​ mejor conocido como Atlético Nacional, o simplemente Nacional, es un club de fútbol de la ciudad de Medellín, Colombia",
        urlestadio: " https://vignette.wikia.nocookie.net/estadios/images/d/d9/Atanasio-Girardot.png/revision/latest?cb=20160419164019&path-prefix=es",
        estrellas: "3"
    },
    {
        nombre: "America de Cali",
        urlimage: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/New_Logo_2013_Am%C3%A9rica_de_Cali.svg/220px-New_Logo_2013_Am%C3%A9rica_de_Cali.svg.png",
        dt: "Harold Lozano",
        jugadores: ["Totono", "Macknely"],
        resenia: " El América de Cali S. A., conocido como América de Cali o simplemente América, es un club de fútbol colombiano de la ciudad de Cali",
        urlestadio: "https://admin.kienyke.com/wp-content/uploads/2018/02/america-2.png",
        estrellas: " 2 "
    },
    {
        nombre: "Millonarios",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Escudo_de_Millonarios_F%C3%BAtbol_Club.svg/1024px-Escudo_de_Millonarios_F%C3%BAtbol_Club.svg.png",
        dt: "Harold Lozano",
        jugadores: ["Totono", "Macknely"],
        resenia: " Millonarios Fútbol Club, oficialmente Azul y Blanco Millonarios Fútbol Club S. A.​, mejor conocido como Millonarios, ​ es un club de fútbol de la ciudad de Bogotá, capital de Colombia.",
        urlestadio: "http://static.hsbnoticias.com/sites/default/files/styles/original/public/gallery/2015/12/estadio-el-campin-bogota_r0.jpg?itok=wgxwBrNU",
        estrellas: " 2 "
    },
    {
        nombre: "Tolima",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Escudo_de_Millonarios_F%C3%BAtbol_Club.svg/1024px-Escudo_de_Millonarios_F%C3%BAtbol_Club.svg.png",
        dt: "Harold Lozano",
        jugadores: ["Totono", "Macknely"],
        resenia: " Millonarios Fútbol Club, oficialmente Azul y Blanco Millonarios Fútbol Club S. A.​, mejor conocido como Millonarios, ​ es un club de fútbol de la ciudad de Bogotá, capital de Colombia.",
        urlestadio: "http://static.hsbnoticias.com/sites/default/files/styles/original/public/gallery/2015/12/estadio-el-campin-bogota_r0.jpg?itok=wgxwBrNU",
        estrellas: " 2 "
    },
    {
        nombre: "Pasto",
        urlimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Escudo_de_Millonarios_F%C3%BAtbol_Club.svg/1024px-Escudo_de_Millonarios_F%C3%BAtbol_Club.svg.png",
        dt: "Harold Lozano",
        jugadores: ["Totono", "Macknely"],
        resenia: " Millonarios Fútbol Club, oficialmente Azul y Blanco Millonarios Fútbol Club S. A.​, mejor conocido como Millonarios, ​ es un club de fútbol de la ciudad de Bogotá, capital de Colombia.",
        urlestadio: "http://static.hsbnoticias.com/sites/default/files/styles/original/public/gallery/2015/12/estadio-el-campin-bogota_r0.jpg?itok=wgxwBrNU",
        estrellas: " 2 "
    }
];




var selEquipo = document.getElementById('equipos');
//onchange detecta un cambio 
var nomEquipo = document.getElementById("nombre");
var imagenEquipo = document.getElementById("imgEquipo");
var dtEquipo = document.getElementById("dt");
var resEquipo = document.getElementById("res");
var estadioEquipo = document.getElementById("imgestadio");
var estrellasEquipo = document.getElementById("estrellas");
var jugadores = document.getElementById("jugadores");

selEquipo.onchange = function () {
    //sobre el contexto this
    //console.log(this.value);
    //document.getElementById("nombre").innerHTML = this.value;
    //console.log(this.options[this.selectedIndex].text);
    //nomEquipo.innerHTML = this.options[this.selectedIndex].text;
    nomEquipo.innerHTML = dataEquipos[this.selectedIndex].nombre;
    dtEquipo.innerHTML = dataEquipos[this.selectedIndex].dt;
    resEquipo.innerHTML = dataEquipos[this.selectedIndex].resenia;
    estrellasEquipo.innerHTML = dataEquipos[this.selectedIndex].estrellas;
    jugadores.innerHTML = dataEquipos[this.selectedIndex].jugadores;
    //this.selectedIndex;    
    //this.options[0];
    imagenEquipo.setAttribute('src', dataEquipos[this.selectedIndex].urlimage);
    estadioEquipo.setAttribute('src', dataEquipos[this.selectedIndex].urlestadio);
}

//var estrella = 0;
//for (i=0; dataEquipos[this.selectedIndex].estrellas)








