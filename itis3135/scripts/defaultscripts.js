function scriptTest()
{
    alert("Script is running!");
}
function getDate(){
    var dt = new Date();
    
    var date = "Today is " + dt.getDay() + " of " + (dt.getMonth()+1) + " at " + dt.getTime() + ".";

    document.write(date);
}
function getInfo(){
    let firstname = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let alltext = "Hey there " + firstname + "im glad you are feeling " + feeling;
    document.getElementById("output").innerHTML = alltext;
}