const app = document.getElementById('contenedor');

const logo = document.createElement('img');
logo.src = 'portada.jpg';

const titulo = document.createElement('h1');
titulo.textContent = "PELICULAS"
titulo.className = "titulo";

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(titulo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const h2 = document.createElement('h2');
      h2.textContent = movie.rt_score;
      
      const h3= document.createElement('h3')
      h3.textContent = movie.release_date;

      

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      


      container.appendChild(card);
      
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Oh, no esta trabajando!`;
    app.appendChild(errorMessage);
  }
}

request.send();