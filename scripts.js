//*****************  CONNECT TO API ******************
//create a request variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest;
//open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function() {
  //begin accessing json data here
  //console.log("api loaded");
  //access JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // log each movie's title and description
      // console.log(movie.title);
      // console.log(movie.description);

      //create a div with a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      //create an h1 and set the text content to the films title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      //create a p and set the text content to the films description
      const p = document.createElement('p');
      //limit description to 300 characters
      movie.description = movie.description.substring(0, 300);
      //end with ellipses
      p.textContent = `${movie.description}...`;

      //append the cards to the container element
      container.appendChild(card);

      //each card will contain an h1 and new Promise(function(resolve, reject) {
      card.appendChild(h1);
      card.appendChild(p);
      });
    // });
  } else {
    // console.log('error');
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
//send request
request.send();


//***************** DOM elements *******************

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
