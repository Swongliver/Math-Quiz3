
var player1score=0;
var player2score=0;
document.getElementById("player1Score").innerHTML=player1score;
document.getElementById("player2Score").innerHTML=player2score;
document.getElementById("awnserTurn").innerHTML="Awnser turn:"+player2name;
document.getElementById("questionTurn").innerHTML="Question turn:"+player1name;
function load(){
    var player1name=localStorage.getItem("player1");
    var player2name=localStorage.getItem("player2");
    document.getElementById("player1Name").innerHTML=player1name;
    document.getElementById("player2Name").innerHTML=player2name;
}


function send(){
var number1=document.getElementById("input1").value
var number2=document.getElementById("input2").value
number=parseInt(number1) + "*" + parseInt(number2)
console.log(number)
document.getElementById("question").innerHTML=number;
question="<h1 id='question'></h1>"
answer="Answer:<h4 id='Answer_Input'></h4>"
check="<button onclick='submit()' class='btn btn-succes'>Submit</button>"
row=question+answer+check;
document.getElementById("output").innerHTML=row;
document.getElementById("Answer_Input").value=" ";
}


