let roughsvg = rough.svg(document.getElementById("svg"));
const svg = document.getElementById("svg");
var glob_y = 400;
var glob_x = 712;
//prostokąt

const kwadrat = roughsvg.rectangle(glob_x, glob_y, 110, 110, {
  fill: "red",
  hachureAngle: 60, // angle of hachure,
  hachureGap: 8,
});
kwadrat.addEventListener("click", () => {
  console.log("klik prostokąta!");
});
svg.appendChild(kwadrat);

const buttonik1 = document.getElementById("strz_dol");
buttonik1.addEventListener("click", () => {
  dol(glob_x, glob_y);
});

function dol() {
  // linia w dół
  const liniaDolna = roughsvg.line(
    glob_x + 110 / 2,
    glob_y + 110,
    glob_x + 110 / 2,
    glob_y + 110 + 30
  );
  svg.appendChild(liniaDolna);
}

const buttonik2 = document.getElementById("strz_gor");
buttonik2.addEventListener("click", () => {
  gora(glob_x, glob_y);
});

function gora() {
  // linia w górę
  const liniaGorna = roughsvg.line(
    glob_x + 110 / 2,
    glob_y,
    glob_x + 110 / 2,
    glob_y - 30
  );
  svg.appendChild(liniaGorna);
}

const buttonik3 = document.getElementById("strz_lew");
buttonik3.addEventListener("click", () => {
  lewo(glob_x, glob_y);
});

function lewo() {
  // Linia w lewo
  const liniaLewa = roughsvg.line(
    glob_x,
    glob_y + 110 / 2,
    glob_x - 30,
    glob_y + 110 / 2
  );
  svg.appendChild(liniaLewa);
}

const buttonik4 = document.getElementById("strz_pra");
buttonik4.addEventListener("click", () => {
  prawo(glob_x, glob_y);
});

function prawo() {
  // Linia w prawo
  const liniaPrawa = roughsvg.line(
    glob_x + 110,
    glob_y + 110 / 2,
    glob_x + 110 + 30,
    glob_y + 110 / 2
  );
  svg.appendChild(liniaPrawa);
}
