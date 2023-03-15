// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// let backgroundColor = getRandomHexColor()
// const btnCreate = document.querySelector('[data-create]')
// const btnDestroy = document.querySelector('[data-destroy]')
// const div = document.querySelector('#boxes')
// let width = 30;
// let height = 30;
// const createBoxes = (el) =>{
//   const arrDiv = document.createElement('div')
// for(let i=0; i<el; i++){
//   arrDiv.style.width = '${width}px'
//   arrDiv.style.height = '${height}px'
//   arrDiv.style.backgroundColor = backgroundColor
//   div.insertAdjacentHTML("beforeend", arrDiv)
//   width += 10;
//   height +=10;
// }
// }
// const destroyBoxes= ()=> {
//   div.innerHTML = '';
// }
// btnCreate.addEventListener('click',()=>{
//   createBoxes()
// })
// btnDestroy.addEventListener('click', ()=>{
//   destroyBoxes()
// })

