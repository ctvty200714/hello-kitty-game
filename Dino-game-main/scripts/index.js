const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");




function jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
  
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 300);
    }
  }







let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("лооооооох🤮🤮🤮") 
        
    }
}, 10)

document.addEventListener("keydown", function (event) {
    jump();
  });

  btn1.addEventListener('click', function(){
    function func (){
        let k = 0;
        function count(){
           return k++
        }
        return count()
    }
    let res = func();
    btn1.innerText = res()
  })