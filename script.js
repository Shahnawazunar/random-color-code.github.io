const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');
const text = document.querySelector('.hex-value');

const maxLength = 24;
const ganerateColor = ()=>{
  container.innerHTML=';'
  for(i=0;i<maxLength;i++){
  let hexColor = Math.floor(Math.random()*0xffffff).toString(16);
  hexColor = `#${hexColor.padStart(6,'0')}`

  const color = document.createElement('li');
  color.classList.add('color');
  color.innerHTML=
    `
    <div class="color-box" style="background:${hexColor}"></div>
    <span class="hex-value">${hexColor}</span>
    `
  container.appendChild(color)

}
}

ganerateColor()
refreshBtn.addEventListener('click', ganerateColor)