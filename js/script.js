/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// AIMING FOR EXCEEDS EXPECTATIONS



/***
Array quotes created to hold the quote objects.Each object has a max of 5 values( additional added for exceeds expectations category)
They arent neccesarily shared by all objects
(some could be 2 values only.)
***/
let quotes = [
    {
        quote:"Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact. It's an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing",
        source:"-Muhammad Ali",
        citation:"2004 February 9, Sports Illustrated, Volume 100, Number 5",
        year:2004,
        interest:"Sports Quotes"
    },
    {
        quote:"You miss 100% of the shots you dont take",
        source:"-Wayne Gretzky",
        interest:"Sports Quotes"
    },
    {
        quote:"The Mind is everything.What you think you become",
        source:"-Buddha",
        citation:"unknown origin",
        interest:"Philosophy Quotes"
    },
    {
        quote:"The best time to plant a tree was 20 years ago. The second best time is now",
        source:"-Chinese Proverb",
        citation:"unknown origin- reference book- The Trust Edge and Lifeology",
        interest:"Philosophy Quotes"
    },
    {
        quote:"An unexamined life is not worth living.",
        source:"-Socrates",
        citation:"Plato's Apology (38a5–6)",
        year: "399BC",
        interest:"Philosophy Quotes"
    },
    {
        quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma -- which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They some how already know what you truly want. Everything else is secondary",
        source:	"-Steve Jobs",
        citation:"Steve Jobs commencement address, Stanford June 2005",
        year: 2005,
        interest:"Technology Quotes"
    },
    {
        quote:"Success is going from failure to failure without losing your enthusiasm.",
        source:"-Winston Churchill",
        interest:"Philosophy Quotes"
    },
    {
        quote:"Every moment is a fresh beginning.",
        source:"-T.S. Eliot",
        interest:"Philosophy Quotes"
    },
    {
        quote:"Don’t wait. The timing will never be just right.",
        source:"-Napoleon Hill 1883-1970",
        citation:"think and grow rich",
        interest:"Philosophy Quotes"
    },
    {
        quote:"we must live the changes we want to see in the world..",
        source:"-Mahatma Gandhi",
        interest:"Philosophy Quotes"
    },
    {
        quote:"Every individual is an exception to the rule.",
        source:"-Carl Jung",
        citation:"Problems of Personaliy",
        year: "1925",
        interest:"Psychology Quotes"
    },
    {
        quote:"Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won’t come in.",
        source:"-Isaac Assamov",
        interest:"Philosophy Quotes"
    },
    {
        quote:"Part of the Inhumanity of the Computer Is That Once It Is Competently Programmed and Working Smoothly—It Is Completely Honest",
        source:"-Isaac Asamov",
        citation:"Change! Seventy-One Glimpses of the Future",
        interest:"Philosophy Quotes"
      }


  ];
let timeAmount=20000;
// the "setTimer" function runs the "printQuote" function at an interval set by timeAmount, it stores the returned value in "timer"
var timer;
function setTimer(){
timer =  window.setInterval(printQuote,timeAmount);
}

//The "stopTimer" function clears the interval value saved in the "timer" variable, then it resets the timer back to the value held in "TimeAmount"
function stopTimer(){
  window.clearInterval(timer);
timer =  setInterval(printQuote,timeAmount);
}
/***
  Created a Function to generate a random number using the length of the quotes array as a guide.
  The number generated is stored in the RandomNumber Variable and used as a location in the quotes array.
  there was no +1 at the end of the Math.random as arrays start at 0. Adding 1 would ignore the first array value stored at array[0]
***/

function getRandomQuote(){
  let RandomNumber= Math.floor(Math.random()*quotes.length);
  return quotes[RandomNumber];
};
//console.log(getRandomQuote());    - tested that function is working as it is meant to function accesses each quote properly.

/***function created to generate a random color, First attempt used RGB color for this, however colors provided were often neon and diffuclt to read.
instead I replaced the (R)ed(G)reen(B)lue  with a (H)ue(S)aturation(L)ight color scheme. This allowed better control over color so that I could
match the color provided by default.The hsl provided warmer softer more pastel colors consistently.***/
function backgroundColorR(){
  let color1 =Math.floor(Math.random() * 360);
  let color2 =50;
  let color3 =60;
  colorRGB = `hsl(${color1},${color2}%,${color3}%)`;
  document.body.style.background = colorRGB;
}

/***
  printQuote function added
  - created a variable "random1" to hold the random quote generated by calling "getRandomQuote()"
  - variable "listHTML" created to hold the concatenated string which contains the key information for each object.
  - if statements created to check whether the object contains a year and a citation and add info accordingly to the "listHTML" string value.
  - listHTML final value added into "quote-box" element on the page.
***/
function printQuote (){
  let random1 =  getRandomQuote();
  let listHTML= ' ';
      listHTML+= `<p class="quote"> ${random1.quote} </p>
<p class="source"> ${random1.source}`
if(random1.citation){
  listHTML += `<span class="citation"> ${random1.citation} </span>`
        }
if(random1.year){
  listHTML += `<span class="year"> ${random1.year} </span>`
        }
if(random1.interest){
          listHTML += `<span class="interest"> ${random1.interest} </span>`
        }
    listHTML += `</p>`;
    document.getElementById('quote-box').innerHTML= listHTML;
    backgroundColorR();
}
/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

/***calling setTimer to start the counter for running printQuote, below the second click event will call the stopTimer function
this will clear the timer and reset it each time you click the button to show a new quote. This is to avoid showing a new quote
and have the timer change it 2 seconds later rather than waiting the full 20 seconds.

setTimer is called initially so that it activates on page load rather than waiting for the first click event on "show another quote" button.
***/
setTimer();
document.getElementById('loadQuote').addEventListener("click", printQuote,false);
document.getElementById('loadQuote').addEventListener("click", stopTimer,false);
