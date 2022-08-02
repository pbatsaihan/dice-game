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

  // Тоглогчийн
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
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
});
