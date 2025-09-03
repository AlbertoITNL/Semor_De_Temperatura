function cambiarTemperatura(){
    let temp= document.getElementById("temp");
    temp.innerText = (20 + (Math.random()*10)).toFixed(2);

    
}
setInterval(cambiarTemperatura, 2000);
