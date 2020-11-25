
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var res = document.getElementById("res");
res.disabled=true;
var box = document.getElementById("display");
var clr = document.getElementById("clr");
var one = ["", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ",	"Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "];
function numToWords(n, s) {
    var ten = ["", "", "Twenty ", "Thirty ", "Forty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "];
	var str = "";
	if (n > 19) {
		str += ten[Math.floor(n / 10)] + one[n % 10];
	} else {
		str += one[n];
	}
	if (n !== 0) {
		str += s;
	}
	return str; 
}
function convertToWords(n) {
    if(n==0){
        return 'Zero';
    }
    else{
        var out = "";
	out += numToWords(Math.floor(n / 10000000), "Crore ");
        out += numToWords(Math.floor((n / 100000) % 100), "Lakh ");
	out += numToWords(Math.floor((n / 1000) % 100), "Thousand ");
	out += numToWords(Math.floor((n / 100) % 10), "Hundred ");
	if (n > 100 && n % 100 > 0) {
	   out += "and ";
	}
        out += numToWords(parseInt(n % 100), "");
        return out;
    }
}
btn0.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "0";
});
btn1.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "1";
});
btn2.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "2";
});
btn3.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "3";
});
btn4.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "4";
});
btn5.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "5";
});
btn6.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "6";
});
btn7.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "7";
});
btn8.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "8";
});
btn9.addEventListener("click", function () {
        res.disabled=false;
        box.innerHTML += "9";
    });
clr.addEventListener("click", function () {
    res.disabled=true;
    box.innerHTML = "";
    btn0.disabled=false;
    btn1.disabled=false;
    btn2.disabled=false;
    btn3.disabled=false;
    btn4.disabled=false;
    btn5.disabled=false;
    btn6.disabled=false;
    btn7.disabled=false;
    btn8.disabled=false;
    btn9.disabled=false;
});
res.addEventListener("click", function () {
    if(this.disabled==true)
        alert("Please enter a number");
    else{
        var n = parseInt(box.innerHTML);
        res.disabled=true;
        btn0.disabled=true;
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
        btn5.disabled=true;
        btn6.disabled=true;
        btn7.disabled=true;
        btn8.disabled=true;
        btn9.disabled=true;
        box.innerHTML=convertToWords(n);
    }
});

var colors=["rgb(255, 0, 24)", "rgb(255, 165, 44)", "rgb(255, 255, 65)", "rgb(0, 128, 24)", "rgb(0, 0, 249)", "rgb(134, 0, 125)"];
var h1=document.querySelector("h1");
h1.style.backgroundColor=colors[0];
var i=1;
setInterval(function(){
        h1.style.backgroundColor=colors[i];
        i++;
        if(i===colors.length)
            i=0;
},2500);