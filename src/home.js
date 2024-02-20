import theRock from './images/rock.jpg';
import cedar from './images/cedar.jpg';
import thousand from './images/thousandyard.jpg';

const origin = document.querySelector("div#content");

const intro = document.createElement('div');
intro.classList.add('intro');
const h2 = document.createElement('h2');
h2.innerHTML = "The Resting, Welcome Home";
const introParag = document.createElement('p');
introParag.innerHTML = "A group of young individuals with an idea, which has now flourished into the comfiest place to relax, study, or chill with your friends!";

intro.appendChild(h2);
intro.appendChild(introParag);

const h3 = document.createElement('h3');
h3.innerHTML = "This Week's offers";

const offersTitle = ['The Rock Bite', 'The Cedar Special', 'ȟ̷̶̛̪̳̳̭̲̥͓̼̳̬̼͇̀̉̅ͭͦ̾͋̇͑̔͜ĕ̵̴͇͈̭̤͈̦͙̰̤̖͔͚̬̆ͯ̾̎͑ͫ̀̏̽̍͒͒̆̏ͭ̊̿̈̍̈́̚̚͟͡ͅr̨̡̛̼͕̯͎ͪ͒͑ͬ̈̕̕͠e̺͉͔̫̱̬̓ͣ̐̾ͩ͆ͯ̈̾ͭ i̴̵̘̤͈̞͓̤͖͘͢͠s̢̝̹̘̯̖̠̬̬̲̘̤͎̙̹͈͖̳̱͙̝ͣ̓̈̓͐̐̽̅̏̍͌ͫ̑̆̚̕ ņ̴̧̢̯̝͖͈͉̥̬̺͇̠͉̜̬̄ͪ̽̾ͦ̉̔͆̚͠͞o̶̷̶̴̫͙̟͎̗̲̰͛̀͛ͦ̿͗͘̕ g̙̘ͤ͝o̶̶̡̮̻̙̼͕̼̩͔ͣ͗̋ͣ̈́ͬ̅̉͋̐̕̚̕̕͘͢͜͠͠͝͡i͇̋̔ǹ̷̡̰̩̗̱̝͗ͦ̅g̷̼ͯ̎̎͜ b̴̶̡̧̛̤̺͇͈̥̳͚̩͔̱̳̙͗̋ͩͯͪ͗̒̋̓ͬ͗͊͋̑̈̈̈ͮ̓͒ͤͪ̕̕͢͞͡ͅa̷̷̡͙̺͖̖̳̱̻̬̱͕̤̟̼͔͆̈́ͦ̏̉ͣͩ́͑̋͂͒͒ͣͥ̋ͥ͑̍͢͢͟͜͡ͅc̸̜̍ͤ_̨͎k̷̷̢̡̻̦̯̯̫̱̯̩̹̖͖͎̋̀ͫ̿̉͆̾ͤ͂ͧ͌̏̓̀̓̽̾́̈̆͑̚͢͢͢͡͝<'];
const offersDesc = [
    "The highest cheese mountain you've ever seen! With a mix of chicken, mayonnaise and potato fries, this dish isn't for the faint of heart!",
    "The chef's special! A mix of Lebanese ingredients and foods to bring you the most refined of plates!",
    "helpmethevoicesaregettinglouder"
]
const offersImg = [theRock, cedar, thousand];

const offers = document.createElement('div');
for (let i = 0; i < 3; i++) {
    const offer = document.createElement('div');
    const img = document.createElement('img');
    img.src = offersImg[i];
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.innerHTML = offersTitle[i];
    const parag = document.createElement('p');
    parag.innerHTML = offersDesc[i];

    div.appendChild(h4);
    div.appendChild(parag);
    offer.appendChild(img);
    offer.appendChild(div);

    offer.classList.add('offer');
    offers.appendChild(offer);
}

function renderHome() {
    origin.appendChild(intro);
    origin.appendChild(h3);
    origin.appendChild(offers);
}

export {renderHome};