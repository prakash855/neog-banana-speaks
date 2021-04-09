var buttonTranslate = document.querySelector("#btn");
var text = document.querySelector("#txt");
var output = document.querySelector("#output");

function clickEventHandler() {
  output.innerText = `now this can be outputted here too => ${text.value}`;
}

buttonTranslate.addEventListener("click", clickEventHandler);

// this is what I have done it my way to fetch the data for all three superheroes

// const text1 = "Iron Man",
//   text2 = "Superman",
//   text3 = "shaktiman";
// function constructURL(textt) {
//   return `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textt}`;
// }

// function doFetch(url) {
//   fetch(constructURL(url))
//     .then((res) => res.json())
//     .then((json) => console.log(json.contents.text));
// }
// let arr = [doFetch(text1), doFetch(text2), doFetch(text3)];
// arr.forEach((e) => console.log(e));
