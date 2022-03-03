function getShape()
{
    let x = document.getElementById("poly");
    
    
    
    let ins;
    if (parseInt(x) == 0){
        ins = "Thats not a shape... get some help";
    }
    else if (parseInt(x) == 1){
        ins = "This is a Henagon. Also could be known as a Monogon.";
    }
    else if (parseInt(x) == 2){
        ins = "This is a Digon. Also could be known as a Bigon.";
    }
    else if (parseInt(x) == 3){
        ins = "This is a Trigon. More commonly known as a Triangle.";
    }

    else if (parseInt(x) == 4){
        ins = "This is a Tetragon. More commonly known as a Quadrilateral.";
    }
    else if (parseInt(x) == 5){
        ins = "This is a Pentagon. More commonly known as a Pentagon.";
    }
    else if (parseInt(x) == 6){
        ins = "This is a Hexagon. More commonly known as a Hexagon.";
    }
    else if (parseInt(x) == 7){
        ins = "This is a Heptagon. More commonly known as a Septagon.";
    }
    else if (parseInt(x) == 8){
        ins = "This is a Octogon. More commonly known as a Stop Sign.";
    }
    else if (parseInt(x) == 9){
        ins = "This is a Enneagon. More commonly known as a Nonagon.";
    }
    else if (parseInt(x) == 10){
        ins = "This is a Decagon.";
    }
    else{
        alert("The number that you entered is not in the expected range of 0 - 10. Please try again.")
    }
    document.getElementById("output").innerHTML = ins;
}