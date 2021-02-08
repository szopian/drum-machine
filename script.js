function play(str) {
  if (str === "q" || str === "Q") {
    document.getElementById("display").innerHTML = "Boat Horn";
  } else if (str === "w" || str === "W") {
    document.getElementById("display").innerHTML = "Camera Click";
  } else if (str === "e" || str === "E") {
    document.getElementById("display").innerHTML = "Dropping A Wrench";
  } else if (str === "a" || str === "A") {
    document.getElementById("display").innerHTML = "Goodbye";
  } else if (str === "s" || str === "S") {
    document.getElementById("display").innerHTML = "Gun Silencer";
  } else if (str === "d" || str === "D") {
    document.getElementById("display").innerHTML = "Gun Shot";
  } else if (str === "z" || str === "Z") {
    document.getElementById("display").innerHTML = "Hello";
  } else if (str === "x" || str === "X") {
    document.getElementById("display").innerHTML = "Jaguar";
  } else if (str === "c" || str === "C") {
    document.getElementById("display").innerHTML = "Whip Crack";
  }

  let audio = document.getElementById(str);
  audio.play();
}

window.document.onkeyup = function (event) {
  if (event.key === "q" || event.key === "Q") {
    setTimeout(function () {
      document.getElementById("drum1").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum1").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("Q");
  } else if (event.key === "w" || event.key === "W") {
    setTimeout(function () {
      document.getElementById("drum2").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum2").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("W");
  } else if (event.key === "e" || event.key === "E") {
    setTimeout(function () {
      document.getElementById("drum3").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum3").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("E");
  } else if (event.key === "a" || event.key === "A") {
    setTimeout(function () {
      document.getElementById("drum4").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum4").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("A");
  } else if (event.key === "s" || event.key === "S") {
    setTimeout(function () {
      document.getElementById("drum5").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum5").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("S");
  } else if (event.key === "d" || event.key === "D") {
    setTimeout(function () {
      document.getElementById("drum6").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum6").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("D");
  } else if (event.key === "z" || event.key === "Z") {
    setTimeout(function () {
      document.getElementById("drum7").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum7").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("Z");
  } else if (event.key === "x" || event.key === "X") {
    setTimeout(function () {
      document.getElementById("drum8").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum8").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("X");
  } else if (event.key === "c" || event.key === "C") {
    setTimeout(function () {
      document.getElementById("drum9").style.backgroundColor = "#343a40";
    }, 1);
    setTimeout(function () {
      document.getElementById("drum9").style.backgroundColor = "#f8f9fa";
    }, 100);
    play("C");
  }
};
