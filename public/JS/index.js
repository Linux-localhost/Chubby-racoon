
const UID = {
  _current: 0,
  getNew: function() {
    this._current++;
    return this._current;
  },
};


HTMLElement.prototype.pseudoStyle = function(element, prop, value) {
  const _this = this;
  const _sheetId = 'pseudoStyles';
  const _head = document.head || document.getElementsByTagName('head')[0];
  const _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  const className = 'pseudoStyle' + UID.getNew();

  _this.className += ' '+className;
  _sheet.innerHTML += '\n.'+className+':'+element+'{'+prop+':'+value+'}';
  _head.appendChild(_sheet);
  return this;
};


window.onload = function() {
  weatherBalloon(2759794); // Amsterdam
};

function weatherBalloon(cityID) {
  const key = 'a807ac1b2374a10b9edc07dd13418814'; // Api key
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key) // Fetch data met url
      .then(function(resp) {
        return resp.json();
      }) // Convert data to json
      .then(function(data) {
        drawWeather(data); // voer functie drawWeather uit
      })
      .catch(function() {
        // catch any errors
      });
}

const array = [];
const searchTerms = {
  Winter: 'winter kiss',
  Summer: 'Summer kiss',
  Autum: 'Autumn kiss',
};

async function drawWeather(d) {
  const image = document.querySelector('.cta');
  const celcius = Math.round(parseFloat(d.main.temp) - 273.15); // Reken uit naar celcius

  if (celcius > 16 || celcius == 16) {
    await SearchPhotos(searchTerms.Summer);
    const pickRandom = Math.floor(Math.random() * array.length);
    // eslint-disable-next-line quotes
    image.pseudoStyle('before', 'background', 'url(' + array[pickRandom] + ') no-repeat center center /cover');
  } else if (celcius > 10 && celcius < 12) {
    await SearchPhotos(searchTerms.Autum);
    // eslint-disable-next-line quotes
    const pickRandom = Math.floor(Math.random() * array.length);
    image.pseudoStyle('before', 'background', 'url(' + array[pickRandom] + ') no-repeat center center /cover');
  } else {
    await SearchPhotos(searchTerms.Winter);
    // eslint-disable-next-line quotes
    const pickRandom = Math.floor(Math.random() * array.length);
    image.pseudoStyle('before', 'background', 'url(' + array[pickRandom] + ') no-repeat center center /cover');
  }
}

async function SearchPhotos(query) {
  const clientId = '7_I2_eqOL7SqtjVSdqeKxZYRziIsOVciO9AsUO48nwM';
  const url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${query}`;

  // Make a request
  await fetch(url)
      .then(function(data) {
        return data.json();
      })

      .then(function(data) {
        for (let i = 0; i < data.results.length; i++) {
          array.push(data.results[i].urls.regular);
        }
      });
}

