var heroHealth = 100;
var heroAttackPower = 2;

var b1CoolDown = 0;
var b1ActiveCoolDown = false;
var b2CoolDown = 0;
var b2ActiveCoolDown = false;
var b3CoolDown = 0;
var b4CoolDown = 0;

var enemyHealth = 100;
var enemyAttackPower = 2;
var turnCounter = 0;

var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");
var button4 = document.getElementById("b4");

button1.addEventListener("click", function(e){
  if(b1ActiveCoolDown == false){
    var enemyCurrentHealth = document.getElementById("healthIdicatorA");
    enemyHealth = enemyHealth - heroAttackPower;
    enemyCurrentHealth.setAttribute("style", "width:" + enemyHealth + "%");

  }
});

button2.addEventListener("click", function(e){
  if(b2ActiveCoolDown == false){
    heroAttackPower = heroAttackPower + 2;
    
  }
}
);

function activatesCooldown(coolDownToUpdate){
  if(coolDownToUpdate == 1){
    b1ActiveCoolDown = true;
    button1.setAttribute("style", "background: url(img/disabledButton.png)");
  }
  else if(coolDownToUpdate == 2){
    b2ActiveCoolDown = true;
    button2.setAttribute("style", "background: url(img/disabledButton.png)");
  }
};

function updatesCoolDown(){
  if(b1ActiveCoolDown == true){
    b1CoolDown++;
  }
  if(b2ActiveCoolDown == true){
    b2CoolDown++;
  }
};

function checksForCooldown(){
  
}


/*attackButton.addEventListener("click",function(e){
    
    var health = document.getElementById("healthIdicatorA");
    currentHealth = currentHealth - attackPower;
    console.log(health);
    console.log(currentHealth);
    health.setAttribute("style", "width:" + currentHealth + "%");
    
});
*/