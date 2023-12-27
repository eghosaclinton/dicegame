let diceArray = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png'];
let randomNumber1 = Math.floor(Math.random() * 6)
let randomNumber2 = Math.floor(Math.random() * 6)


document.querySelector(".img1").setAttribute("src", diceArray[randomNumber1])
document.querySelector(".img2").setAttribute("src", diceArray[randomNumber2])

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!"
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "Its a ⚔️ Draw!"
}
else {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩"
}
