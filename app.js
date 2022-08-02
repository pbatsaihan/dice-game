// Тоглогчийн ээлжийг хадгалагч
var activePlayer = 1;

// Тоглогчийн цуглуулсан оноог хадгалагч
var scores = [0, 0];

// Тоглогчийн цуглуулсан ээлжийн оноог хадгалагч
var roundScore = 0;

// Шооны буусан оноог хадгалагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

// DOM element
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes</em>";

document.querySelector(".dice").style.display = "none";

// Тогломоо эхлэхэд бэлтгэе
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;

window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

console.log("Шоо:" + dice);
