let roughsvg = rough.svg(document.getElementById("svg"));
const svg = document.getElementById("svg");
var glob_y = 300;
var glob_x = 712;

kwadrat();
async function kwadrat() {
  const kwadrat = roughsvg.rectangle(glob_x, glob_y, 110, 110, {
    fill: "red",
    hachureAngle: 60, // angle of hachure,
    hachureGap: 8,
  });
  kwadrat.addEventListener("click", () => {
    console.log("klik prostokąta!");
  });
  kwadrat.setAttribute("id", "test");
  svg.appendChild(kwadrat);
}

const buttonik1 = document.getElementById("strz_dol");
buttonik1.addEventListener("click", dol);

async function dol() {
  // linia w dół
  const liniaDolna = roughsvg.line(
    glob_x + 110 / 2,
    glob_y + 110,
    glob_x + 110 / 2,
    glob_y + 110 + 30
  );
  svg.appendChild(liniaDolna);
  glob_y = glob_y + 140;
  await kwadrat();
}

const buttonik2 = document.getElementById("strz_gor");
buttonik2.addEventListener("click", gora);

async function gora() {
  // linia w górę
  const liniaGorna = roughsvg.line(
    glob_x + 110 / 2,
    glob_y,
    glob_x + 110 / 2,
    glob_y - 30
  );
  svg.appendChild(liniaGorna);
  glob_y = glob_y - 140;
  await kwadrat();
}

const buttonik3 = document.getElementById("strz_lew");
buttonik3.addEventListener("click", lewo);

async function lewo() {
  // Linia w lewo
  const liniaLewa = roughsvg.line(
    glob_x,
    glob_y + 110 / 2,
    glob_x - 30,
    glob_y + 110 / 2
  );
  svg.appendChild(liniaLewa);
  glob_x = glob_x - 140;
  await kwadrat();
}

const buttonik4 = document.getElementById("strz_pra");
buttonik4.addEventListener("click", prawo);

async function prawo() {
  // Linia w prawo
  const liniaPrawa = roughsvg.line(
    glob_x + 110,
    glob_y + 110 / 2,
    glob_x + 110 + 30,
    glob_y + 110 / 2
  );
  svg.appendChild(liniaPrawa);
  glob_x = glob_x + 140;
  await kwadrat();
}

const buttonik10 = document.getElementById("cancel");
buttonik10.addEventListener("click", can);

async function can() {
  document.getElementById("svg").innerHTML = "";
  glob_y = 300;
  glob_x = 712;
  await kwadrat();
}
