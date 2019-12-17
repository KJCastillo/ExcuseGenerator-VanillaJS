/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  var who = ["The Batman ", "The Avengers ", "The Mandalorian ", "Baby Yoda "];
  var verb = [" desintegrated ", " ate ", " confiscated ", " blew up "];
  var what = [
    " my laptop ",
    " my car ",
    " my christmas tree ",
    "my playstation  "
  ];
  var when = [" yesterday!", " this morning!", " just now!", " last night!"];

  var name = who[Math.floor(Math.random() * who.length)];
  var action = verb[Math.floor(Math.random() * verb.length)];
  var item = what[Math.floor(Math.random() * what.length)];
  var time = when[Math.floor(Math.random() * when.length)];

  var sentence =
    "But i can't make it to class because " +
    name +
    action +
    item +
    time +
    " Can you believe it?!";

  return sentence;

  //   document.querySelector("#btn").addEventListener("click", () => {
  //     document.querySelector("#excuse").innerHTML = sentence;
  //   });
}
