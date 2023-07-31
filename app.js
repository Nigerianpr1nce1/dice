const faces = [
    'diceOne.svg',
    'diceTwo.svg',
    'diceThree.svg',
    'diceFour.svg',
    'diceFive.svg',
    'diceSix.svg',
]
const dice = document.querySelectorAll("img");
const dieOne = document.querySelector('.dieOne')
const dieTwo = document.querySelector('.dieTwo')
const result = document.querySelector('.result')
function roll() {
  dice.forEach(function (face) {
    face.classList.add("shake");
  });
  setTimeout(() => {
    dice.forEach(function (face) {
      face.classList.remove("shake");
    });
  }, 600);
  let diceOneValue = (Math.floor(Math.random() * 6))
  let diceTwoValue = (Math.floor(Math.random() * 6))
  console.log('dice one :' + diceOneValue)
  console.log('dice two :' + diceTwoValue)
  dieOne.setAttribute('src',faces[diceOneValue])
  dieTwo.setAttribute('src',faces[diceTwoValue])
  result.textContent = `Total is  ${(diceOneValue + 1) +  (diceTwoValue + 1)}`
}
roll()