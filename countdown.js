let a = 0;
function Countdown() {
    a = document.getElementById("textBox").value;
    let number = Number(a);
    if (isNaN(number)) {
        document.getElementById("content").innerHTML = "Invalid Number!";
    }
    else {
        let Time = (number * 1000)+1000;
        let a = setInterval(() => {document.getElementById("content").innerHTML = number;number--;},1000);
        setTimeout(() => {clearInterval(a)},Time);
        console.log(number)
    }
}