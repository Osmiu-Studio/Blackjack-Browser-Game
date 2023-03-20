/*

Working on Aces.
Game Code completely broke down
Unable to do anything 

*/

var money = 1000
var score = 0
var dealerscore = 0
var gameongoing = false

function startgame(){
    if(money <= 0){
        alert("You are broke! Game restarting")
        money = 1000
    }
if(gameongoing == false){
    score = 0
    dealerscore = 0
    money = money - 50
    document.getElementById("Money").innerHTML = money
    document.getElementById("Score").innerHTML = 0
    score += Math.floor(Math.random() * 10) + 1
    score += Math.floor(Math.random() * 10) + 1
    dealerscore += Math.floor(Math.random() * 10) + 1
    document.getElementById("Score").innerHTML = score
    document.getElementById("Dealerscore").innerHTML = dealerscore
}else{
    alert("Game ongoing")
}
gameongoing = true
}

function draw(){
    if(gameongoing == false){
        alert("Please start a Game")
    }else{
    var drawCard = Math.floor(Math.random() * 10) + 1
    if(drawCard == 1){
        var button1 = document.createElement("BUTTON");
        button1.type = "button";
        button1.value = "1";
        button1.onclick = addone;
        button1.id = "one"
        var x = document.createTextNode("1");
        button1.appendChild(x);
        document.body.appendChild(button1)
        var button11 = document.createElement("BUTTON");
        button11.type = "button";
        button11.value = "11";
        button11.onclick = addeleven;
        button11.id = "eleven"
        var y = document.createTextNode("11");
        button11.appendChild(y);
        document.body.appendChild(button11)
        alert("ace!")
    }else{
    score += drawCard
    document.getElementById("Score").innerHTML = score
    if(score > 21){
        alert("you Lost!")
        gameongoing = false
        document.getElementById("Score").innerHTML = "Busted!"
    }else if(score == 21){
        alert("Blackjack!")
        money += 200
        gameongoing = false
        document.getElementById("Money").innerHTML = money

    }
}
    }
}



function stand(){
    if(gameongoing == false){
        alert("Please start a Game")
    }else{

for(dealerscore = dealerscore; dealerscore < score; dealerscore){
    if(dealerscore < score && dealerscore < 17){

        let dealerdraw = Math.floor(Math.random() * 10) + 1
        console.log(dealerdraw)
        
if(dealerdraw == 1){
    if(dealerscore <= 21 - 11){
        dealerscore += 11
    }else if(dealerscore > 21 - 11){
        dealerscore += 1
    }else{
        dealerscore += dealerdraw
    }
}

        document.getElementById("Dealerscore").innerHTML = dealerscore
    }
}
    if(dealerscore == score){
    alert("draw")
    money += 50
    gameongoing = false
    document.getElementById("Dealerscore").innerHTML = dealerscore
}
if(dealerscore > score && dealerscore < 21){
    alert("dealer won")
    gameongoing = false
    document.getElementById("Dealerscore").innerHTML = dealerscore
}
if(dealerscore < score){
    alert("you won")
    money += 100
    gameongoing = false
    document.getElementById("Dealerscore").innerHTML = dealerscore
}
if(dealerscore > 21){
    alert("You won, dealer busted")
    money += 100
    gameongoing = false
    document.getElementById("Dealerscore").innerHTML = "Busted!"
}
if(dealerscore == 21){
    alert("Dealer Blackjack!")
    gameongoing = false
}
}

function addone(){
    score += 1
    let x = document.getElementById("one")
    let y = document.getElementById("eleven")
    x.remove()
    y.remove()
    document.getElementById("Score").innerHTML = score
    if(score == 21){
        alert("Blackjack!")
        money += 200
        gameongoing = false
        document.getElementById("Money").innerHTML = money
    }
}

function addeleven(){
    score += 11
    let x = document.getElementById("one")
    let y = document.getElementById("eleven")
    x.remove()
    y.remove()
    document.getElementById("Score").innerHTML = score
    if(score == 21){
        alert("Blackjack!")
        money += 200
        gameongoing = false
        document.getElementById("Money").innerHTML = money
    }
}
}
