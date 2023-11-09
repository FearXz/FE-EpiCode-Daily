const generateMainBoard = function () {
  const board = document.querySelector('.main-board')
  for (let i = 0; i < 76; i++) {
    board.innerHTML += `<div class='cell'>${i + 1}</div>`
  }
}

const fillArray = function () {
  const arr = []
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1)
  }
  return arr
}
const getRandomNum = function (range) {
  const randIndex = Math.floor(Math.random() * range.length)
  const random = range.splice(randIndex, 1)[0]
  return random
}

const generateRandNumber = function (range) {
  const random = getRandomNum(range)
  const randNumDiv = document.getElementById('randNum')
  randNumDiv.innerText = 'Numero: ' + random
  const cells = document.querySelectorAll('.main-board .cell')
  cells[random - 1].classList.add('highlight')

  const userCells = document.querySelectorAll('.user-board .cell')
  userCells.forEach((cell) => {
    if (parseInt(cell.innerText) === random) {
      cell.classList.add('highlight')
    }
  })
}

const generateUserBoards = function () {
  const usersNumber = document.getElementById('usersNumber').value
  const container = document.querySelector('.container')
  if (parseInt(usersNumber) > 0) {
    for (let i = 0; i < parseInt(usersNumber); i++) {
      const range = fillArray()
      const board = document.createElement('div')
      board.className = 'board user-board'
      for (let i = 0; i < 24; i++) {
        const random = getRandomNum(range)
        board.innerHTML += `<div class='cell'>${random}</div>`
      }
      container.appendChild(board)
    }
  }
}

window.onload = function () {
  generateMainBoard()
  const randBtn = document.getElementById('randBtn')
  const range = fillArray()
  randBtn.addEventListener('click', function () {
    generateRandNumber(range)
  })
  const userBoardBtn = document.getElementById('userBoardBtn')
  userBoardBtn.onclick = generateUserBoards
}
