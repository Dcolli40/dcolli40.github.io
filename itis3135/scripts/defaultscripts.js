function getInsult()
{
    let x = Math.floor(Math.random() * 3);
    let ins;
    if (x == 0){
        ins = "You smell worse than a mans belly button that hasn't showered in his life.";
    }
    if (x == 1){
        ins = "Ur Mom is not as cool as mine!";
    }
    if (x == 2){
        ins = "I hope you trip down the stairs but that you dont get hurt when you land.";
    }
    alert(ins);
}
function getDate(){
    var dt = new Date();
    var time = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
    let month;
    if (dt.getMonth()+1 == 1){
        month = "January";
    }else if (dt.getMonth()+1 == 2){
        month = "Febuary";
    }else if (dt.getMonth()+1 == 3){
        month = "March";
    }else if (dt.getMonth()+1 == 4){
        month = "April";   
    } else if (dt.getMonth()+1 == 5){
        month = "May";
    } else if (dt.getMonth()+1 == 6){
        month = "June";
    } else if (dt.getMonth()+1 == 7){
        month = "July";
    }else if (dt.getMonth()+1 == 8){
        month = "August";
    } else if (dt.getMonth()+1 == 9){
        month = "September";
    }else if (dt.getMonth()+1 == 10){
         month = "October";
    }else if (dt.getMonth()+1 == 11){
        month = "November";
    } else{
         month = "December";
    }
    
    let abr;
    let day = dt.getDay();

    if (day == 1 || day == 31 || day == 21){
        abr = "st";
    }else if (day == 2  || day == 22){
        abr = "nd";
    }else if (day == 3  || day == 23){
        abr = "rd";
    }else{ 
        abr= "th";
    }
    

    var date = "Today is " + day + abr + " day of " + month + " at " + time + ".";

    document.getElementById('auto').innerHTML = date;
}
function getInfo(){
    let firstname = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let alltext = "Hey there, " + firstname + " I am so glad you are feeling " + feeling + '!';
    document.getElementById("output").innerHTML = alltext;
}
function getAnimal(){
    let animal = document.getElementById("animal").value;
    let adjective = document.getElementById("adjective").value;
    let combo = "Your website name would be " + adjective + " " + animal + '!';
    document.getElementById("animalname").innerHTML = combo;
}
function getMath(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    let maths = (parseInt(x)+parseInt(y));
    let combo = x + " + " + y + " = " + maths + '!';
    document.getElementById("math").innerHTML = combo;
}
function getFact()
{
    let x = Math.floor(Math.random() * 5);
    let fact;
    if (x == 0){
        fact = "Crocodiles are carnivores, which generally means they eat only meat.";
    }
    if (x == 1){
        fact = "Crocodiles can go through 4,000 teeth over a lifetime!";
    }
    if (x == 2){
        fact = "A crocodile's jaws can apply 5,000 pounds of pressure per square inch; the strongest bite of any animal in the world.";
    }
    if (x == 3){
        fact = "Crocodiles have relatively weak jaw opening muscles, which can be held shut with just a rubber band, or your bare hands.";
    }
    if (x == 4){
        fact = "An easy way to tell the difference between a crocodile and an alligator, is when a crocodile closes their mouth, all teeth are visible the upper and lower jaw are the same width.";
    }
    alert(fact);
}
function guess()
{
    let x = document.getElementById("weight").value;
    x = parseInt(x);
    let fact = 880;
    let ans;
    if (fact == x){
        ans = "Whoa! How did you get that? Crocodiles do weigh up to " + fact + "lbs";
    }
    if (x > fact){
        ans = "You are so close, but a little too high. Crocodiles weigh up to " + fact + "lbs";
    }
    if (x < fact){
        ans = "Nice try but you are a little ways away from being correct. Crocodiles weigh up to " + fact + "lbs";
    }
    document.getElementById("croc").innerHTML = ans;
    
}