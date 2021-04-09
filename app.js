var buttonTranslate = document.querySelector("#btn");
var text = document.querySelector("#txt");
var output = document.querySelector("#output");

// var url= `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json`
var serverURL = `https://api.funtranslations.com/translate/minion.json`;

function getTranslatedURL(istext) {
  return `${serverURL}?text=${istext}`;
}

const errorHandler = (error) => {
  console.log(`error occured ${error}`);
  alert("something is wrong with server please try again");
};

function clickEventHandler() {
  var textAreaInput = text.value;
  fetch(getTranslatedURL(textAreaInput))
    .then((res) => res.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch(errorHandler);
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
