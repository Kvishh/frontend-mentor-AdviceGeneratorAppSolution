const api = "https://api.adviceslip.com/advice";

const advice = document.querySelector(".advice");
f();
// fetch(api)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         advice.textContent = data.slip.advice;
//     });

async function f() {
    const resp = await fetch(api);

    const myJson = await resp.json();
    
    advice.textContent = myJson.slip.advice;
}