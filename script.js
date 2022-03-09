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
    button1.setAttribute("style", "background: url(img/disabledButton.png)");
    activeatesCoolDowns(1);
    checksCoolDowns(1);
  }
});

button2.addEventListener("click", function(e){
  if(b2ActiveCoolDown == false){
    heroAttackPower = heroAttackPower + 2;
    button2.setAttribute("style", "background: url(img/disabledButton.png)");
    activeatesCoolDowns(2);
    checksCoolDowns(2);
  }
}
);

function activeatesCoolDowns(buttonToUpdate){
  if(buttonToUpdate == 1){
    b1ActiveCoolDown = true;
    b1CoolDown++;
  }
  else if(buttonToUpdate == 2){
    b2ActiveCoolDown = true;
    b2CoolDown++;
  }

};

function checksCoolDowns(buttonPressed){
  if(buttonPressed = 1){
    if(b2ActiveCoolDown == true){
     b2CoolDown++; 
     endsCoolDowns();
    }
  }
  if(buttonPressed = 2){
    if(b1ActiveCoolDown == true){
      b1CoolDown++;
      endsCoolDowns();
    }
  }
};

function endsCoolDowns(){
  if(b1CoolDown%2 == 0){
    b1ActiveCoolDown = false;
    button1.setAttribute("style", "background: url(img/activeButton.png)");
  }
  if(b2CoolDown%2 == 0){
    b2ActiveCoolDown = false;
    button2.setAttribute("style", "background: url(img/activeButton.png)");
  }
};
/*attackButton.addEventListener("click",function(e){
    
    var health = document.getElementById("healthIdicatorA");
    currentHealth = currentHealth - attackPower;
    console.log(health);
    console.log(currentHealth);
    health.setAttribute("style", "width:" + currentHealth + "%");
    
});
*/