var money = 1000
var score = 0
var dealerscore = 0
var gameongoing = false
var img
var x = 0
var score1 = 0
var score2 = 0
var hand1 = false
var hand2 = false

function startgame() {
    if (money <= 0) {
        alert("You are broke! Game restarting")
        money = 1000
    }
    if (gameongoing == false) {
        score = 0
        dealerscore = 0
        money = money - 50
        document.getElementById("Money").innerHTML = money
        document.getElementById("Score").innerHTML = 0
        score += Math.floor(Math.random() * 10) + 1
        let lastcard = Math.floor(Math.random() * 10) + 1
        score += lastcard
        let dealerdraw = Math.floor(Math.random() * 10) + 1
        if (dealerdraw == 1) {
            if (dealerscore <= 21 - 11) {
                dealerscore += 11
            } else if (dealerscore > 21 - 11) {
                dealerscore += 1
            }

            document.getElementById("Dealerscore").innerHTML = dealerscore
        } else {
            dealerscore += dealerdraw
        }
        document.getElementById("Score").innerHTML = score
        document.getElementById("Dealerscore").innerHTML = dealerscore
        gameongoing = true
        for (let y = 0; y <= x; y++) {
            img = document.getElementById("card")
            img.remove()
        }
        x = 0
    } else {
        alert("Game ongoing")
    }
}

function draw() {
    if (gameongoing == false) {
        alert("Please start a Game")
    } else {
        var drawCard = Math.floor(Math.random() * 10) + 1
        if (drawCard == 1) {
            var button1 = document.createElement("BUTTON");
            button1.type = "button";
            button1.value = "1";
            button1.onclick = addone();
            button1.id = "one"
            var x = document.createTextNode("1");
            button1.appendChild(x);
            document.body.appendChild(button1)
            var button11 = document.createElement("BUTTON");
            button11.type = "button";
            button11.value = "11";
            button11.onclick = addeleven();
            button11.id = "eleven"
            var y = document.createTextNode("11");
            button11.appendChild(y);
            document.body.appendChild(button11)
            alert("ace!")

        } else {
            score += drawCard
            document.getElementById("Score").innerHTML = score
            if (score > 21) {
                alert("you Lost!")
                gameongoing = false
                document.getElementById("Score").innerHTML = "Busted!"
            } else if (score == 21) {
                alert("Blackjack!")
                money += 200
                gameongoing = false
                document.getElementById("Money").innerHTML = money

            }
        }
    }
    document.getElementById("splitbutton").remove()
}



function stand() {
    if (gameongoing == false) {
        alert("Please start a Game")
    } else {
        while (gameongoing == true) {

            while (dealerscore < score && dealerscore < 17) {

                let dealerdraw = Math.floor(Math.random() * 10) + 1
                console.log(dealerdraw, dealerscore)

                if (dealerdraw == 1) {
                    if (dealerscore <= 21 - 11) {
                        dealerscore += 11
                    } else if (dealerscore > 21 - 11) {
                        dealerscore += 1
                    }

                    document.getElementById("Dealerscore").innerHTML = dealerscore
                } else {
                    dealerscore += dealerdraw
                }

            }

            if (dealerscore == score) {
                alert("draw")
                money += 50
                gameongoing = false
                document.getElementById("Dealerscore").innerHTML = dealerscore
            }
            if (dealerscore > score && dealerscore < 21) {
                alert("dealer won")
                gameongoing = false
                document.getElementById("Dealerscore").innerHTML = dealerscore
            }
            if (dealerscore < score) {
                alert("you won")
                money += 100
                gameongoing = false
                document.getElementById("Dealerscore").innerHTML = dealerscore
            }
            if (dealerscore > 21) {
                alert("You won, dealer busted")
                money += 100
                gameongoing = false
                document.getElementById("Dealerscore").innerHTML = "Busted!"
            }
            if (dealerscore == 21) {
                alert("Dealer Blackjack!")
                gameongoing = false
            }
        }
    }
    document.getElementById("splitbutton").remove()
}

function addone() {
    score += 1
    let x = document.getElementById("one")
    let y = document.getElementById("eleven")
    x.remove()
    y.remove()
    document.getElementById("Score").innerHTML = score
    if (score == 21) {
        alert("Blackjack!")
        money += 200
        gameongoing = false
        document.getElementById("Money").innerHTML = money
    }
}

function addeleven() {
    score += 11
    let x = document.getElementById("one")
    let y = document.getElementById("eleven")
    x.remove()
    y.remove()
    document.getElementById("Score").innerHTML = score
    if (score == 21) {
        alert("Blackjack!")
        money += 200
        gameongoing = false
        document.getElementById("Money").innerHTML = money
    }
}


