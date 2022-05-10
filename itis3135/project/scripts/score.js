
function scoreup1(){
    let score = document.getElementById('team_1_score').innerHTML;
    s = parseInt(score);
    document.getElementById('team_1_score').innerHTML = (s + 1);
}
function scoredown1(){
    let score = document.getElementById('team_1_score').innerHTML;
    up = parseInt(score);
    document.getElementById('team_1_score').innerHTML = (parseInt(score) - 1);
}
function scoreup2(){
    let score = document.getElementById('team_2_score').innerHTML;
    document.getElementById('team_2_score').innerHTML = (parseInt(score) + 1);
}
function scoredown2(){
    var score = document.getElementById('team_2_score').innerHTML;
    document.getElementById('team_2_score').innerHTML = (parseInt(score) - 1);
}
function clearAll(){
    document.getElementById('team_1_score').innerHTML=0;
    document.getElementById('team_2_score').innerHTML=0;
    document.getElementById("team1").innerHTML = "";
    document.getElementById("team2").innerHTML = "";
}

function teamName(){
    var first = document.getElementById("team1name").value;
    var second = document.getElementById("team2name").value;
    
    document.getElementById("team1").innerHTML = first;
    document.getElementById("team2").innerHTML = second;
}
