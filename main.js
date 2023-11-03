const container = document.querySelector('.container');
// const cells = 5;
const resetBut = document.querySelector('.reset-page');
const side_bar = document.querySelector('.side-bar');
// function makeGrid(rows, cols){
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', cols);
//     // container.style.cssText = 'border: 1rem solid; background: blue'
//     for(i = 0; i < (rows * cols); i++){
//         let cells = document.createElement('div');
//         cells.innerText = (i + 1);
//         cells.classList.add('grid');
//         container.appendChild(cells);
//     }
// }
// makeGrid(16, 16);
function makeGrid(cells){
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    
    for (let i = 0; i < cells; i++){
        const rows = document.createElement('div');
        rows.classList.add('grid-row');

        for (j = 0; j < cells; j++){
            const widthAndHeight = 960 / cells
            const cols = document.createElement('div');
            cols.classList.add('grid-col');
            cols.style.width = `${widthAndHeight}px`;
            cols.style.height = `${widthAndHeight}px`;
           
            //eventListener tochange bg-color
            cols.addEventListener('mouseenter', () =>{
                cols.style.backgroundColor = 'orange'
            })
            rows.appendChild(cols)
        }
        wrapper.appendChild(rows);
    }
    container.appendChild(wrapper)
}
// function addInput(){
    
// }

// function validateInput(){
//     const validBut = document.createElement("button");
//     if (addInput()){
//         side_bar.appendChild(validBut);
//     }
//     let userSize = Number(input);
//     console.log(userSize);
// }
// resetBut.addEventListener('click', () => {
//     let input = document.createElement('input')
//     input.placeholder = "What's the grid size?"
//     input.name = "userSize";
//     side_bar.appendChild(input);
// });

// function getInput(){
//     console.log(input.value);
// }
resetBut.addEventListener('click', () => {
    let userSize = Number(prompt("What's the grid size? ", 0));

    while (userSize > 100){
        userSize = Number(prompt("What's the grid size? ", '<100'));
    }
    const wrapper = document.querySelector('.wrapper')
    if (!wrapper){
        makeGrid(userSize);
    }else{
        wrapper.remove()
        makeGrid(userSize)
    }
})
// })
// makeGrid(cells)
// //alternative //eventListener tochange bg-color
// const alldivs = document.querySelectorAll('.grid-col')
// alldivs.forEach(div => {
//     div.addEventListener('mouseenter', () => {
//         div.style.backgroundColor = 'orange'
//     })
