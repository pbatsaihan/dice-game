// Тоглогчийн ээлжийг хадгалагч
var activePlayer = 1;

// Тоглогчийн цуглуулсан оноог хадгалагч
var scores = [0, 0];

// Тоглогчийн цуглуулсан ээлжийн оноог хадгалагч
var roundScore = 0;

// Шооны буусан оноог хадгалагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Тогломоо эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
