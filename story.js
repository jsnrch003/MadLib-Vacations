
// 1. Declare variables and capture input.
alert(`This MadLib is about Vacations.`);
alert(`Get ready to enter a bunch of variables.`)
const adjective1 = prompt(`Give me an adjective.`);
const adjective2 = prompt(`Give me an another adjective.`);
const noun1 = prompt(`Give me a noun.`);
const noun2 = prompt(`Give me a another noun.`);
const pluralNoun1 = prompt(`Now I need a plural noun.`);
const game1 = prompt(`Give me a game.`);
const pluralNoun2 = prompt(`Give me a another plural noun.`);
const verbEndingInIng1 = prompt(`How about a verb ending in "-ing"?`);
const verbEndingInIng2 = prompt(`Another verb ending in "-ing".`);
alert(`Half way done...`);
const pluralNoun3 = prompt(`I need a plural noun again.`);
const verbEndingInIng3 = prompt(`Give me a verb ending in "-ing".`);
const noun3 = prompt(`Give me a noun.`);
const plant1 = prompt(`Give me a type of plant.`);
const partOfTheBody1 = prompt(`Give me a part of the body.`);
const aPlace1 = prompt(`Give me a place.`);
const verbEndingInIng4 = prompt(`Give me one more verb ending in "-ing".`);
const pluralNoun4 = prompt(`Give me one more verb ending in "-ing".`);
alert(`just a few more...`);
const adjective3 = prompt(`Give me an adjective.`);
const number1 = prompt(`Give me a number.`);
const pluralNoun5 = prompt(`and finally, one last plural noun.`);

// 2. Combine the input with other words to create a story.
const vacationsMadLib = (`<p>A vacation is when you take a trip to some <span class="const">${adjective1}</span> place with your <span class="const">${adjective2}</span> family. Usually you go to some place that is near a <span class="const">${noun1}</span> or up on a <span class="const">${noun2}</span>. <br> A good vacation place is one where you can ride <span class="const">${pluralNoun1}</span> or play <span class="const">${game1}</span> or go hunting for <span class="const">${pluralNoun2}</span>. I like to spend my time <span class="const">${verbEndingInIng1}</span> or <span class="const">${verbEndingInIng2}</span>. <br> When parents go on a vacation, they spend their time eating <span class="const">${pluralNoun2}</span> while <span class="const">${verbEndingInIng3}</span>. Last summer, my sibling fell in a <span class="const">${noun3}</span> and got poison <span class="const">${plant1}</span> all over his <span class="const">${partOfTheBody1}</span>. <br> My family is going to go to (the) <span class="const">${aPlace1}</span>, and I will have all the <span class="const">${verbEndingInIng4}</span> <span class="const">${pluralNoun4}</span> that I want. Parents need vacations more than kids because parents are always very <span class="const">${adjective3}</span> and because they have to work <span class="const">${number1}</span> hours every day all year making enough <span class="const">${pluralNoun5}</span> to pay for the vacation.</p><h3>Refresh the page to play again.</h3>`)

// 3. Display the story as a <p> inside the <main> element.
document.querySelector(`main`).innerHTML = vacationsMadLib;
