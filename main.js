let grid = document.querySelector('.main')

function createMiniDiv(x , y) {
  let mini_div = document.createElement('div')
  mini_div.classList.add('mini_div')
  mini_div.classList.add('mini-div-' + x + '-' + y)
  return mini_div
}

function createGrid() {
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 5; y++) {
      let mini_div = createMiniDiv(x, y)
      grid.appendChild(mini_div)
    }
  }
}

createGrid()


let clicked_divs = []

for(let i = 0 ; i < 7 ; i++){
  let y_val = [] ;
  for(let j = 0 ; j < 5 ; j++){
    y_val.push(0) ;
  }
  clicked_divs.push(y_val) ;
}

grid.addEventListener('click', function(e) {
  if(e.target.classList.contains('mini_div')){
    let class_name = e.target.classList[1]
    console.log(class_name);
    let x = class_name.split('-')[2]
    let y = class_name.split('-')[3]
    if(clicked_divs[x][y] === 0){
      e.target.style.backgroundColor = 'red'
      clicked_divs[x][y] = 1
    } else {
      e.target.style.backgroundColor = '#00000000'
      clicked_divs[x][y] = 0
    }
    console.log(clicked_divs);
  }

})

let reset = document.querySelector('.reset')

reset.addEventListener('click', function(){
  for(let i = 0 ; i < 7 ; i++){
    for(let j = 0 ; j < 5 ; j++){
      clicked_divs[i][j] = 0
      let class_name = '.mini-div-' + i + '-' + j
      let div = document.querySelector(class_name)
      div.style.backgroundColor = '#00000000'
    }
  }
})


let strings = [] ;
document.querySelector('.show_code').addEventListener('click', function(){
  for(let i = 0 ; i < 5 ; i++){
    let str = '' ;
    for(let j = 0 ; j < 7 ; j++){
      if(clicked_divs[j][i] === 1){
        str += '1' ;
      }
      else{
        str += '0' ;
      }
    }
    str = '0' + str.split('').reverse().join('') + 'b' 
    strings.push(str) ;
  }

  console.log(strings) ;
  let disp = document.querySelector('.display_code>p')

  disp.innerHTML = `
      DB ${strings.join(", ")}
  `
  strings = [] ;
})


