let a = 0;
document.getElementById("textBox").value = a;
let Plus = () => { a++; document.getElementById("textBox").value = a; }
let Minus = () => { if (a > 0) { a--; document.getElementById("textBox").value = a; } }
