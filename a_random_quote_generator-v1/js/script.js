/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat




/*** 
 * `quotes` array 
***/

//Object-Array to house all the quotes with thier properties
const quotes = [
{ quote: "The happiness of your life depends upon the quality of your thoughs.", 
  source: "Marcus Aurelius",
  citation: "Meditations",
  year: 1996,
  tag: "Philosophy"
  
},
{
  quote:  "You know what capitalism is? Getting ...!", 
  source: "Tony Montana",
  citation: "Scarface the Movie",
  year: 1983,
  tag: "Humor"


},
{
  quote: "That which does not kill us makes us stronger.", 
  source: "Friedrich Nietzche",
  citation: "Maxims and Arrows",
  year: "",
  tag: "Philosphy"


},
{
  quote: "We know what we are, but know not what we may be", 
  source: "Shakespeare",
  citation: "",
  year: "",
  tag: "Theater" 

},
{
  quote: "Knowing yourself is the begininng of all wisdom", 
  source: "Aristole",
  citation: "",
  year: "",
  tag: "Philosphy"
}
]

/***
 * `getRandomQuote` function
***/ 

//Returns a random object from the quotes array by default, i've added a parameter to generate random color points
function getRandomQuote (para = quotes ){

if (isNaN(para)){  
  var rnd = Math.floor(Math.random() * para.length) ; 
} else {
  var rnd = Math.floor(Math.random() * para); 
  return rnd
}
return para[rnd]

}

//Generates the css string for style background 
//Resource of help for  https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function getRandomColor (){

rndColor = `rgb(${getRandomQuote(256)},${getRandomQuote(256)},${getRandomQuote(256)})`

return rndColor;

}


/***
 * `printQuote` function
***/

//Generates the HTML string of the random quote Excludes empty citations and year property from the quotes array object. 
function printQuote (){

  let quo = getRandomQuote();

  let html = `<p class="quote"> ${quo.quote} </p>
                <p class="source"> ${quo.source}`;

  
  if (quo.citation){
      html += `<span class="citation"> ${quo.citation} </span>`;
  } 
  if (quo.year) {
      html += `<span class="year"> ${quo.year} </span>`;
  }
  if (quo.tag) {
    html += `<span class="tag">${quo.tag}</span>`;
  }
  html += "</p>"; 
  
  document.body.style.background = getRandomColor();
  document.getElementById('quote-box').innerHTML = html,10000;
}




setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);