const refreshBtn = document.querySelector('.refresh-btn');
const container = document.querySelector('.container');


const maxItem = 24;
const randomColor = ()=>{
    container.innerHTML = "";
    for(i=0;i< maxItem;i++){
        let hexrandom = Math.floor(Math.random()* 0xffffff).toString(16);
        hexrandom=`#${hexrandom.padStart(6 ,'0')}`;

        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `
        <div class="color-box" style="background:${hexrandom}"></div>
      <span class="hex-value">${hexrandom}</span>
        `
        container.appendChild(color)
    }
}
randomColor();
refreshBtn.addEventListener('click',randomColor)