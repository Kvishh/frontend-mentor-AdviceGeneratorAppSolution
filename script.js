const api = "https://api.adviceslip.com/advice";
const advice = document.querySelector(".advice");
const id = document.querySelector(".id");
const button = document.querySelector(".dice");
fetchAPI();
button.addEventListener("click", fetchAPI);

async function fetchAPI() {
    const resp = await fetch(api);

    const myJson = await resp.json();
    console.log(myJson);

    id.textContent = myJson.slip.id;
    advice.textContent = `"${myJson.slip.advice}"`;
}
