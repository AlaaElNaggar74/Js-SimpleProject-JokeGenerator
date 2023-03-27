let butt = document.getElementById("butt");
let paa = document.getElementById("paa");

let urrl = "https://api.api-ninjas.com/v1/dadjokes?limit=";
let apii = "cEIJo1oALB7TzpwNtasw3w==4yoGJFKNo9LShjkr";
let objj = {
  method: "GET",
  headers: { "X-Api-Key": apii },
};
async function getjok() {
  try {
    paa.innerHTML = "Loading Joke....";
    butt.disabled = true;
    const resp = await fetch(urrl, objj);
    const arrr = await resp.json();
    paa.innerHTML = arrr[0].joke;
    butt.disabled = false;
  } catch (error) {
    paa.innerHTML = "Error We Are Sorry";
  }
}

butt.addEventListener("click", getjok);
