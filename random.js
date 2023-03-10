
window.onload=function(){
let generate = document.getElementById('btn');
generate.addEventListener('click', () => {
    let min = 1;
    let max = 15;
    let random_num= Math.floor(Math.random()*(max-min) + +min);
    document.getElementById('output').innerHTML = ` =  ${random_num}`;
})    }