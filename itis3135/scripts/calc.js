function get1(){
    let input = 1;
    document.getElementById("calcoutput").innerHTML +=input
}
function get2(){
    let input = 2;
    document.getElementById("calcoutput").innerHTML +=input
}
function get3(){
    let input = 3;
    document.getElementById("calcoutput").innerHTML +=input
}
function get4(){
    let input = 4;
    document.getElementById("calcoutput").innerHTML +=input
}
function get5(){
    let input = 5;
    document.getElementById("calcoutput").innerHTML +=input
}
function get6(){
    let input = 6;
    document.getElementById("calcoutput").innerHTML +=input
}
function get7(){
    let input = 7;
    document.getElementById("calcoutput").innerHTML +=input
}
function get8(){
    let input = 8;
    document.getElementById("calcoutput").innerHTML +=input
}
function get9(){
    let input = 9;
    document.getElementById("calcoutput").innerHTML +=input
}
function get0(){
    let input = 0;
    document.getElementById("calcoutput").innerHTML +=input
}
function getplus(){
    let input = '+';
    document.getElementById("calcoutput").innerHTML +=input
}
function getminus(){
    let input = '-';
    document.getElementById("calcoutput").innerHTML +=input
}
function getmult(){
    let input = '*';
    document.getElementById("calcoutput").innerHTML +=input
}
function getdiv(){
    let input = '/';
    document.getElementById("calcoutput").innerHTML +=input
}
function getMath(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    let maths = (parseInt(x)+parseInt(y));
    let combo = x + " + " + y + " = " + maths + '!';
    document.getElementById("math").innerHTML = combo;
}
