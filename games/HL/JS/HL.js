 
 let images =  ["./p/dice1.png",
                "./p/dice2.png",
                "./p/dice3.png",
                "./p/dice4.png",
                "./p/dice5.png",
                "./p/dice6.png",
                 ];
 let dice = document.querySelectorAll("img");
 function RollDice()
 { dice.forEach(function(die){
        die.classList.add("roll");
    });
    
        dice.forEach(function(die){
            die.classList.add("roll");
        });
    let dice1val=Math.floor(Math.random()*6);
    let dice2val=Math.floor(Math.random()*6);
    console.log(dice1val,dice2val);
    let img1 = document.getElementById("dice1");
    let img2 = document.getElementById("dice2");
    console.log(img1);
    console.log(img2);
    img1.src = images[dice1val];
    img2.src = images [dice2val];
    let x= dice1val+dice2val;
    alert("click straks aan of je hoger of lager hebt gegooid dan de computer.")
    }
    function RollDice2()
    { dice.forEach(function(die){
           die.classList.add("roll");
       });
       setTimeout(function(){
           dice.forEach(function(die){
               die.classList.add("roll");
           });
       let dice3val=Math.floor(Math.random()*6);
       let dice4val=Math.floor(Math.random()*6);
       console.log(dice3val,dice4val);
       let img3 = document.getElementById("dice3");
       let img4 = document.getElementById("dice4");
       console.log(img3);
       console.log(img4);
       img3.src= images [dice3val];
       img4.src= images [dice4val];
       },
       1
       );
       }
     
function Hoger(){
    let dice1val=Math.floor(Math.random()*6);
    let dice2val=Math.floor(Math.random()*6);
    let dice3val=Math.floor(Math.random()*6);
    let dice4val=Math.floor(Math.random()*6);
    console.log(dice1val,dice2val,dice3val,dice4val);
       let img3 = document.getElementById("dice3");
       let img4 = document.getElementById("dice4");
       console.log(img3);
       console.log(img4);
       img3.src= images [dice3val];
       img4.src= images [dice4val];
       let getal1=dice1val+dice2val
       let getal2=dice3val+dice4val
    if(getal2>getal1) {
        alert("je hebt de ronde gewonnen!");

    } else {
        alert("je hebt de ronde verloren!")
    }
}
function Lager(){
    let dice1val=Math.floor(Math.random()*6);
    let dice2val=Math.floor(Math.random()*6);
    let dice3val=Math.floor(Math.random()*6);
    let dice4val=Math.floor(Math.random()*6);
    console.log(dice1val,dice2val,dice3val,dice4val);
       let img3 = document.getElementById("dice3");
       let img4 = document.getElementById("dice4");
       console.log(img3);
       console.log(img4);
       img3.src= images [dice3val];
       img4.src= images [dice4val];
       let getal1=dice1val+dice2val
       let getal2=dice3val+dice4val
    if(getal2<getal1) {
        alert("je hebt de ronde verloren");

    } else {
        alert("je hebt de ronde gewonnen!")
    }
    
}






