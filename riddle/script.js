var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var sec = 0;
var min = 0;
var time=0;
var told=0;
timeup=0;
var answered=0;
var clue = ["Check the punctuation!","Solve b first.","Think of it as two seperate houses.","Think of how many holes a shirt normally has.","It says they're $1.00 APART not that one of them is $1.00.","The answer has six letters.","one digit.","seven letters.", "two digits."];
var riddles = [0,"A cat has 3 kittens: One, Two, and Three. What is the cat's name."," ","A man buys a house for 1 million dollars. He sells the house for 1.1 million dollars. Then, he buys it back for 1.2 million dollars. He sells it again for 1.3 million dollars. How much money did he earn/lose? Answer in millions.","How many holes does this t-shirt have?", "A bat and a baseball cost $1.10. If the bat costs one more dollar than the baseball, how much does the bat cost? Answer like this: $_._ _","The one who makes it always sells it. \n The one who buys it never uses it.\n The one who uses it never knows he's using it.\n It is a ______."]
var remclu = 3;
var clueUsed = 0;
var answer = ["WHAT",74658,0.2,8,1.05,"COFFIN"];
var roomNum=1;
var riddle1 = new Image();
riddle1.src="https://www.severnedgevets.co.uk/sites/default/files/styles/medium/public/guides/kitten.png?itok=K4YoP1wI";
var riddle2 = new Image();
riddle2.src="https://e2e.ti.com/resized-image/__size/1230x0/__key/communityserver-blogs-components-weblogfiles/00-00-00-06-66/Riddles_5F00_Briefcase-_2D00_-TW.png";
var riddle3 = new Image();
riddle3.src="http://www.clker.com/cliparts/d/b/1/9/1194983761256499536house_gabrielle_nowicki_.svg.hi.png"
var riddle4 = new Image();
riddle4.src="https://files.brightside.me/files/news/part_37/372760/15821510-6944610-1-3ImageOther-article-0-1503490428-1503490430-650-1-1503490430-650-0d38380460-1504370121.jpg";
var riddle5 = new Image();
riddle5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJ-qwl1YOSeCwEWm6C506UxXoXx1nsRCK9kL9hD9z6vqU7xz5"
var riddle6 = new Image();
riddle6.src="https://piskel-imgstore-b.appspot.com/img/a23be60c-5e2d-11e8-b4c5-83130ba8dcae.gif"
// var win=new Image();
// win.src="http://www.handymanserviceomahane.com/images/1051038_0.jpg"
function addsec(){
  if(min==30&&told==0){
    told=1;
    alert("Times up!")
    timeup=1; 
  }
  if(answered!=1&&told==0){
    sec++;
    told=0;
    if(sec==60){
      min++;
      sec=0;
    }
    if(sec<10){
      time=min+":0"+sec;
    }
    if(sec>9){
      time=min+":"+sec;
    }
    document.getElementById("hiii").innerHTML=time;
  }
}

//using functions/other
  setInterval(addsec,1000)

canvas.width=500;
canvas.height=300;
ctx.drawImage(riddle1,0,0,500,300);
document.getElementById("riddle").innerHTML=riddles[roomNum];
//define functions:
function checkclue(){
  if(clueUsed==1){
    alert("You have already used your clue for this room.")} 
  else{
  if(remclu>0){
      if(confirm('Are you sure you want to use a clue? Doing so will take away one of your remaining clues. Press "Okay" to continue or press "Cancel" to cancel.')){
        remclu--;
        clueUsed=1;
      document.getElementById("clueMessage").innerHTML =clue[roomNum-1];
        if(remclu==1){    document.getElementById("remainingclues").innerHTML="You have 1 clue left."
        }   
   else{
   document.getElementById("remainingclues").innerHTML="You have "+remclu+" clues left."
        }     
      }
    }
    else{
      alert("You have no clues left!")
    }
  }
}
function ent(){
  if(timeup==0){
    var str = document.getElementById("INPUT").value;
    if(str.toUpperCase()==answer[roomNum-1]&&roomNum<10){
      alert("Great job! You made it to the next room...")
      roomNum++;
    document.getElementById("title").innerHTML="Riddle #"+roomNum;
      changeCanvas();
    }  
    else if(roomNum<10){
      alert("Sorry, wrong answer!");
    }
    else{
       alert("You finished at a total of "+min+" minutes and "+sec+" seconds!")
      answered=1
      document.getElementById("title").innerHTML="You Escaped! access the link:"  
      canvas.width=400;
      canvas.height=400;
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.drawImage(win,0,0,400,400)
    }
  }
}
function help(){
  alert('Rules:\n- Click "ENTER" to submit your answer\n- Click "OK" to go to the next room or to confirm using a clue\n- Click clue for a hint\n- No spaces!!! There should be no need for them.')
}
function changeCanvas(){
   clueUsed=0;
   document.getElementById("INPUT").value="";
document.getElementById("clueMessage").innerHTML="";
  ctx.clearRect(0,0,canvas.width,canvas.height)
  if(roomNum==2){
    canvas.width=650;
    canvas.height=400
    ctx.drawImage(riddle2, 0,0, 650, 400);
  }
  if(roomNum==3){
    canvas.width=300;
    canvas.height=300
    ctx.drawImage(riddle3, 0,0, 300, 300);
  }
  if(roomNum==4){
    canvas.width=350;
    canvas.height=300
    ctx.drawImage(riddle4, 0,0, 350, 300);
  }
  if(roomNum==5){
    canvas.width=600;
    canvas.height=150
    ctx.drawImage(riddle5, 0,0, 600, 150);
  }
  if(roomNum==6){
    canvas.width=300;
    canvas.height=300
    ctx.drawImage(riddle6, 0,0, 300, 300);
    
  }
  document.getElementById("riddle").innerHTML=riddles[roomNum];
}
help();