// Тоглогчийн ээлжийг хадгалагч
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалагч
var scores = [0, 0];

// Тоглогчийн цуглуулсан ээлжийн оноог хадгалагч
var roundScore = 0;

// Шооны буусан оноог хадгалагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Тогломоо эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Товч дарах үед шоог орхих
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй тоог гаргана.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зурагыг гаргана.
  diceDom.style.display = "block";

  // Буусан шооны тоотой зургыг гаргана.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Шоо орхиж ээлжийн оноогоо цуглуулах
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    swichPlayer();
  }
});

// Hold  товчийг дарах үйлдэл
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг ээлжийн оноог цуглуулах
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Дэлгэцийн оноог өөрчилнө
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Тоглогч хожсон эсэх
  if (scores[activePlayer] >= 10) {
    // Ялагчийн нэрийг солино, загварыг өөрчилнө
    document.getElementById("name-" + activePlayer).textContent = "WINNER!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Тоглогчийн ээлжийг солино
    swichPlayer();
  }
});

function swichPlayer() {
  // Энэ тоглогчийн оноог тэглэнэ.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Идэвхтэй тоглогчийг солих
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг солих
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгох
  diceDom.style.display = "none";
}

// Шинээр эхлүүлэх товчийг ажиллуулах
document.querySelector(".btn-new").addEventListener("click", function () {});
