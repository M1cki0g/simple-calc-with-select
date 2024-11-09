function calculer() {
  let n1 = document.getElementById("inp1").value;
  let n2 = document.getElementById("inp2").value;
  let choix = document.getElementById("choix").value;
  let choix1 = document.getElementById("c1").value;
  let choix2 = document.getElementById("c2").value;
  let choix3 = document.getElementById("c3").value;
  let choix4 = document.getElementById("c4").value;

  let res = document.getElementById("res");

  switch (choix) {
    case choix1:
      res.innerHTML = Number(n1) + Number(n2);
      break;
    case choix2:
      res.innerHTML = Number(n1) - Number(n2);
      break;
    case choix3:
      res.innerHTML = Number(n1) * Number(n2);
      break;
    case choix4:
      if (n2 != 0) {
        res.innerHTML = Number(n1) / Number(n2);
      } else {
        res.innerHTML = "Erreur: Division par zéro";
      }
      break;
  }
}
