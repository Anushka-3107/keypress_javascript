const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

 
startBtn.addEventListener("click" , ()=>{
document.addEventListener("keydown" , handleDown);
document.addEventListener("keyup" , handleUp);


})

stopBtn.addEventListener("click" , ()=>{
    document.removeEventListener("keydown" , handleDown);
    document.removeEventListener("keyup" , handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = " ";
   
})


const handleDown = (e) =>{
    logDiv.textContent = `key ${e.key} is pressed down`;
    stateDiv.textContent = 'key is down';
}
    
const handleUp = (e) =>{
    logDiv.textContent = `key ${e.key} is released`;
    stateDiv.textContent = 'key is up';
}