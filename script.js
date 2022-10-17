const selectData = () => {
  var selector = document.getElementById("selector").value;
  let PencilInput = document.getElementById("inputPencil");
  let quentity = document.getElementById("quentity").value;
  let quentityamount = document.getElementById("quentityamount");
  PencilInput.value = selector;
  if (quentity.value == 0) {
    alert();
  }

  if (selector == 20) {
    let multiply = quentity * 20;
    quentityamount.value = multiply;
  }
  if (selector == 100) {
    let multiply2 = quentity * 100;
    quentityamount.value = multiply2;
  }
  if (selector == 300) {
    let multiply3 = quentity * 300;
    quentityamount.value = multiply3;
  }
};
let btnfumc = document.getElementById("btnfumc");
btnfumc.addEventListener("click", () => {
  let PencilInput = document.getElementById("inputPencil").value;
  let quentity = document.getElementById("quentity").value;
  let quentityamount = document.getElementById("quentityamount").value;
  let totalamount = document.getElementById("totalamount");
  let discount = document.getElementById("discount").value;
  let tax = document.getElementById("tax").value;
  let totalbill = document.getElementById("totalbill");

  // child append
  let parent = document.getElementById("parent");
  let divpara = document.createElement("div");
  if (PencilInput == 20) {
    var sname = "Pencil";
  }
  if (PencilInput == 100) {
    var sname = "milk";
  }
  if (PencilInput == 300) {
    var sname = "cofee";
  }

  divpara.innerHTML = `<div  class="billing" >
  <h3 id="pvalue">${sname}</h3>
  <h3 id="pamount">${PencilInput}</h3>
  <h3 id="pquentity">${quentity}</h3>
  <h3 id="ptotal">${quentityamount}</h3>
</div>
`;
  parent.appendChild(divpara);
  totalamount.value = quentityamount;
  let totalbilldiscount = (100 * (quentityamount - discount)) / 100;
  let totalbilldiscount1 = (quentityamount * 7.5) / 100 + totalbilldiscount;
  totalbill.value = Math.floor(totalbilldiscount1);
});
