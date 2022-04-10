const container = document.querySelector('.container')
const sizeElement = document.querySelector('.size')
let size = sizeElement.value
const resetBtn = document.querySelector('.btn')
const gridborderrandomcolorBtn = document.querySelector('.btn2')
const resetGridBorderColorBtn = document.querySelector('.btn3')
const color = document.querySelector('.color')
const color2 = document.querySelector('.color2')

let draw = false

function populate(size) {

  container.style.setProperty('--size', size)

  let i = 0
  while(i < size * size){

    const div = document.createElement('div')
    div.classList.add('pixel')

    div.addEventListener('mouseover', function(){
        if(!draw) return
        div.style.backgroundColor = color.value
    })
    div.addEventListener('mousedown', function(){
        div.style.backgroundColor = color.value
    })

    container.appendChild(div)
    i++
  }
}



window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})
function reset(){
    container.innerHTML = ''
    populate(size)
}
function resetGridBorderColor(){
    c = container.style;
    c.backgroundColor = "rgb(20,20,20)";
}
function randomColor() {
    var c = "#";
    for (var i = 0; i < 6; i++) {
        c += (Math.random() * 16 | 0).toString(16);
    } 
    return c;
}
function colorChange(){
    let b = container.style;
    b.backgroundColor = randomColor();
}
gridborderrandomcolorBtn.addEventListener('click',colorChange)
resetGridBorderColorBtn.addEventListener('click',resetGridBorderColor)

resetBtn.addEventListener('click', reset)

sizeElement.addEventListener('keyup', function(){
    size = sizeElement.value
    reset()
})
sizeElement.addEventListener('change', function(){
    size = sizeElement.value
    reset()
})

populate(size)