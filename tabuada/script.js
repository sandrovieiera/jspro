let botao = document.getElementById("botao")

botao.addEventListener('click', function ()  {  
  let num = document.getElementById("num").value;
  let end = document.getElementById("end").value;
  let res = document.getElementById("resposta");
  if (num == 0 || end == 0) {
    alert("erro! confira os dados");
    res.style.background = "red";
    res.innerHTML = "preencha os campos";
  } else {
    let x = 0;
    let r = "";

    res.style.background = "blue";
    res.style.color = "black";
    res.innerHTML = `A tabuada do ${num} áte o ${end} é:<br>`;

    do {
      r = num * x;
      res.innerHTML += `${num} x ${x} = ${r} <br>`;
      x++;
    } while (x <= end);
  }
});
