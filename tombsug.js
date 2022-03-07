
//File: tombsug.js
//Author: Tóth Júlia
//Copyright: 2022, Tóth Júlia
//Group: Szoft 1/n
//Date: 2022-03-07
//Github: https://github.com/haribomaci/
//Licenc: GNU GPL


var oldalIn = document.getElementById("oldal");
var szogIn = document.getElementById("szog");
var szamitGomb = document.getElementById("szamitgomb");
var eredmenyIn = document.getElementById("eredmeny");

szamitGomb.addEventListener("click", function(){

    let oldal = Number(oldalIn.value);
    let szog1 = Number(szogIn.value);
    var absz = (Math.PI/180)*(szog1);
    let sugar = (1/2)*oldal*Math.sin(absz);
    console.log(sugar.toFixed(2));

    eredmenyIn.value=sugar;
});