/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Obi-Wan Kenobi and
    Anakin Skywalker.
*/ 

let obiwanAttack = 25
let anakinAttack = 35

if(obiwanAttack < anakinAttack){
    console.log('Anakin has a better attack than Obiwan')
}else if(obiwanAttack > anakinAttack){
    console.log('Obiwan has abetter attack than Anakin')
} else{
    console.log('Anakin and Obiwan have the same attack')
}

let obiwanHealth = 100
let oviwanDefense = 0

if(obiwanHealth <= anakinAttack){
    console.log('Obiwan has been slain')
}else {
    obiwanHealth -= anakinAttack
    console.log('Obiwans health is now at ') + obiwanHealth
}
