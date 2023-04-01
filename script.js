let character = document.getElementById('character');
let character_img = document.getElementById('pika');
let obsticle = document.getElementById("obsticle");
let score = 0;
let state = "running";

// event listener for character
document.addEventListener('keydown', function(){
    jump();
});

// method for jump event
function jump(){
    if(character.classList != "jump-animation"){
        character.classList.add("jump-animation");
    }
    setTimeout(function(){
        character.classList.remove("jump-animation");
    },500)
}


function checkCollision(){
    let obsticleLeft = document.getElementById("obsticle").offsetLeft;
    let characterTop = document.getElementById('character').offsetTop;
    console.log("character", characterTop);
    console.log("obsticle left", obsticleLeft);
    if(obsticleLeft < 450 && obsticleLeft > 300 && characterTop > 400){
        state = "gameOver";
        obsticle.style.display = "none";
        character_img.src="img/blast.gif";
        
        setTimeout(function(){
            character_img.src="img/rip.png";
        },2000)
    }
   
}

setInterval(()=>{
   checkCollision();
},50)


setInterval(()=>{
    if(state == 'running'){
      score = score + 1;
      document.getElementById("score").innerHTML = score;
    }    

},1000)