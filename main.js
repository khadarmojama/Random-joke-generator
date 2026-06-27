const joke = {
    setup: "What is yellow and can't swim",
    delivery: "A bus full of children"
}

// API
const API_URL = "https://v2.jokeapi.dev/joke/Programming?type=twopart"

function fetchJoke(){
    return axios.get(API_URL)
        .then( (response) => response.data)
        .catch((error) => console.log(error))
}

function createJokeCard(joke){
    // step 1: get the parent element 
    const parentElementOfTheJoke = document.querySelector("#jokeContainer");

    // step 2 clear the existing joke
    parentElementOfTheJoke.innerHTML = ''


    const jokeDiv = document.createElement("div")
    jokeDiv.className = "joke-card"

    // step 4 create first child

    const firstChild = document.createElement("p")
    firstChild.className = "joke-setup"
    firstChild.textContent = joke.setup

    // step 5 create second child

    const secondChild = document.createElement("p")
    secondChild.className = "joke-delivery"
    secondChild.textContent = joke.delivery


    // step 6 Append all elements
    parentElementOfTheJoke.append(jokeDiv);
    jokeDiv.append(firstChild, secondChild);

    return parentElementOfTheJoke
}

// Create a small function that connects fetch joke and createJokeCard functions

function displayJoke(){
    fetchJoke()
        .then((data)=>{
            createJokeCard(data)
        })
}

const newJokeBtn = document.querySelector(".new-joke-btn")

newJokeBtn.addEventListener('click', displayJoke)
createJokeCard(joke)