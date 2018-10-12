
var indices = [];

$(function () {
    ordenar = false;

    let image = []
    

    image['2baf70d1-42bb-4437-b551-e5fed5a87abe']='http://downloadwallpapers-net.s3.amazonaws.com/laputa-castle-sky.png'
    image['12cfb892-aac0-4c5b-94af-521852e46d6a']='https://media.giphy.com/media/fYE3QrS49LDjO/giphy.gif'
    image['58611129-2dbc-4a81-a72f-77ddfc1b1b49']='https://images2.alphacoders.com/499/thumb-1920-499590.jpg'
    image['ea660b10-85c4-4ae3-8a5f-41cea3648e3e']='https://pa1.narvii.com/5693/78ffa5738ce15af387837279880258fc92a7a87b_hq.gif'
    image['4e236f34-b981-41c3-8c65-f8c9000b94e7']='https://m.media-amazon.com/images/M/MV5BNTljZDQ0NzQtOGQzOS00YjkzLTlkNGUtYTRiMzMzMDNlMTc3XkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_.jpg'
    image['ebbb6b7c-945c-41ee-a792-de0e43191bd8']= 'https://i2.kym-cdn.com/photos/images/original/000/640/113/932.gif'
    image['1b67aa9a-2e4a-45af-ac98-64d6ad15b16c']='https://nefariousreviews.files.wordpress.com/2017/02/pom-poko-featured.jpg?w=672&h=372&crop=1'
    image['ff24da26-a969-4f0e-ba1e-a122ead6c6e3']='https://media1.tenor.com/images/184d8af4e2cadafe4ccc30bef31f13f9/tenor.gif?itemid=5536983'
    image['0440483e-ca0e-4120-8c50-4c8cd9b965d6']='https://thumbs.gfycat.com/FlusteredSparseAmericanlobster-size_restricted.gif'
    image['45204234-adfd-45cb-a505-a8e7a676b114']='https://m.media-amazon.com/images/M/MV5BNWRmY2E2NzItNGU5MC00MWM5LWJiNWMtN2YzNWNmYjllMjdjXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_.jpg'
    image['dc2e6bd1-8156-4886-adff-b39e6043af0c']='https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/60237-spiritedaway.jpg?itok=F9-xHsuc&resize=1100x1100'
    image['90b72513-afd4-4570-84de-a56c312fdf81']='https://i.ytimg.com/vi/p8voc586pXs/maxresdefault.jpg'
    image['cd3d059c-09f4-4ff3-8d63-bc765a5184fa']='https://wallscover.com/images/howls-moving-castle-3.jpg'
    image['112c1e67-726f-40b1-ac17-6974127bb9b9']='https://cdn.empireonline.com/jpg/70/0/0/640/480/aspectfit/0/0/0/0/0/0/c/articles/5b0738bed905d44a05ea2950/Earthsea.jpg'
    image['758bf02e-3122-46e0-884e-67cf83df1786']='https://s1-ssl.dmcdn.net/oy0L4/x360-obU.jpg'
    image['2de9426b-914a-4a06-a3a0-5e6d9d3886f6']='https://anime4mega.net/wp-content/uploads/2017/09/Arrietty-y-el-Mundo-de-los-Diminutos.jpg'
    image['45db04e4-304a-4933-9823-33f389e8d74d']='https://i.pinimg.com/originals/6e/4b/e3/6e4be39f52ec9e0d9a7f02301a80d5a8.gif'
    image['67405111-37a5-438f-81cc-4666af60c800']='https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/08/KazeTachinuTheWindRises_1JiroFirstchoice.jpg'
    image['578ae244-7750-4d9f-867b-f3cd3d6fecf4']='http://static.bobatv.net/IMovie/mv_1695/poster_1695.jpg'
    image['5fdfb320-2a02-49a7-94ff-5ca418cae602']='https://homemcr.org/app/uploads/2016/04/maxresdefault1-940x460.jpg'

  
  

    var imgPeople = [
        'https://vignette.wikia.nocookie.net/disney/images/4/49/Ashitaka.jpg/revision/latest?cb=20140421213740',
        'http://zena.cat/wp-content/uploads/2016/10/princess-1.jpg',
        'https://helindasky.files.wordpress.com/2018/02/eboshi_9.jpg?w=801&h=441&crop=1',
        'https://vignette.wikia.nocookie.net/disney/images/7/72/Jigo.jpg/revision/latest?cb=20140422184545',
        'https://cdn.anisearch.de/images/character/cover/full/41/41471.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7d8qirP5afVU2hD3_SuF88nkqK4EjMLrviiI8FSX3AC1AFMUN',
        'http://www.cornel1801.com/animated/Princess-Mononoke-1997/pictures/15.jpg',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png',
        'https://www.adhesivosnatos.com/wp-content/uploads/2016/08/totoro-sentado-570x600.png'
    ];

    $("#films").click(function () {
        console.log("personajes")
        
        $('#container').html('');
        
        loadMovies()
    });

    $("#orderFilms").click(function () {
        console.log("ordenar")
        ordenar = true;
        $('#container').html('');
        loadMovies()

      
    });


    $("#people").click(function () {
        console.log("personajes")
        loadPeoples();
       

    });

    loadMovies()

    function loadPeoples() {
        $('#container').html('');
        let settingsPeople = {
            "async": true,
            "crossdomain": true,
            "url": 'https://ghibliapi.herokuapp.com/people',
            "method": 'GET',
            "headers": {
                "Contents-Type": "aplicaction/json"
            }
        }
        $.ajax(settingsPeople).done(function (response) {
            $(response).each(function (item) {

                let cardMovie = `

                        <div class="card">
                            <img src= "${imgPeople[item]}"> </img>
                            <h1>${this.name}</h1>
                            <h2>Genero ${this.gender}</h2>
                            <h3>Pertenece a : <br> ${this.films}</h3>
                        </div>`


                $('#container').append(cardMovie);

            })

        })

    }


    function loadMovies() {
        let settingsAPI = {
            "async": true,
            "crossdomain": true,
            "url": 'https://ghibliapi.herokuapp.com/films',
            "method": 'GET',
            "headers": {
                "Contents-Type": "aplicaction/json"
            }


        }
        $.ajax(settingsAPI).done(function (response) {
            let query = [];
            if (ordenar) {
                query = Enumerable.From(response)
                    .OrderByDescending("$.rt_score").ToArray();
                response = query
            } else {
                query = Enumerable.From(response).ToArray()
                response = query
            }
            console.log(query);
            



            $(response).each(function (item) {
                var id = this.id
                
                
                let cardMovie = `
           
                     
           <div class="card">
                  <img src= "${image[id]}"> </img>
                  <h1>${this.title}</h1>
                  <h2>Score ${this.rt_score}</h2>
                  <h3>Fecha : ${this.release_date}</h3>
                  <p>${this.description.substring(0, 300)}</p>
           </div>`
                if (ordenar) {

                    $('#container').append(cardMovie);
                } else {
                    $('#container').append(cardMovie);
                }


            })
        })
    }
})