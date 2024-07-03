function contar() {
  var inicio = document.getElementById("txti");
  var fim = document.getElementById("txtf");
  var passo = document.getElementById("txtp");
  var res = document.querySelector("div#res");

  // document.write(inicio.value);
  // document.write(fim.value);
  // document.write(passo.value);
  res.innerHTML = "Preparando a contagem <br>";
  if (inicio.value.length == 0 || fim.value.length == 0) {
    window.alert("[ERRO] Faltam dados!");
  } else if (Number(passo.value) == 0) {
    window.alert("Passo inválido, considerando PASSO 1.");

    var img = document.createElement("img");

    img.setAttribute("id", "foto");
    img.setAttribute("src", "emoji.png");

    for (let i = Number(inicio.value); i <= Number(fim.value); i += 1) {
      res.innerHTML = res.innerHTML + i;
      res.appendChild(img);
    }
  } else {
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("src", "emoji.png");

    for (
      let i = Number(inicio.value);
      i <= Number(fim.value);
      i += Number(passo.value)
    ) {
      res.innerHTML = res.innerHTML + i;
      res.appendChild(img);
    }
  }
  img.setAttribute("src", "Bandeira.png");
}
