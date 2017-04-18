/* Dragon Slayer v1.0
 * Autor: mTiDen
 * Created: 18.04.2017
 */

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 8 + 1);
var totalDamage = 0;
var lifePoints = 30;


while(slaying){
    if (youHit === 1){
        console.log("You hit the dragon!");
        totalDamage += damageThisRound;
        console.log("DMG this rnd: " +damageThisRound);
        console.log("totalDMG now: " +totalDamage);
            if (totalDamage >= 35){
                console.log("You slew the fcking dragon with " +totalDamage);
                slaying = false;
            }
            else{
                youHit = Math.floor(Math.random() * 2);
                damageThisRound = Math.floor(Math.random() * 8 + 1);
            }
    }
    else{
            console.log("You didn't hit - The dragon is attacking you!");
            var dragonDamage = Math.floor(Math.random() * 7 + 1);
            lifePoints -= dragonDamage;
            console.log("Your Life: " +lifePoints);
            youHit = Math.floor(Math.random() * 2);
            
            if (lifePoints <= 0){            	
            	console.log("You're Dead!");
            	console.log("Life left: " +lifePoints);
            	slaying = false;
            };
            
            
        }
}