let a = 0;
function Countdown() {
    a = document.getElementById("textBox").value;
    let number = Number(a);
    if (isNaN(number)) {
        document.getElementById("content").innerHTML = "Invalid Number!";
    }
    else {
        let Time = a * 1000;
        let a = setInterval(number-- , Time);
        console.log(number)
    }
}