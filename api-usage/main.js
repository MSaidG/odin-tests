import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
// import './node_modules/dotenv/config.js' 


// document.querySelector('#app').innerHTML = `
// <div>
// <a href="https://vitejs.dev" target="_blank">
// <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>
// <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// </a>
// <h1>Hello Vite!</h1>
// <div class="card">
// <button id="counter" type="button"></button>
// </div>
// <p class="read-the-docs">
// Click on the Vite logo to learn more
// </p>
// </div>
// `

const keyGif = import.meta.env.VITE_GIPHY_API_KEY
const keyWeather = import.meta.env.VITE_WEATHER_API_KEY
const img = document.getElementById('cat');
const p = document.getElementById('weather');

function getCat()
{
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${keyGif}&s=cats`, {})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  }).catch(function(err) {
    console.log(err.message)
    img.src = "#"
  });
}

async function getTheCat()
{
  try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${keyGif}&s=cats`, {})
    let responseJSON = await response.json()
    img.src = responseJSON.data.images.original.url
  }
  catch (err) {
    console.log(err.message)
  }

}

fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ankara?unitGroup=metric&key=${keyWeather}&contentType=json`, {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  return response.json();
})
.then(response => {
  p.textContent = response.days[0].conditions
})
.catch(err => {
  console.error(err);
});

getCat()

const button = document.getElementById("get")
button.addEventListener("click", () => getTheCat())
// setupCounter(document.querySelector('#counter'))
