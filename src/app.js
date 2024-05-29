/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  generarCartas();
};

function generarCartas() {
  //write your code here

  const simbolos = ["♥", "♣", "♦", "♠"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const randomSimbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  const randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];

  const simboloArriba = document.getElementById("simboloArriba");
  const simboloAbajo = document.getElementById("simboloAbajo");
  const numeroElemento = document.getElementById("numero");

  simboloArriba.textContent = randomSimbolo;
  simboloAbajo.textContent = randomSimbolo;
  numeroElemento.textContent = randomNumeros;

  const color =
    randomSimbolo === "♥" || randomSimbolo === "♦" ? "red" : "black";
  numeroElemento === "red" ? "red" : "black";

  numeroElemento.style.color = color;
  simboloArriba.style.color = color;
  simboloAbajo.style.color = color;
}
const randomBottom = document.querySelector(".boton");
document.addEventListener("click", generarCartas());
