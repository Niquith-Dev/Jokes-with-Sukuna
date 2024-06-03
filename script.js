

const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke(){

    jokeBtn.disabled = true;

    const message = createMsgElement("Ayy yoo Nigga tell me a joke!! ");
    appendMsg(message);

    const joke = createMsgElement();
    setElementContent(joke, '<i class="fa-solid fa-ellipsis"></i>' );
    appendMsg(joke);

    const res = await fetch("https://icanhazdadjoke.com", {
        headers:{
            Accept: "application/json",
        },
    });

    if(res.ok){
        const data = await res.json();
        console.log(data);
        setElementContent(joke, data.joke);
        jokeBtn.disabled = false;
    }

}


function createMsgElement(content){
    const element = document.createElement("div");
    element.classList.add("message");
    if(content){
        element.classList.add("response");
        setElementContent(element, content);
    }else{
        element.classList.add("joke");
    }

    return element;

}


function setElementContent(element, content){
    element.innerHTML = content;

}


function appendMsg(element){
    chat.appendChild(element);

}