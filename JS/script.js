//Declare Variables

//Add event listeners/call functions
document.getElementById("getConsoles").addEventListener("click", LoadConsoles);

//Functions
function LoadConsoles() {
    //Declare Variables
    let loadingMessage = document.getElementById("loadingMessage");
    let errorMessage = document.getElementById("errorMessage");

    //Set up the XMLHttpRequest object and make the call.
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState != 4) {
            loadingMessage.textContent = "loading consoles...";
        }

        else {
            loadingMessage.textContent = "";
        }

        if(xhr.readyState == 4) {
            //Check for a good response, and if so, create the cards.
            if(xhr.status === 200) {
                //Clear out any cards currently existing
                document.getElementById("consoleList").replaceChildren();

                let consoleList = JSON.parse(xhr.responseText);
                let consoleArray = consoleList.consoles;

                for(let i = 0; i < consoleArray.length; i++) {
                    //Create the console's card.
                    let card = document.createElement("card");
                    card.classList = "card";

                    //Build the card's content.
                    let heading = document.createElement("h2");
                    heading.textContent = consoleArray[i].name;

                    let year = document.createElement("p");
                    year.textContent = consoleArray[i].year;

                    let img = document.createElement("img");
                    img.src = consoleArray[i].image;
                    img.alt = consoleArray[i].name;

                    //Style the content.
                    heading.style.textDecoration = "underline";
                    img.style.width = "500px";
                    img.style.height = "auto";

                    //Add the content to the card.
                    card.append(heading);
                    card.append(year);
                    card.append(img);

                    //Add the card to the webpage.
                    document.getElementById("consoleList").append(card);
                }
            }

            else if(xhr.status != 200) {
                errorMessage.textContent = `Error: ${xhr.readyState}, ${xhr.statusCode}, ${xhr.status}`;
            }
        }
    }
}