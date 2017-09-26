var mainElement = document.querySelector('main');
//
function loadPeople(done) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://swapi.co/api/people/', false);
  xhttp.send();
  var response = JSON.parse(xhttp.responseText);
  done(response);
  /*
    fill here
    ---------
    - make a GET request to: 'https://swapi.co/api/people/'
    - call the function "done" and pass it the result of the request
  */
}
//
function renderPeople(data) {
  var people = data.results;
  console.log(people);
  people.forEach(function(person) {
    var sectionElement = document.createElement('section');
    sectionElement.classList.add('person');
    var genderSign = '';
    switch(person.gender) {
      case 'male':
        genderSign = '\u2642';
        break;
      case 'female':
        genderSign = '\u2640';
        break;
      default:
        genderSign = '?';
        break;
    }
    sectionElement.innerHTML = `<header><h1>${person.name} <span class='gender'>${genderSign}</span></h1></header>
                                <div>
                                  <ul>
                                    <li><span class='label'>Birth Year:</span><span class='value'>${person.birth_year}</span></li>
                                    <li><span class='label'>Eye Color:</span><span class='value'>${person.eye_color}</span></li>
                                    <li><span class='label'>Skin Color:</span><span class='value'>${person.skin_color}</span></li>
                                    <li><span class='label'>Hair Color:</span><span class='value'>${person.hair_color}</span></li>
                                    <li><span class='label'>Height:</span><span class='value'>${(person.height/100)}m</span></li>
                                    <li><span class='label'>Mass:</span><span class='value'>${person.mass}kg</span></li>
                                  </ul>
                                </div>`;
    mainElement.appendChild(sectionElement);
  });
  /*
    fill here
    ---------
    For each given people (use a loop or Array.forEach())
    - create a section element (with the document.createElement())
    - fill the innerHTML (maybe have a look at template literals) of the section with:
      - A header tag which has
        - A h1 tag containing the name of the person
      - A div tag which has a list of the following information:
        - Birth Year
        - Eye Color
        - Skin Color
        - Hair Color
        - Height
        - Mass
        The list items have 2 children span
        (one with the class "label" and the other with the class "value")
      - Add the section element to the main element of the index.html
  */
}
// call the loadPeople with the renderPeople function as parameter
loadPeople(renderPeople);