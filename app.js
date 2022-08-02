// Тоглоомын төлөвийн хувьсагч
var gameOver;

// Тоглогчийг хадгалагч
var activePlayer;
// Хоёр тоглогчийн цуглуулсан оноонууд
var scores;
// Идэвхтэй тоглогчийн цуглуулж байгаа ээлжийн оноо
var roundScore;
// ДОМ дотроос шоог олж сонгох
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлэх
initGame();

// Тоглоомыг шинээр эхлэхэд бэлгэх
function initGame() {
  // Тоглоом эхэлсэн төлөв
  gameOver = false;

  // Тоглогчийг заах
  activePlayer = 0;

  // Тоглогчдийн цуглуулсан оноо
  scores = [0, 0];

  // Тоглогчийн цуглуулсан ээлжийн оноо
  roundScore = 0;

  // Дэлгэц дээрх оноонуудийг тэглэх
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчийн нэрийг буцаах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  // Нэрийн загварыг буцаах
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  // Эхний тоглогчийг идэвхжүүлнэ
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  // Шооны зургыг дэлгэц дээр байхгүй болгох
  diceDom.style.display = "none";
}

// Товч дарах үед шоог орхих
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameOver === false) {
    // 1-6 доторх санамсаргүй тоог гаргана.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зурагыг гаргана.
    diceDom.style.display = "block";

    // Буусан шооны тоотой зургыг гаргана.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Шоо орхиж ээлжийн оноогоо цуглуулах
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      swichPlayer();
    }
  } else {
    alert(
      "Тоглоом дууссан байна. Шинээр эхлэх бол NEW GAME товч дээр дарна уу."
    );
  }
});

// Hold  товчийг дарах үйлдэл
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameOver === false) {
    // Уг ээлжийн оноог цуглуулах
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэцийн оноог өөрчилнө
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Тоглогч хожсон эсэх
    if (scores[activePlayer] >= 10) {
      // Тоглоомын төлөв өөрчлөгдөнө
      gameOver = true;

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
  } else {
    alert(
      "Тоглоом дууссан байна. Шинээр эхлэх бол NEW GAME товч дээр дарна уу."
    );
  }
});

// Тоглогчийг солих
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
document.querySelector(".btn-new").addEventListener("click", function () {
  initGame();
});
