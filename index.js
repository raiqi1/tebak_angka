alert(`Selamat datang Pada game tebak angka`);
let skor1 = 0;
let skor2 = 0;
let ronde = 1;
let stop = true;

while (stop) {
  let p1 = parseInt(prompt("Player 1: wajib di  masukan angka"));
  let p2 = parseInt(prompt("Player 2: wajib masukan angka"));

  let random = getRandom();
  let ulangi = validasi(p1, p2);
  if (!ulangi) {
    stop = window.confirm("Ulangi?");
  } else {
    if (p1 !== random && p2 !== random) {
      alert("Tidak ada yang benar. hasil DRAW");
    } else {
      if (p1 === random) {
        alert("Player 1 Win");
        skor1++;
      }
      if (p2 === random) {
        alert("Player 2 Win");
        skor2++;
      }
    }

    alert(`
    Nilai yang dicari: ${random}
    -----------------------------------
    - Player 1: ${skor1}
    - Player 2: ${skor2}`);

    ronde++;
    if (ronde <= 3) {
      stop = window.confirm("Ronde " + ronde + "?");
    } else {
      if (skor1 > skor2) {
        alert("Good Jobs Player 1");
        stop = false;
      } else if (skor1 < skor2) {
        alert("Good Jobs Player 2");
        stop = false;
      } else {
        alert(`Wow pertarungan yang biasa saja hehehehe`);
        ronde = 1;
        skor1 = 0;
        skor2 = 0;
        stop = window.confirm("mau main lagi?");
      }
    }
  }
}

function validasi(player1, player2) {
  if (player1 === player2) {
    alert("tebakan tidak boleh sama");
    return false;
  }

  if (player1 < 1 || player2 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  }

  if (player1 > 3 || player2 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }

  if (isNaN(player1) || isNaN(player2)) {
    alert("salah satu player belum menebak");
    return false;
  }

  return true;
}

function getRandom() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  while (isNotRandom) {
    let random = Math.floor(Math.random() * 10);
    let ketemu = range.find((r) => r === random);
    if (ketemu) {
      isNotRandom = false;
      return random;
    }
  }
}

console.log(getRandom());
