let roughsvg = rough.svg(document.getElementById("svg"));
const svg = document.getElementById("svg");
var glob_y = 320;
var glob_x = 850;

var tab = [];

function check() {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i][0] === glob_x && tab[i][1] === glob_y) {
      alert("Kwadrat już istnieje na tym miejscu!");
      return true;
    }
  }
  tab.push([glob_x, glob_y]);
  return false;
}

kwadrat();
async function kwadrat() {
  const kwadrat = roughsvg.rectangle(glob_x, glob_y, 110, 110, {
    fill: "red",
    hachureAngle: 60,
    hachureGap: 8,
  });
  kwadrat.addEventListener("click", () => {
    console.log("klik prostokąta!");
  });
  kwadrat.setAttribute("id", "test");
  svg.appendChild(kwadrat);
  console.log(tab);
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
  if (check() == false) {
    await kwadrat();
  } else {
    return;
  }
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
  if (check() == false) {
    await kwadrat();
  } else {
    return;
  }
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
  if (check() == false) {
    await kwadrat();
  } else {
    return;
  }
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
  if (check() == false) {
    await kwadrat();
  } else {
    return;
  }
}

const buttonik10 = document.getElementById("cancel");
buttonik10.addEventListener("click", can);

async function can() {
  document.getElementById("svg").innerHTML = "";
  tab = [];
  glob_y = 320;
  glob_x = 850;
  await kwadrat();
}
